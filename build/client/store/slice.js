"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeState = exports.selectContainerById = exports.selectAllContainers = exports.selectPodById = exports.selectAllPods = exports.selectNodeById = exports.selectAllNodes = exports.removeClusterEvent = exports.addClusterEvents = exports.addClusterEvent = exports.clusterEvents = exports.metricsMapSlice = exports.containersSlice = exports.podsSlice = exports.nodesSlice = exports.appState = exports.clusterEventsAdapter = exports.metricsAdapter = exports.containersAdapter = exports.podsAdapter = exports.nodesAdapter = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const api_1 = require("../services/api");
exports.nodesAdapter = (0, toolkit_1.createEntityAdapter)();
exports.podsAdapter = (0, toolkit_1.createEntityAdapter)();
exports.containersAdapter = (0, toolkit_1.createEntityAdapter)();
exports.metricsAdapter = (0, toolkit_1.createEntityAdapter)();
exports.clusterEventsAdapter = (0, toolkit_1.createEntityAdapter)({
    selectId: (clusterEvent) => clusterEvent.metadata.resourceVersion,
});
const initialAppState = {
    sidebarShow: false,
    sidebarUnfoldable: false,
};
exports.appState = (0, toolkit_1.createSlice)({
    name: 'state',
    initialState: initialAppState,
    reducers: {
        changeState: (state, { payload }) => {
            console.log('changeState');
            console.log(payload.type);
            switch (payload.type) {
                case 'set':
                    console.log('set');
                    return Object.assign(Object.assign({}, state), payload);
                default:
                    console.log('default');
                    return state;
            }
        }
    }
});
exports.nodesSlice = (0, toolkit_1.createSlice)({
    name: 'nodes',
    initialState: exports.nodesAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(api_1.metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { nodes } }) => {
            exports.nodesAdapter.setAll(state, nodes);
        });
    },
});
exports.podsSlice = (0, toolkit_1.createSlice)({
    name: 'pods',
    initialState: exports.podsAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(api_1.metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { pods } }) => {
            exports.podsAdapter.setAll(state, pods);
        });
    },
});
exports.containersSlice = (0, toolkit_1.createSlice)({
    name: 'containers',
    initialState: exports.containersAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(api_1.metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { containers } }) => {
            exports.containersAdapter.setAll(state, containers);
        });
    },
});
const initialState = {
    metricsMap: {},
};
exports.metricsMapSlice = (0, toolkit_1.createSlice)({
    name: 'metricsMap',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(api_1.metricsApi.endpoints.getClusterMetricsMap.matchFulfilled, (state, payload) => {
            state.metricsMap = payload.payload;
        });
    },
});
exports.clusterEvents = (0, toolkit_1.createSlice)({
    name: 'clusterEvents',
    initialState: exports.clusterEventsAdapter.getInitialState(),
    reducers: {
        addClusterEvent: exports.clusterEventsAdapter.addOne,
        addClusterEvents: exports.clusterEventsAdapter.addMany,
        removeClusterEvent: exports.clusterEventsAdapter.removeOne,
    },
});
_a = exports.clusterEvents.actions, exports.addClusterEvent = _a.addClusterEvent, exports.addClusterEvents = _a.addClusterEvents, exports.removeClusterEvent = _a.removeClusterEvent;
// export const { selectAll: selectAllEvents, selectById: selectEventById} = clusterEventsAdapter.getSelectors(state => state.clusterEvents);
_b = exports.nodesAdapter.getSelectors((state) => state.nodes), exports.selectAllNodes = _b.selectAll, exports.selectNodeById = _b.selectById;
_c = exports.podsAdapter.getSelectors((state) => state.pods), exports.selectAllPods = _c.selectAll, exports.selectPodById = _c.selectById;
_d = exports.containersAdapter.getSelectors((state) => state.containers), exports.selectAllContainers = _d.selectAll, exports.selectContainerById = _d.selectById;
exports.changeState = exports.appState.actions.changeState;
