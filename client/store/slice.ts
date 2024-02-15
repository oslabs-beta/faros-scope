import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { metricsApi } from '../services/api';
import { RootState } from '../../types/types';
import { Node, Pod, Container, Metrics, ClusterEvent } from '../../types/types';

export const nodesAdapter = createEntityAdapter<Node>();
export const podsAdapter = createEntityAdapter<Pod>();
export const containersAdapter = createEntityAdapter<Container>();
export const metricsAdapter = createEntityAdapter<Metrics>();
export const clusterEventsAdapter = createEntityAdapter<ClusterEvent>({
  selectId: (clusterEvent) => clusterEvent.metadata.resourceVersion,
});

const initialAppState = {
    sidebarShow: false,
    sidebarUnfoldable: false,
}

export const appState = createSlice({
    name: 'state', 
    initialState: initialAppState,
    reducers: {
        changeState: (state, {payload}) => {
            console.log('changeState')
   
            console.log(payload.type);
            switch (payload.type) {
                case 'set':
                    console.log('set')
                  return { ...state, ...payload }
                default:
                    console.log('default')
                  return state
              }
        }
    }
})

export const nodesSlice = createSlice({
  name: 'nodes',
  initialState: nodesAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      metricsApi.endpoints.getClusterInfo.matchFulfilled,
      (state, { payload: { nodes } }) => {
        nodesAdapter.setAll(state, nodes);
      },
    );
  },
});

export const podsSlice = createSlice({
  name: 'pods',
  initialState: podsAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      metricsApi.endpoints.getClusterInfo.matchFulfilled,
      (state, { payload: { pods } }) => {
        podsAdapter.setAll(state, pods);
      },
    );
  },
});

export const containersSlice = createSlice({
  name: 'containers',
  initialState: containersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      metricsApi.endpoints.getClusterInfo.matchFulfilled,
      (state, { payload: { containers } }) => {
        containersAdapter.setAll(state, containers);
      },
    );
  },
});

export interface MetricsMap {
  metricsMap?: { [key: string]: any };
}
const initialState: any = {
  metricsMap: {},
};

export const metricsMapSlice = createSlice({
  name: 'metricsMap',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      metricsApi.endpoints.getClusterMetricsMap.matchFulfilled,
      (state, payload) => {
        state.metricsMap = payload.payload;
      },
    );
  },
});

export const clusterEvents = createSlice({
  name: 'clusterEvents',
  initialState: clusterEventsAdapter.getInitialState(),
  reducers: {
    addClusterEvent: clusterEventsAdapter.addOne,
    addClusterEvents: clusterEventsAdapter.addMany,
    removeClusterEvent: clusterEventsAdapter.removeOne,
  },
});

export const { addClusterEvent, addClusterEvents, removeClusterEvent } =
  clusterEvents.actions;
// export const { selectAll: selectAllEvents, selectById: selectEventById} = clusterEventsAdapter.getSelectors(state => state.clusterEvents);
export const { selectAll: selectAllNodes, selectById: selectNodeById } =
  nodesAdapter.getSelectors((state: RootState) => state.nodes);
export const { selectAll: selectAllPods, selectById: selectPodById } =
  podsAdapter.getSelectors((state: RootState) => state.pods);
export const {
  selectAll: selectAllContainers,
  selectById: selectContainerById,
} = containersAdapter.getSelectors((state: RootState) => state.containers);

export const {changeState} = appState.actions;