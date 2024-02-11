"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectContainerById = exports.selectAllContainers = exports.selectPodById = exports.selectAllPods = exports.selectNodeById = exports.selectAllNodes = exports.removeClusterEvent = exports.addClusterEvents = exports.addClusterEvent = exports.clusterEvents = exports.addClusterEventWithCustomId = exports.metricsMapSlice = exports.containersSlice = exports.podsSlice = exports.nodesSlice = exports.clusterEventsAdapter = exports.metricsAdapter = exports.containersAdapter = exports.podsAdapter = exports.nodesAdapter = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const metricsApi_1 = require("./metricsApi");
exports.nodesAdapter = (0, toolkit_1.createEntityAdapter)();
exports.podsAdapter = (0, toolkit_1.createEntityAdapter)();
exports.containersAdapter = (0, toolkit_1.createEntityAdapter)();
exports.metricsAdapter = (0, toolkit_1.createEntityAdapter)();
exports.clusterEventsAdapter = (0, toolkit_1.createEntityAdapter)({
    selectId: (clusterEvent) => clusterEvent.metadata.uid,
});
exports.nodesSlice = (0, toolkit_1.createSlice)({
    name: 'nodes',
    initialState: exports.nodesAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi_1.metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { nodes } }) => {
            exports.nodesAdapter.setAll(state, nodes);
        });
    },
});
exports.podsSlice = (0, toolkit_1.createSlice)({
    name: 'pods',
    initialState: exports.podsAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi_1.metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { pods } }) => {
            exports.podsAdapter.setAll(state, pods);
        });
    },
});
exports.containersSlice = (0, toolkit_1.createSlice)({
    name: 'containers',
    initialState: exports.containersAdapter.getInitialState(),
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi_1.metricsApi.endpoints.getClusterInfo.matchFulfilled, (state, { payload: { containers } }) => {
            exports.containersAdapter.setAll(state, containers);
        });
    },
});
const initialState = {
    metricsMap: {}
};
exports.metricsMapSlice = (0, toolkit_1.createSlice)({
    name: 'metricsMap',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addMatcher(metricsApi_1.metricsApi.endpoints.getClusterMetricsMap.matchFulfilled, (state, payload) => {
            state.metricsMap = payload.payload;
        });
    },
});
const addClusterEventWithCustomId = (data, id) => (dispatch) => {
    const newId = `${data.metadata.uid}-${id}`;
    const modifiedData = Object.assign(Object.assign({}, data), { metadata: Object.assign(Object.assign({}, data.metadata), { uid: newId }) });
    dispatch(exports.clusterEvents.actions.addClusterEvent(modifiedData));
};
exports.addClusterEventWithCustomId = addClusterEventWithCustomId;
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
_b = exports.nodesAdapter.getSelectors((state) => state.nodes), exports.selectAllNodes = _b.selectAll, exports.selectNodeById = _b.selectById;
_c = exports.podsAdapter.getSelectors((state) => state.pods), exports.selectAllPods = _c.selectAll, exports.selectPodById = _c.selectById;
_d = exports.containersAdapter.getSelectors((state) => state.containers), exports.selectAllContainers = _d.selectAll, exports.selectContainerById = _d.selectById;
