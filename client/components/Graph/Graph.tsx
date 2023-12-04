import { useRef, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { metricsApi } from '../../redux/metricsApi';
import formatNodes from '../../util/formatNodes';
import { Draggable } from '../Draggable/Draggable';
import '../../css/Graph.scss';
import { useTheme } from '../context/Theme';
// import query
import { createSelector } from '@reduxjs/toolkit'
import { useGetClusterInfoQuery } from '../../redux/metricsApi';
import GridProvider from '../context/GridContext';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
export const Graph = () => {

    // ^ data is being returned from the result of getClusterInfoQuery in Main 
    const { data, isSuccess } = metricsApi.endpoints.getClusterInfo.useQueryState(undefined, {})

    console.log('useQueryStateResult', data);

  const nestedClusterInfo = isSuccess && data ? formatNodes(data.nodes, 8) : null;

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

    // TODO: Handle if query is not sucessful 
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
