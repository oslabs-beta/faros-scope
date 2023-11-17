import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMetrics } from '../../types/types'

const metricsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    getMetrics: builder.query<IMetrics, void>({
      query: () => 'metrics',
    }),
  }),
});

export const { useGetMetricsQuery } = metricsApi;
