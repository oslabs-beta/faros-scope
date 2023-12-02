import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const metricsApi = createApi({
  reducerPath: 'metricsApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://104.154.129.231:8000/' }),
  endpoints: (builder) => ({
    getClusterInfo: builder.query({
      query: () => 'clusterInfo'
    }),
    getNodeStats: builder.query({
      query: () => 'nodeStats' 
    }),
    getPodStats: builder.query({
      query: () => 'podStats' 
    })
  }),
});

export const { useGetClusterInfoQuery, useGetNodeStatsQuery, useGetPodStatsQuery} = metricsApi;
