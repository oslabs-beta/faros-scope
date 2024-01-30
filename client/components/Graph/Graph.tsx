import { useRef } from 'react';
import { useTheme } from '@mui/material';
// import './graph.scss';
import { metricsApi } from '../../services/api';
import { formatNodes } from '../../util';
import { Draggable } from '../Draggable/Draggable';
import './Graph.module.scss';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
export const Graph = () => {
  // const { setGridScrollable } = useGrid();

  const { data, isSuccess } = metricsApi.endpoints.getClusterInfo.useQueryState(
    undefined,
    {},
  );

  const nestedClusterInfo =
    isSuccess && data ? formatNodes(data.nodes, 8) : null;

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const muiTheme = useTheme();

  return (
    <Draggable>
      <div className={`graph ${muiTheme.palette.mode}`} ref={graph}>
        {nestedClusterInfo}
      </div>
    </Draggable>
  );
};
