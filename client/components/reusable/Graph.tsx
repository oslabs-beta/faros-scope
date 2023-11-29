import React, { useRef } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import '../../css/Graph.scss';
import { useTheme } from '../../Theme';
// import query
import { useGetClusterInfoQuery } from '../../redux/metricsApi';
import GridProvider from '../context/GridContext';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
const Graph = () => {
  const { data, isSuccess } = useGetClusterInfoQuery(undefined, {});
  const nestedClusterInfo = isSuccess && data ? formatNodes(data, 8) : null;

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <GridProvider>
      <Draggable>
        <div className={`graph ${theme}`} ref={graph}>
          {nestedClusterInfo}
        </div>
      </Draggable>
    </GridProvider>
  );
};

export default Graph;
