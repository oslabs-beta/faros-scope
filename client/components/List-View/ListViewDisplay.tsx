import { ListView } from './ListView';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

export const ListViewDisplay = () => {
  const metricsState = useSelector((state: RootState) => state?.metricsMap);
  console.log('Metrics Data', metricsState);

  const reshape = (data: any): any => {
    const cache = {};

    for (const item in data.metricsMap) {
      const dataObj = { name: item, metrics: data.metricsMap[item] };
      if (!cache[data.metricsMap[item].type]) {
        cache[data.metricsMap[item].type] = [dataObj];
      } else {
        cache[data.metricsMap[item].type].push(dataObj);
      }
    }
    return cache;
  };
  const organizedData = reshape(metricsState);
  console.log('revisedData', organizedData);
  //   const metricsData = metricsState
  //podNames={podState}
  return (
    <div>
      <ListView organizedData={organizedData.pod} />
      <ListView organizedData={organizedData.container} />
    </div>
  );
};
