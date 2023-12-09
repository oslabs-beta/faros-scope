import { useRef } from 'react';
import { metricsApi } from '../../redux/metricsApi';
import formatNodes from '../../util/formatNodes';
import { Draggable } from '../Draggable/Draggable';
import { useTheme } from '../context/Theme';
import { useGrid } from '../context/GridContext';
import { hexagonChain } from '../../util/testPodUtil';
import '../../css/Graph.scss';

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

  const handleFocus = () => {
    // setGridScrollable(false);
  };

  const handleBlur = () => {
    // setGridScrollable(true);
  };

  //* reference to the draggable div, which is the container for the graph
  const graph = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  return (
    <Draggable>
      <div
        onClick={handleFocus}
        onBlur={handleBlur}
        tabIndex={0}
        className={`graph ${theme}`}
        ref={graph}
      >
        {/* {nestedClusterInfo} */}
        <svg style={{width: '100%', height: '100%'}}>
          {hexagonChain(60, 80, 20, 10)}
        </svg> 
        <svg style={{width: '100%', height: '100%'}}>
          {hexagonChain(60, 80, 20, 10)}
        </svg>
      </div>
    </Draggable>
  );
};
