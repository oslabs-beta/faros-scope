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

        response['nodes'].forEach((node: Node) => {
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
        const response = await fetch('http://34.16.79.211:80/node-view');
        const data = await response.json();
        return { data: data };
      },
    }),
    getMemByContainerPod: builder.query({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const response = await fetch(
          `http://104.198.235.133/api/v1/query?query= sum by (pod) (container_memory_usage_bytes{pod!=""})`,
        );

        const data = await response.json();
        return { data: data };
      },
    }),
    getCpuByContainerPod: builder.query({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        const response = await fetch(
          `http://104.198.235.133/api/v1/query?query= sum by (pod) (rate(container_cpu_usage_seconds_total{pod!=""}[5m]))`,
        );

        const moreData = await response.json();
        return { moreData: moreData };
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

// QUERIES TO BUILD
// Container Usage By Pod (MEM)
// `http://104.198.235.133/api/v1/query?query= sum by (pod) (container_memory_usage_bytes{pod!=""})`
// Container Usage By Pod (CPU)
//`http://104.198.235.133/api/v1/query?query= sum by (pod) (rate(container_cpu_usage_seconds_total{pod!=""}[5m]))`

// Container Usage By Namespace (MEM)
// `http://104.198.235.133/api/v1/query?query= sum by (namespace) (container_memory_usage_bytes{namespace!=""})`
// Container Usage By Node (MEM)
// `http://104.198.235.133/api/v1/query?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)`

// Container Usage By Pod (Namespace)
// `http://104.198.235.133/api/v1/query?query= sum by (namespace) (rate(container_cpu_usage_seconds_total{namespace!=""}[5m]))`
// Container Usage By Pod (Node)
// `http://104.198.235.133/api/v1/query?query= sum by (kubernetes_io_hostname) (rate(container_cpu_usage_seconds_total{}[5m]))`

export const {
  useGetNodeViewQuery,
  useGetClusterInfoQuery,
  useGetNodeStatsQuery,
  useGetPodStatsQuery,
  useGetClusterMetricsMapQuery,
  useGetMemByContainerPodQuery,
  useGetCpuByContainerPodQuery,
} = metricsApi;
