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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const formatMetricsMap_1 = require("../../util/formatters/formatMetricsMap");
// import { ListViewTable } from '../../components/List-View/ListViewTable';
require("./ListViewPage.scss");
const material_1 = require("@mui/material");
const formatContainerUsage_1 = require("../../util/formatters/formatContainerUsage");
const api_1 = require("../../services/api");
const react_1 = require("react");
const DataGridWithHeader = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../../components/DataGridWithHeader/DataGridWithHeader'))));
// Columns for Container Usage by NameSpace
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
        field: 'name',
        headerName: 'Name',
        headerAlign: 'left',
        align: 'left',
        // width: 160,
        flex: 1,
        editable: true,
    },
    {
        field: 'CPU',
        headerName: 'CPU (num cores)',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(5);
        },
    },
    {
        field: 'MEM',
        headerName: 'MEM (bytes)',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        // width: 130,
        flex: 1,
        editable: true,
        // valueGetter: (params) => {
        //   return params.value.toFixed(2);
        // },
    },
];
// Columns for ListView
const columnsListView = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
        field: 'name',
        headerName: 'Name',
        flex: 1,
        editable: true,
    },
    {
        field: 'cpuUsage',
        headerName: 'CPU Usage',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'cpuUsagePct',
        headerName: 'CPU Usage (%)',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(2);
        },
    },
    {
        field: 'memUsage',
        headerName: 'MEM Usage (bytes)',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        flex: 1,
        editable: true,
    },
    {
        field: 'memUsagePct',
        headerName: 'MEM Usage (%)',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(2);
        },
    },
];
// Columns for List Container and Nodes Metrics
const columnsListViewUtil = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
        field: 'name',
        headerName: 'Name',
        headerAlign: 'left',
        align: 'left',
        flex: 1,
        editable: true,
    },
    {
        field: 'cpuUsage',
        headerName: 'CPU Usage (bytes)',
        headerAlign: 'center',
        align: 'center',
        flex: 1,
        editable: true,
    },
    {
        field: 'cpuUtilPct',
        headerName: 'CPU Usage (%)',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(2);
        },
    },
    {
        field: 'memUsage',
        headerName: 'MEM Usage',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        flex: 1,
        editable: true,
    },
    {
        field: 'memUtilPct',
        headerName: 'MEM Usage (%)',
        headerAlign: 'center',
        align: 'center',
        type: 'number',
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(2);
        },
    },
];
const ListViewPage = () => {
    var _a, _b, _c;
    let cUsageData;
    let metricsState = (0, react_redux_1.useSelector)((state) => state === null || state === void 0 ? void 0 : state.metricsMap);
    console.log('Metrics State ===>', metricsState === null || metricsState === void 0 ? void 0 : metricsState.metricsMap);
    const { data } = (0, api_1.useGetContainerUsageQuery)(undefined, {});
    (0, api_1.useGetClusterMetricsMapQuery)(undefined, { pollingInterval: 5000 });
    const { data: _clusterInfo } = (0, api_1.useGetClusterInfoQuery)(undefined, {});
    if (data) {
        cUsageData = (0, formatContainerUsage_1.formatContainerUsage)(data);
    }
    if (metricsState) {
        metricsState = (0, formatMetricsMap_1.formatMetricsMap)(metricsState);
    }
    const capitalizeFirstLetter = (s) => {
        return s.charAt(0).toUpperCase() + s.slice(1);
    };
    if (!data ||
        !metricsState.pod ||
        !metricsState.container ||
        !metricsState.node)
        return;
    return ((0, jsx_runtime_1.jsx)("div", { className: `list-view`, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", flexDirection: "column", gap: "2rem", children: [(0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: capitalizeFirstLetter((_a = metricsState === null || metricsState === void 0 ? void 0 : metricsState.container[0]) === null || _a === void 0 ? void 0 : _a.type), columns: columnsListView, data: metricsState === null || metricsState === void 0 ? void 0 : metricsState.container, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: capitalizeFirstLetter((_b = metricsState === null || metricsState === void 0 ? void 0 : metricsState.pod[0]) === null || _b === void 0 ? void 0 : _b.type), columns: columnsListView, data: metricsState === null || metricsState === void 0 ? void 0 : metricsState.pod, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: capitalizeFirstLetter((_c = metricsState === null || metricsState === void 0 ? void 0 : metricsState.node[0]) === null || _c === void 0 ? void 0 : _c.type), columns: columnsListViewUtil, data: metricsState === null || metricsState === void 0 ? void 0 : metricsState.node, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: `Container Usage by ${capitalizeFirstLetter(cUsageData.namespace[0].type)} (Aggr.)`, columns: columns, data: cUsageData.namespace, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: `Container Usage by ${capitalizeFirstLetter(cUsageData.pod[0].type)} (Aggr.)`, columns: columns, data: cUsageData.pod, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: `Container Usage by ${capitalizeFirstLetter(cUsageData.node[0].type)} (Aggr.)`, columns: columns, data: cUsageData.node, isLoading: false })] }) }));
};
exports.default = ListViewPage;
