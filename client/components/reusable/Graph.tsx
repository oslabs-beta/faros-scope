import React, { useRef } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import '../../css/Graph.scss';
import { useTheme } from '../../Theme';
// import query
import {
useGetClusterInfoQuery,
} from '../../redux/metricsApi';

import { useSelector, isPlainObject } from 'react-redux';
import {metricsApi } from '../../redux/metricsApi';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
const Graph = () => {

    // const { data: Cluster, status, error } = useGetClusterInfoQuery();

    // console.log(data, status, error); 

    // const { data: { nodes } } = useSelector(metricsApi.endpoints.getClusterInfo.select(undefined, {}));
    // console.log(nodes);
    // console.log(typeof nodes?.ids); 
    // console.log(Array.isArray(nodes?.ids));
    // const result = metricsApi.endpoints.getClusterInfo.select()(state);
    // console.log('RESULT ', result)



  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  // ADD NODE QUERY AND RESPONSE
//   const nodes = Array.from({ length: 50 }, () => {
//     return {
//       name: 'Node 1',
//       pods: [
//         {
//           name: 'Pod 1',
//           containers: [
//             { name: 'nginx', image: 'nginx' },
//             { name: 'busybox', image: 'busybox' },
//           ],
//         },
//         {
//           name: 'Pod 2',
//           containers: [
//             { name: 'nginx', image: 'nginx' },
//             { name: 'busybox', image: 'busybox' },
//           ],
//         },
//         {
//           name: 'Pod 3',
//           containers: [
//             { name: 'nginx', image: 'nginx' },
//             { name: 'busybox', image: 'busybox' },
//           ],
//         },
//       ],
//     };
//   });

// if (data) {
//     const formattedNodes = (formatNodes(data, 8));
//     }

//     console.log(formattedNodes);


  return (
    <Draggable>
          <div className={`graph ${theme}`} ref={graph}>
              {/* {nodes && (
                  nodes.ids.map((node) => {
                      return formatNodes(node, 8);
                  })
              )} */}
      </div>
    </Draggable>
  );
};

export default Graph;
