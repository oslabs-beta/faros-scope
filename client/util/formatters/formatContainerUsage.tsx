type containerUsageMetrics = {
  pod: any;
  namespace: any;
  node: any;
};

type cUsageMetricsItem = {
  [key: string]: {
    MEM: number;
    CPU: number;
  };
};

type Cache = {
  node: any;
  pod: any;
  namespace: any;
};

export const formatContainerUsage = (data: containerUsageMetrics): any => {
  const cache: Cache = { node: [], pod: [], namespace: [] };
  if (data.pod) {
    data.pod.forEach((item: cUsageMetricsItem, idx: number) => {
      const key = Object.keys(item)[0];
      const spreadPod = { name: key, id: idx, type: 'pod', ...item[key] };
      cache.pod.push(spreadPod);
    });
  }

  if (data.node) {
    data.node.forEach((item: cUsageMetricsItem, idx: number) => {
      const key = Object.keys(item)[0];
      const spreadNode = { name: key, id: idx, type: 'node', ...item[key] };
      cache.node.push(spreadNode);
    });
  }

  if (data.namespace) {
    data.namespace.forEach((item: cUsageMetricsItem, idx: number) => {
      const key = Object.keys(item)[0];
      const spreadNamespace = {
        name: key,
        id: idx,
        type: 'namespace',
        ...item[key],
      };
      cache.namespace.push(spreadNamespace);
    });
  }
  return cache;
};
