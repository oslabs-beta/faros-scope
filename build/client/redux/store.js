"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const metricsApi_1 = require("./metricsApi");
const metricsSlice_1 = require("./metricsSlice");
const react_redux_1 = require("react-redux");
const rootReducer = (0, toolkit_1.combineReducers)({
    [metricsApi_1.metricsApi.reducerPath]: metricsApi_1.metricsApi.reducer,
    nodes: metricsSlice_1.nodesSlice.reducer,
    pods: metricsSlice_1.podsSlice.reducer,
    containers: metricsSlice_1.containersSlice.reducer,
    metricsMap: metricsSlice_1.metricsMapSlice.reducer,
    clusterEvents: metricsSlice_1.clusterEvents.reducer
});
const store = (0, toolkit_1.configureStore)({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(metricsApi_1.metricsApi.middleware),
});
exports.default = store;
exports.useAppDispatch = react_redux_1.useDispatch;
