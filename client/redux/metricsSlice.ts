import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { metricsApi } from './metricsApi'
import {RootState} from './store'

export interface Node {
    id: string; 
    nodeName: string;
    pods: Pod[];
}
export interface Pod {
    id: string; 
    name: string;
    nodeId: string;
    containers: Container[];
}

export interface Container {
    id: string;
    name: string;
    podId: string;
    image: string; 
}

export interface  Metrics {
    cpuUsage: number;
    memUsage: number;
    type: string;
    cpuUsagePct: number;
}

export interface Entity {

}

export interface ClusterEvent {
    apiVerson: string; 
    kind: string;
    metadata: { uid: string;[key: string]: any }; 
    entities: Entity[];
}

export const nodesAdapter = createEntityAdapter<Node>();
export const podsAdapter = createEntityAdapter<Pod>();
export const containersAdapter = createEntityAdapter<Container>();
export const metricsAdapter = createEntityAdapter<Metrics>();
export const clusterEventsAdapter = createEntityAdapter<ClusterEvent>({
    selectId: (clusterEvent) => clusterEvent.metadata.uid,
});

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

export interface MetricsMap {
    metricsMap?: {[key: string]: any}
}
const initialState: any = {
    metricsMap: {}
} 

export const metricsMapSlice = createSlice({
    name: 'metricsMap', 
    initialState: initialState , 
    reducers: {}, 
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi.endpoints.getClusterMetricsMap.matchFulfilled, (state, payload) => {
            state.metricsMap = payload.payload;
        })
    },
}); 

export const addClusterEventWithCustomId = (data, id) => (dispatch) => {
    const newId = `${data.metadata.uid}-${id}`
    const modifiedData = {
        ...data,
        metadata: {
            ...data.metadata,
            uid: newId
        }
    }
    dispatch(clusterEvents.actions.addClusterEvent(modifiedData))
}

export const clusterEvents = createSlice({
    name: 'clusterEvents',
    initialState: clusterEventsAdapter.getInitialState(),
    reducers: {
        addClusterEvent: clusterEventsAdapter.addOne,
        addClusterEvents: clusterEventsAdapter.addMany,
        removeClusterEvent: clusterEventsAdapter.removeOne,
    },
});

export const { addClusterEvent, addClusterEvents, removeClusterEvent } = clusterEvents.actions;
export const { selectAll: selectAllNodes, selectById: selectNodeById } = nodesAdapter.getSelectors((state: RootState) => state.nodes); 
export const { selectAll: selectAllPods, selectById: selectPodById } = podsAdapter.getSelectors((state:  RootState) => state.pods);
export const { selectAll: selectAllContainers, selectById: selectContainerById } = containersAdapter.getSelectors((state: RootState) => state.containers);