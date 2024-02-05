import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pod, Node, Container } from '../../types/types';

// Get the current time in seconds (Unix timestamp)
const now = Math.floor(Date.now() / 1000);

// Calculate the start time (10 minutes ago)
const tenMinutesAgo = now - 60000 * 2;

export const metricsApi = createApi({
  reducerPath: 'metricsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://35.185.108.181:8000/' }),
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
        const response = await fetch('http://35.185.108.181:8000/node-view');
        const data = await response.json();
        return { data: data };
      },
    }),
    getContainerUsage: builder.query({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const response = await fetch('http://34.139.156.110:80/usage-metrics');
        const data = await response.json();
        console.log(data);
        return { data: data };
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
  useGetContainerUsageQuery,
} = metricsApi;
