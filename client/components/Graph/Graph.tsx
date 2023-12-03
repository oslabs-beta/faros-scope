import { useRef } from 'react';
import formatNodes from '../../util/formatNodes';
import { Draggable } from '../Draggable/Draggable';
import { useTheme } from '../context/Theme';
import { useGrid } from '../context/GridContext';
import '../../css/Graph.scss';
// import { useSelector } from 'react-redux';
// import { metricsApi } from '../../redux/metricsApi';
// import query
import { useGetClusterInfoQuery } from '../../redux/metricsApi';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
export const Graph = () => {
  const { data, isSuccess } = useGetClusterInfoQuery(undefined, {});
  const { setGridScrollable } = useGrid();
  const nestedClusterInfo = isSuccess && data ? formatNodes(data, 8) : null;

  // https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints#matchers
  // const state = useSelector(
  //   metricsApi.endpoints.getClusterInfo.select(undefined),
  // );

  const handleFocus = () => {
    setGridScrollable(false);
  };

  const handleBlur = () => {
    setGridScrollable(true);
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
        {nestedClusterInfo}
      </div>
    </Draggable>
  );
};
