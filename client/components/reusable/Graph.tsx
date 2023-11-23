import React, { useRef } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import '../../css/Graph.scss';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around
 * @returns ReactNode
 */
const Graph = () => {
  // reference to the draggable div, which is the container for the graph
  const draggable = useRef<HTMLDivElement>(null);
  const nodes = [1, 2, 3, 4, 5];
  return (
    <Draggable>
      <div className="graph" ref={draggable}>
        {formatNodes(nodes)}
      </div>
    </Draggable>
  );
};

export default Graph;
