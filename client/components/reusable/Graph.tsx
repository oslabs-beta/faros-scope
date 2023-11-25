import React, { useEffect, useRef, useState } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import setScale from '../../util/setScale';
import '../../css/Graph.scss';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
const Graph = () => {
  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const nodes = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3,
    4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
    13, 14,
  ];
  const formattedNodes = formatNodes(nodes, 8);
  const [nodesScale, setNodesScale] = useState(1);

  useEffect(() => {
    if (!graph.current) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLDivElement;
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
