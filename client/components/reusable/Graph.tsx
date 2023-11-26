import React, { useEffect, useRef, useState } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import setScale from '../../util/setScale';
import '../../css/Graph.scss';
// import query
import {
  useGetTopNodesQuery,
  useGetTotalNodesQuery,
} from '../../redux/metricsApi';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
const Graph = () => {
  // const { data, status, error } = useGetTopNodesQuery();
  // console.log(data, status, error);

  const {
    data: TNQData,
    status: TNQStatus,
    error: TNQError,
  } = useGetTotalNodesQuery();
  console.log(TNQData, TNQStatus, TNQError);

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);

  // ADD NODE QUERY AND RESPONSE
  const nodes = Array.from({length: 35}, ()=>{
    return ({name:'Node 1',
      pods: [
        {name: 'Pod 1', containers: [{name: 'nginx', image: 'nginx'},{name: 'busybox', image: 'busybox'}]},
        {name: 'Pod 2', containers: [{name: 'nginx', image: 'nginx'},{name: 'busybox', image: 'busybox'}]},
        {name: 'Pod 3', containers: [{name: 'nginx', image: 'nginx'},{name: 'busybox', image: 'busybox'}]}
      ]
    })
  });

  const formattedNodes = formatNodes(nodes, 8);
  const [nodesScale, setNodesScale] = useState(1);

  // DELETE
  const zoomSafety = 40;
  useEffect(() => {
    if (!graph.current) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const target = e.currentTarget as HTMLDivElement;
      const dimensions = target.getBoundingClientRect();
      if (e.deltaY > 0 && nodesScale > 0.5) {
        setNodesScale((prev) => prev - 0.1);
      } else if (e.deltaY < 0 && nodesScale < 1.5) {
        setNodesScale((prev) => prev + 0.1);
      }
      setScale(target, nodesScale);
    };
    graph.current.addEventListener('wheel', handleWheel);
    return () => {
      graph.current?.removeEventListener('wheel', handleWheel);
    };
  });

  return (
      <Draggable scale={nodesScale}>
        <div className="graph" ref={graph}>
          {formattedNodes}
        </div>
      </Draggable>
  );
};

export default Graph;
