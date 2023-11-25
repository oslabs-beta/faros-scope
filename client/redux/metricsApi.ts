import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IMetrics } from '../../types/types'

export const metricsApi = createApi({
  reducerPath: 'metricsApi', 
  // baseQuery: fetchBaseQuery({ baseUrl: 'http://34.27.144.68:8000/' }),
  baseQuery: fetchBaseQuery({ baseUrl: 'http://34.28.168.97:9090/api/v1/' }),
  endpoints: (builder) => ({
    getMetrics: builder.query<IMetrics, void>({
      query: () => 'metrics',
    }),
    getTopNodes: builder.query<IMetrics, void>({
      query: () => 'topPods', 
      // do we want to do anything on the start of the query? what do we want to do with the result of the query
      
    }), 
    getTotalNodes: builder.query<IMetrics, void>({
      query: () => 'query?query=kube_node_info',
      async onQueryStarted(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          queryFulfilled,
          getCacheEntry,
          updateCachedData,
        }
      ) {
      console.log('the state', getState()); 
      console.log('the cached entry', getCacheEntry()); 

      },
      async onCacheEntryAdded(
        arg,
        {
          dispatch,
          getState,
          extra,
          requestId,
          cacheEntryRemoved,
          cacheDataLoaded,
          getCacheEntry,
          updateCachedData,
        }
      ) {
        console.log('The cache data loaded ',cacheDataLoaded); 
      },
    }),
  })
});

export const { useGetMetricsQuery, useGetTopNodesQuery, useGetTotalNodesQuery } = metricsApi;
