import React, { useRef } from 'react';
import formatNodes from '../../util/formatNodes';
import Draggable from './Draggable';
import '../../css/Graph.scss';
import { useTheme } from '../../Theme';
// import query
import {
useGetClusterInfoQuery,
} from '../../redux/metricsApi';
import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/store';
import { metricsApi, selectAllNodes } from '../../redux/metricsApi';
import NodesList from './NodesList';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
const Graph = () => {

    const { data, status, error } = useGetClusterInfoQuery(undefined, {});
    console.log('TRANSFORMED RESPONSE', data);

    // ^ Options for getting state from the store
    const state = useSelector(metricsApi.endpoints.getClusterInfo.select());
    console.log('ENDPOINT', state); 
    // const state = useAppSelector((state) => state);

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  return (
    <Draggable>
      <div className={`graph ${theme}`} ref={graph}>
              {/* {formattedNodes} */}
              {/* {data && <NodesList />} */}
      </div>
    </Draggable>
  );
};

export default Graph;

// function NodesList() {

//     const nodes = useSelector(selectAllNodes) ?? []; 
//     console.log(nodes); 


//     return (
//         <div>

//         </div>
//     )
// }