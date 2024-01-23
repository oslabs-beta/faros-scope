import { useRef } from 'react';
import { metricsApi } from '../../services/api';
import {formatNodes} from '../../util';
import { Draggable } from '../Draggable/Draggable';
import { useCustomTheme } from '../../hooks';
import './Graph.module.scss';
import '../../css/graph.scss';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
export const Graph = () => {
  const { data, isSuccess } = metricsApi.endpoints.getClusterInfo.useQueryState(
    undefined,
    {},
  );

  console.log('useQueryStateResult', data);

  const nestedClusterInfo =
    isSuccess && data ? formatNodes(data.nodes, 8) : null;

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useCustomTheme();
  return (
    <Draggable>
      <div tabIndex={0} className={`graph ${theme}`} ref={graph}>
        {nestedClusterInfo}
      </div>
    </Draggable>
  );
};
