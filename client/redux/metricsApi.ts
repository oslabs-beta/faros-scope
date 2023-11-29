import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const metricsApi = createApi({
  reducerPath: 'metricsApi', 
  baseQuery: fetchBaseQuery({ baseUrl: 'http://104.154.129.231:8000/' }),
  endpoints: (builder) => ({
    getClusterInfo: builder.query({
      query: () => 'clusterInfo'
    }),
  }),
});

export const { useGetClusterInfoQuery} = metricsApi;
