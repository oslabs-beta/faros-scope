"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetClusterMetricsMapQuery = exports.useGetPodStatsQuery = exports.useGetNodeStatsQuery = exports.useGetClusterInfoQuery = exports.metricsApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.metricsApi = (0, react_1.createApi)({
    reducerPath: 'metricsApi',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: 'http://104.154.129.231:8000/' }),
    endpoints: (builder) => ({
        getClusterInfo: builder.query({
            query: () => 'clusterInfo',
            transformResponse: (response) => {
                let nodes = [];
                let pods = [];
                let containers = [];
                response.forEach((node) => {
                    nodes.push(Object.assign(Object.assign({}, node), { id: node.nodeName }));
                    node.pods.forEach((pod) => {
                        pods.push(Object.assign(Object.assign({}, pod), { id: pod.name, nodeId: node.nodeName }));
                        pod.containers.forEach((container) => {
                            containers.push(Object.assign(Object.assign({}, container), { id: container.name, podId: pod.name }));
                        });
                    });
                });
                return {
                    nodes: nodes,
                    pods: pods,
                    containers: containers,
                };
            },
        }),
        getClusterMetrics: builder.query({
            query: () => 'clusterMetrics',
        }),
        getNodeStats: builder.query({
            query: () => 'nodeStats',
        }),
        getPodStats: builder.query({
            query: () => 'podStats',
        }),
        getClusterMetricsMap: builder.query({
            query: () => 'clusterMetricsMap',
        }),
        getMessage: builder.query({
            query: (channel) => `message/${channel}`,
        }),
    }),
});
exports.useGetClusterInfoQuery = exports.metricsApi.useGetClusterInfoQuery, exports.useGetNodeStatsQuery = exports.metricsApi.useGetNodeStatsQuery, exports.useGetPodStatsQuery = exports.metricsApi.useGetPodStatsQuery, exports.useGetClusterMetricsMapQuery = exports.metricsApi.useGetClusterMetricsMapQuery;
