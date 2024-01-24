import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
import { ListView } from './ListView';
import './ListView.scss';

export const ListViewDisplay = () => {
  let metricsState = useSelector((state: RootState) => state?.metricsMap);

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
  }

  return (
    <div className="list-view-outer">
      <div className="list-view">
        <ListView metricsObject={metricsState.pod} />
        <ListView metricsObject={metricsState.container} />
      </div>
    </div>
  );
};
