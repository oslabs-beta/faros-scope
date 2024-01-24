import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pod, Node, Container } from '../../types/types';

export const metricsApi = createApi({
  reducerPath: 'metricsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://104.154.129.231:8000/' }),
  endpoints: (builder) => ({
    getClusterInfo: builder.query({
      query: () => 'clusterInfo',
      transformResponse: (response: any) => {
        let nodes: Node[] = [];
        let pods: Pod[] = [];
        let containers: Container[] = [];

        response.forEach((node: Node) => {
          nodes.push({ ...node, id: node.nodeName });
          node.pods.forEach((pod: Pod) => {
            pods.push({ ...pod, id: pod.name, nodeId: node.nodeName });
            pod.containers.forEach((container: Container) => {
              containers.push({
                ...container,
                id: container.name,
                podId: pod.name,
              });
            });
          });
        });

        return {
          nodes: nodes,
          pods: pods,
          containers: containers,
        };
      },
    }),
    getNodeView: builder.query({
        queryFn: async (arg, api, extraOptions, baseQuery) => {
            console.log('Inside Query Fn')
            const response = await fetch('http://34.16.79.211:80/node-view');
            const data = await response.json();
            console.log(data);
            return {data: data}; 
      },
    }),
    getClusterMetrics: builder.query({
      query: () => 'clusterMetrics',
    }),
    getNodeStats: builder.query({
      query: () => 'nodeStats',
    }),
    getPodStats: builder.query({
      query: () => 'podStats',
    }),
    getClusterMetricsMap: builder.query({
      query: () => 'clusterMetricsMap',
    }),
    getMessage: builder.query({
      query: (channel) => `message/${channel}`,
    }),
  }),
});

export const {
    useGetNodeViewQuery,
  useGetClusterInfoQuery,
  useGetNodeStatsQuery,
  useGetPodStatsQuery,
  useGetClusterMetricsMapQuery,
} = metricsApi;
