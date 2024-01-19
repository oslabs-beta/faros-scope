import { ListView } from './ListView';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';

export const ListViewDisplay = () => {
  const metricsState = useSelector((state: RootState) => state?.metricsMap);
  let organizedData;
  console.log('check for mettttts', metricsState);
  if (metricsState) {
    organizedData = formatMetricsMap(metricsState);
  }
  console.log('revisedData', organizedData);

  return (
    <div className="list-view">
      <ListView metricsObject={organizedData.pod} />
      <ListView metricsObject={organizedData.container} />
    </div>
  );
};
