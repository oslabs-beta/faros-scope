import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi'

export interface Node {
    id: string; 
    pods: Pod[];
}

export interface Pod {
id: string; 
    nodeId: string;
    containers: Container[];
}

export interface Container {
    id: string;
    podId: string;
    image: string; 
}

export const nodesAdapter = createEntityAdapter<Node>();
export const podsAdapter = createEntityAdapter<Pod>();
export const containersAdapter = createEntityAdapter<Container>();

export const nodesSlice = createSlice({
    name: 'nodes',
    initialState: nodesAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { nodes } }) => {
            nodesAdapter.setAll(state, nodes);
        }
        )
    },
});

export const podsSlice = createSlice({
    name: 'pods',
    initialState: podsAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, {payload: {pods}}) => {
            podsAdapter.setAll(state, pods);
        })
    },
});
  
export const containersSlice = createSlice({
    name: 'containers',
    initialState: containersAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { containers } }) => {
            containersAdapter.setAll(state, containers);
        })
    },
});

export const { 
  selectAll: selectAllPods, 
  selectById: selectPodById, 
} = podsAdapter.getSelectors(state => state.pods); 

export const {
  selectAll: selectAllNodes,
  selectById: selectNodeById, 
} = nodesAdapter.getSelectors(state => state.nodes); 

export const {
  selectAll: selectAllContainers,
  selectById: selectContainerById,
} = containersAdapter.getSelectors(state => state.containers);