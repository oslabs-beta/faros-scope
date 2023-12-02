import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';
import { createEntityAdapter, createSelector } from '@reduxjs/toolkit'

interface Node {
    id: string; 
    pods: Pod[];
}

interface Pod {
    id: string; 
    nodeId: string;
    containers: Container[];
}

interface Container {
    id: string;
    podId: string;
    image: string; 
}

export const nodesAdapter = createEntityAdapter<Node>();
const nodesInitalState = nodesAdapter.getInitialState();
export const podsAdapter = createEntityAdapter<Pod>();
const podsInititalState = podsAdapter.getInitialState(); 
export const containersAdapter = createEntityAdapter<Container>();
const containersInitialState = containersAdapter.getInitialState(); 

export const metricsApi = createApi({
    reducerPath: 'metricsApi', 
    baseQuery: fetchBaseQuery({ baseUrl: 'http://104.154.129.231:8000/' }),
    endpoints: (builder) => ({
    getClusterInfo: builder.query({
        query: () => 'clusterInfo', 
        transformResponse: (response: any) => { 
            // console.log('RESPONSE', response);

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
                nodes: nodesAdapter.setAll(nodesInitalState, nodes),
                pods: podsAdapter.setAll(podsInititalState, pods),
                containers: containersAdapter.setAll(containersInitialState, containers),
              };
        }
    }), 
    }),
});

export const { useGetClusterInfoQuery } = metricsApi;

