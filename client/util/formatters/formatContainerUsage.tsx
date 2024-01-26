import { useGetMemByContainerPodQuery } from '../../services/api';
import { useGetCpuByContainerPodQuery } from '../../services/api';

// TYPES
// type ListViewDisplayProps = {
//     metricsMap: any;
//   };

//   type MetricsMapItem = {
//     cpuUsage: number;
//     cpuUsagePct: number;
//     memUsage: number;
//     memUsagePct: number;
//     type: string;
//   };

//   type Cache = {
//     [key: string]: MetricsMapItem[];
//   };

export const formatContainerUsage = (): any => {
  const { data, isLoading } = useGetMemByContainerPodQuery('', {});
  const { data: moreData, stillLoading } = useGetCpuByContainerPodQuery('', {});
  //   if (data) {
  //     console.log('inside formater', data);
  //   }

  if (moreData) {
    console.log('more data', moreData);
  }
  const cache = {};

  return cache;
};
