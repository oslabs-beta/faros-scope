"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = exports.rootReducer = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const api_1 = require("../services/api");
const slice_1 = require("./slice");
exports.rootReducer = (0, toolkit_1.combineReducers)({
    [api_1.metricsApi.reducerPath]: api_1.metricsApi.reducer,
    appState: slice_1.appState.reducer,
    nodes: slice_1.nodesSlice.reducer,
    pods: slice_1.podsSlice.reducer,
    containers: slice_1.containersSlice.reducer,
    metricsMap: slice_1.metricsMapSlice.reducer,
    clusterEvents: slice_1.clusterEvents.reducer,
});
exports.store = (0, toolkit_1.configureStore)({
    reducer: exports.rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api_1.metricsApi.middleware),
});
