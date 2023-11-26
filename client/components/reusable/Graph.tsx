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
  // if (data) {
  //   console.log(data, status, error);
  // }
  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);

  // ADD NODE QUERY AND RESPONSE
  // const nodes = [
  //   'Node 1',
  //   'Node 2',
  //   'Node 3',
  // ];
  // const nodes = Array.from({length: 40}, ()=>{
  //   return ({name:'Node 1',
  //     pods: [
  //       {name: 'Pod 1', containers: [{name: 'nginx', image: 'nginx'},{name: 'busybox', image: 'busybox'}]},
  //       {name: 'Pod 2', containers: [{name: 'nginx', image: 'nginx'},{name: 'busybox', image: 'busybox'}]},
  //       {name: 'Pod 3', containers: [{name: 'nginx', image: 'nginx'},{name: 'busybox', image: 'busybox'}]}
  //     ]
  //   })
  // })
  const nodes = [
    {
      name: 'Node 1',
      pods: [
        {
          name: 'Pod 1',
          containers: [
            { name: 'nginx', image: 'nginx' },
            { name: 'busybox', image: 'busybox' },
          ],
        },
        {
          name: 'Pod 2',
          containers: [
            { name: 'nginx', image: 'nginx' },
            { name: 'busybox', image: 'busybox' },
          ],
        },
        {
          name: 'Pod 3',
          containers: [
            { name: 'nginx', image: 'nginx' },
            { name: 'busybox', image: 'busybox' },
          ],
        },
      ],
    },
    { name: 'Node 2', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
    { name: 'Node 3', pods: [{ name: '1' }, { name: '2' }, { name: '3' }] },
  ];

  const formattedNodes = formatNodes(nodes, 15);
  const [nodesScale, setNodesScale] = useState(1);

  /* 
  bottom: 1504.166748046875
  height: 2523.533447265625
  ​
  left: -311.1000061035156
  ​
  right: 2572.4334411621094
  ​
  top: -1019.36669921875
  ​
  width: 2883.533447265625
  ​
  x: -311.1000061035156
  ​
  y: -1019.36669921875


  bottom: 1902.5501098632812
​
  height: 2523.533447265625
  ​
  left: 0
  ​
  right: 4522.66650390625
  ​
  top: -620.9833374023438
  ​
  width: 4522.66650390625
  ​
  x: 0
  ​
  y: -620.9833374023438
  */

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
    <div className="graphContainer">
      <Draggable scale={nodesScale}>
        <div className="graph" ref={graph}>
          {formattedNodes}
        </div>
      </Draggable>
    </div>
  );
};

export default Graph;
