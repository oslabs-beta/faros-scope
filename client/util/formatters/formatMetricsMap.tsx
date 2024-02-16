type ListViewDisplayProps = {
  metricsMap: any;
};

type MetricsMapItem = {
  cpuUsage: number;
  cpuUsagePct: number;
  memUsage: number;
  memUsagePct: number;
  type: string;
};

type Cache = {
  [key: string]: MetricsMapItem[];
};

export const formatMetricsMap = (data: ListViewDisplayProps): any => {
  const cache: Cache = {};
  // console.log('inside Metrics', data)

  for (const item in data.metricsMap) {
    const dataObj: MetricsMapItem = {
      ...data.metricsMap[item],
      name: item,
    };
    if (!cache[data.metricsMap[item].type]) {
      cache[data.metricsMap[item].type] = [dataObj];
    } else {
      cache[data.metricsMap[item].type].push(dataObj);
    }
  }

  cache.pod = cache?.pod?.map((elm, i) => {
    return { ...elm, id: i };
  });

  cache.node = cache?.node?.map((elm, i) => {
    return { ...elm, id: i };
  });

  cache.container = cache?.container?.map((elm, i) => {
    return { ...elm, id: i };
  });

  return cache;
};
