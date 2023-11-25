import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMetrics } from '../../types/types'

const metricsApi = createApi({
  reducerPath: 'metricsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://34.28.168.97:9090/api/v1/' }),
  // 34.28.168.97:9090/api/v1/query?query=container_memory_usage_bytes
  endpoints: (builder) => ({
    getMetrics: builder.query<IMetrics, void>({
      query: () => 'metrics',
    }),
    // returns an array of objects where each object is a node
    // node
    getTotalNodes: builder.query({
      query: () => 'query?query=kube_node_info'
    }),
    // returns array of objects where each object is a pod
    // node, pod, 
    getTotalPods: builder.query({
      query: () => 'query?query=kube_pod_info'
    }),
    // returns array of objects where each object is a container; provides details about container image, container name,  and node as instance  in addition to cpu
    getTotalContainers: builder.query({
      query: () => 'query?query=container_cpu_usage_seconds_total'
    }),
    // ^ returns array of objects where each object is a node; provides details about 
    // node, mem available in bytes
    getNodeMemory: builder.query({
      query: () => 'query?query=node_memory_MemAvailable_bytes'
    })
    // ^ Amount of Memory Avail to each Node      
  }),
});

export const { useGetMetricsQuery, useGetTotalNodesQuery, useGetTotalPodsQuery, useGetTotalContainersQuery, useGetNodeMemoryQuery } = metricsApi;
export default metricsApi; 
