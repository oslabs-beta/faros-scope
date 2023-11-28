import React, { useRef } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import '../../css/Graph.scss';
import { useTheme } from '../../Theme';
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
  const { theme } = useTheme();
  // ADD NODE QUERY AND RESPONSE
  const nodes = Array.from({ length: 50 }, () => {
    return {
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
    };
  });

  const formattedNodes = formatNodes(nodes, 8);


  return (
    <Draggable>
      <div className={`graph ${theme}`} ref={graph}>
        {formattedNodes}
      </div>
    </Draggable>
  );
};

export default Graph;
