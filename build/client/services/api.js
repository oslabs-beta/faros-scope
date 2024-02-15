"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGetContainerUsageQuery = exports.useGetClusterMetricsMapQuery = exports.useGetPodStatsQuery = exports.useGetNodeStatsQuery = exports.useGetClusterInfoQuery = exports.useGetNodeViewQuery = exports.metricsApi = void 0;
const react_1 = require("@reduxjs/toolkit/query/react");
exports.metricsApi = (0, react_1.createApi)({
    reducerPath: 'metricsApi',
    baseQuery: (0, react_1.fetchBaseQuery)({ baseUrl: 'http://35.185.108.181:8000/' }),
    endpoints: (builder) => ({
        getClusterInfo: builder.query({
            query: () => 'clusterInfo',
            transformResponse: (response) => {
                let nodes = [];
                let pods = [];
                let containers = [];
                response.nodes.forEach((node) => {
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
                    serviceToPodsMapping: response.serviceToPodsMapping,
                    namespaces: response.namespaces,
                };
            },
        }),
        getNodeView: builder.query({
            queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield fetch('http://34.139.156.110/node-view');
                const data = yield response.json();
                return { data: data };
            }),
        }),
        getContainerUsage: builder.query({
            queryFn: () => __awaiter(void 0, void 0, void 0, function* () {
                const response = yield fetch('meteor-service/usage-metrics');
                const data = yield response.json();
                console.log(data);
                return { data: data };
            }),
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
exports.useGetNodeViewQuery = exports.metricsApi.useGetNodeViewQuery, exports.useGetClusterInfoQuery = exports.metricsApi.useGetClusterInfoQuery, exports.useGetNodeStatsQuery = exports.metricsApi.useGetNodeStatsQuery, exports.useGetPodStatsQuery = exports.metricsApi.useGetPodStatsQuery, exports.useGetClusterMetricsMapQuery = exports.metricsApi.useGetClusterMetricsMapQuery, exports.useGetContainerUsageQuery = exports.metricsApi.useGetContainerUsageQuery;
