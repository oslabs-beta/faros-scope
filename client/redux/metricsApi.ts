import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'
import { nodesAdapter } from './metricsSlice';
import { Pod, Node, Container } from './metricsSlice'

const initialState = nodesAdapter.getInitialState();
export const metricsApi = createApi({
    reducerPath: 'metricsApi', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://104.154.129.231:8000/' }),
    endpoints: (builder) => ({
    getClusterInfo: builder.query({
        query: () => 'clusterInfo', 
        transformResponse: (response: any) => { 

            let nodes: Node[] = []; 
            let pods: Pod[] =[]; 
            let containers: Container[] = [];

            response.forEach(node => {
              nodes.push({ id: node.nodeName, ...node });
              node.pods.forEach(pod => {
                pods.push({ id: pod.name, nodeId: node.nodeName, ...pod });
                pod.containers.forEach(container => {
                  containers.push({ id: container.name, podId: pod.name, ...container });
                });
              });
            });

            return {
                nodes: nodes,
                pods: pods,
                containers: containers
              };
        },
    }),  
      getClusterMetrics: builder.query({
        query: () => 'clusterMetrics'
      }),
      getNodeStats: builder.query({
        query: () => 'nodeStats' 
      }),
      getPodStats: builder.query({
        query: () => 'podStats' 
      }),
      getClusterMetricsMap: builder.query({
        query: () => 'clusterMetricsMap'
      })
    }),
});

export const { useGetClusterInfoQuery, useGetNodeStatsQuery, useGetPodStatsQuery, useGetClusterMetricsMapQuery} = metricsApi;

