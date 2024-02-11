"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
// import './graph.scss';
const api_1 = require("../../services/api");
const GraphNetwork_1 = __importDefault(require("./GraphNetwork"));
require("./Graph.module.scss");
require("./Graph.scss");
/**
 * Graph component
 * @returns ReactNode
 */
/* export */ const Graph = () => {
    const muiTheme = (0, material_1.useTheme)();
    const { data, isSuccess } = api_1.metricsApi.endpoints.getClusterInfo.useQueryState(undefined, {});
    console.log('Returned Data', data);
    const draggableContainer = (0, react_1.useRef)(null);
    const graphData = {};
    if (isSuccess && data && data.nodes) {
        console.log('data', data);
        //! TEMPORARY, PASS IN REAL NAMESPACE WHEN AVAILABLE
        graphData.nodes = [
            {
                id: 'Cluster',
                label: 'Cluster',
                height: 1.5,
                size: 40,
                color: 'green',
                type: 'cluster',
            },
        ];
        graphData.links = [];
        for (const namespace in data.namespaces) {
            graphData.nodes.push({
                id: namespace,
                label: namespace,
                height: 0,
                size: 30,
                color: 'orange',
                type: 'namespace',
            });
            graphData.links.push({
                source: namespace,
                target: 'Cluster',
                distance: 50,
            });
        }
        for (const service in data.serviceToPodsMapping) {
            graphData.nodes.push({
                id: service,
                label: service,
                height: 0,
                size: 20,
                color: 'blue',
                type: 'service',
            });
            if (service !== 'kubernetes') {
                data.serviceToPodsMapping[service].forEach((pod) => {
                    graphData.links.push({
                        source: service,
                        target: pod,
                        distance: 125,
                    });
                });
            }
        }
        data.pods.forEach((pod) => {
            graphData.nodes.push({
                id: pod.id,
                nodeId: pod.nodeId,
                height: 0,
                size: 15,
                color: 'cyan',
                type: 'pod',
            });
            graphData.links.push({
                source: pod.id,
                target: pod.namespace,
                distance: 100,
            });
        });
        data.containers.forEach((container, index) => {
            graphData.nodes.push({
                id: `${container.name}_${index}`,
                label: container.name,
                height: 0,
                size: 10,
                color: 'yellow',
                image: container.image,
                type: 'container',
            });
            graphData.links.push({
                source: `${container.name}_${index}`,
                target: container.podId,
                distance: 100,
            });
        });
    }
    console.log('GraphData', graphData);
    return ((0, jsx_runtime_1.jsx)("div", { ref: draggableContainer, className: `graph ${muiTheme.palette.mode}`, children: data && isSuccess && ((0, jsx_runtime_1.jsx)(GraphNetwork_1.default, { data: graphData, lengthOfData: data.nodes.length + data.pods.length + data.containers.length, draggableContainer: draggableContainer })) }));
};
exports.default = Graph;
