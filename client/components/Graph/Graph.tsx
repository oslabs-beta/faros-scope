import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { metricsApi } from '../../redux/metricsApi';
import formatNodes from '../../util/formatNodes';
import { Draggable } from '../Draggable/Draggable';
import '../../css/Graph.scss';
import { useTheme } from '../context/Theme';
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

  // https://redux-toolkit.js.org/rtk-query/api/created-api/endpoints#matchers
  const state = useSelector(
    metricsApi.endpoints.getClusterInfo.select(undefined),
  );

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
