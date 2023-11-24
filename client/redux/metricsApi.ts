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
    getTotalNodes: builder.query({
      query: () => 'query?query=kube_pod_info'
    })
  }),
});

export const { useGetMetricsQuery, useGetTotalNodesQuery } = metricsApi;
export default metricsApi; 
