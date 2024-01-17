import { useRef } from 'react';
import '../../css/graph.scss';
import { useTheme } from '../../hooks';
import { metricsApi } from '../../services/api';
import { formatNodes } from '../../util';
import { Draggable } from '../Draggable/Draggable';
import { useGrid } from '../context/GridContext';
import './Graph.module.scss';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
export const Graph = () => {
  const { setGridScrollable } = useGrid();

  const { data, isSuccess } = metricsApi.endpoints.getClusterInfo.useQueryState(
    undefined,
    {},
  );

  console.log('useQueryStateResult', data);

  const nestedClusterInfo =
    isSuccess && data ? formatNodes(data.nodes, 8) : null;

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  return (
    <Draggable>
      <div className={`graph ${theme}`} ref={graph}>
        {nestedClusterInfo}
      </div>
    </Draggable>
  );
};
