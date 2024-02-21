"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
// ! Review React docs regarding ErrorBoundary
// TODO: Add error boundary
// import { ErrorBoundary } from "react-error-boundary";
const material_1 = require("@mui/material");
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
// Use lazy to defer loading component’s code until it is rendered for the first time.
const LineChart = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../../components/LineChart/LineChart"))));
const DataGridWithHeader = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../../components/DataGridWithHeader/DataGridWithHeader"))));
const api_1 = require("../../services/api");
const components_1 = require("../../components");
const columns = [
    {
        field: "nodeName",
        headerName: "metadata.system.node_name",
        headerAlign: "left",
        flex: 1,
        align: "left",
    },
    {
        field: "metricValue",
        headerName: "Latest Value",
        headerAlign: "center",
        width: 150,
        //   flex: 1,
        align: "right",
    },
];
const NodeView = () => {
    const theme = (0, material_1.useTheme)();
    const { data, isLoading } = (0, api_1.useGetNodeViewQuery)(undefined, {});
    console.log(data);
    let podsFormattedData = [];
    let containersFormattedData = [];
    if (data) {
        podsFormattedData = data.kube_pod_count_per_node.map((item, index) => ({
            id: index,
            metricName: item.metricName,
            nodeName: item.labels.node,
            metricValue: item.metricValue,
        }));
        containersFormattedData = data.kube_container_count_per_node.map((item, index) => ({
            id: index,
            nodeName: item.labels.node,
            metricValue: item.metricValue,
        }));
    }
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { className: "NodeView", height: "100%", width: "100%", children: (0, jsx_runtime_1.jsx)(material_1.Box, { m: "1.5rem 2.5rem", children: (0, jsx_runtime_1.jsxs)(material_1.Box, { mt: "20px", display: "flex", flexDirection: 'column', gap: "20px", children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "grid", gridTemplateColumns: "repeat(auto-fit, 200px);", gap: "20px", sx: {
                            width: "100%",
                            placeContent: "center",
                        }, children: [(0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Total Nodes", value: data && data.kube_nodes_total.metricValue }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Total Cores", value: data && data.kube_total_cores.metricValue }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Allocatable Cores", value: data && data.kube_total_allocatable_cores.metricValue }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Total Memory", value: data && data.kube_total_memory.metricValue }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Allocatable Memory", value: data && data.kube_total_allocatable_memory.metricValue })] }), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "div", 
                        // gridColumn="span 8"
                        sx: { backgroundColor: theme.palette.background.alt }, p: "1rem", borderRadius: "0.55rem", children: (0, jsx_runtime_1.jsxs)(components_1.CollapsiblePanel, { title: "CPU and Memory", children: [(0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), children: (0, jsx_runtime_1.jsx)(LineChart, { title: "CPU Usage Per Node", URL: "clusterUsage" }) }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), children: (0, jsx_runtime_1.jsx)(LineChart, { title: "Memory Usage Per Node", URL: "nodeUsage" }) })] }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "div", sx: { backgroundColor: theme.palette.background.alt }, p: "1rem", borderRadius: "0.55rem", children: (0, jsx_runtime_1.jsxs)(components_1.CollapsiblePanel, { title: "Pod and Container Count", children: [(0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: "Pod Count", columns: columns, data: podsFormattedData, isLoading: isLoading }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: "Container Count", columns: columns, data: containersFormattedData, isLoading: isLoading })] }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "div", 
                        // gridColumn="span 8"
                        sx: { backgroundColor: theme.palette.background.alt }, p: "1rem", borderRadius: "0.55rem", children: (0, jsx_runtime_1.jsxs)(components_1.CollapsiblePanel, { title: "Bandwidth", children: [(0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), children: (0, jsx_runtime_1.jsx)(LineChart, { title: "Received Bandwidth Per Node - Top 50", URL: "receivedBandwidth" }) }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), children: (0, jsx_runtime_1.jsx)(LineChart, { title: "Received Bandwidth Per Node - Top 50", URL: "podNetwork" }) })] }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "div", 
                        // gridColumn="span 8"
                        sx: { backgroundColor: theme.palette.background.alt }, p: "1rem", borderRadius: "0.55rem", children: (0, jsx_runtime_1.jsxs)(components_1.CollapsiblePanel, { title: "Rate of Packets", children: [(0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), children: (0, jsx_runtime_1.jsx)(LineChart, { title: "Received packet count per node - Top 50", URL: "packetsReceived" }) }), (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), children: (0, jsx_runtime_1.jsx)(LineChart, { title: "Transmitted packet count per node - Top 50", URL: "packetsTransmitted" }) })] }) })] }) }) }));
};
exports.default = NodeView;
