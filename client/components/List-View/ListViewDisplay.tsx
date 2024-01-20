import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
import { ListView } from './ListView';

export const ListViewDisplay = () => {
  let metricsState = useSelector((state: RootState) => state?.metricsMap);

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
  }

  return (
    <div className="list-view">
      {/* <CustomPaginationActionsTable /> */}
      <ListView metricsObject={metricsState.pod} />
      <ListView metricsObject={metricsState.container} />
    </div>
  );
};
