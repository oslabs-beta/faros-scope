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
const ListViewTable_1 = require("../../components/List-View/ListViewTable");
require("./ListViewPage.scss");
const components_1 = require("../../components");
const material_1 = require("@mui/material");
const NameSpaceTable_1 = require("../../components/NameSpaceTable");
const formatContainerUsage_1 = require("../../util/formatters/formatContainerUsage");
const api_1 = require("../../services/api");
const react_1 = require("react");
const DataGridWithHeader = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require("../../components/DataGridWithHeader/DataGridWithHeader"))));
const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: "name",
        headerName: "Name",
        width: 160,
        flex: 1,
        editable: true,
    },
    {
        field: "CPU",
        headerName: "CPU (%)",
        width: 130,
        flex: 1,
        editable: true,
        valueGetter: (params) => {
            return params.value.toFixed(5);
        },
    },
    {
        field: "MEM",
        headerName: "MEM (bytes)",
        type: "number",
        width: 130,
        flex: 1,
        editable: true,
        // valueGetter: (params) => {
        //   return params.value.toFixed(2);
        // },
    },
];
const ListViewPage = () => {
    let cUsageData;
    let metricsState = (0, react_redux_1.useSelector)((state) => state === null || state === void 0 ? void 0 : state.metricsMap);
    const { data } = (0, api_1.useGetContainerUsageQuery)(undefined, {});
    if (data) {
        cUsageData = (0, formatContainerUsage_1.formatContainerUsage)(data);
    }
    if (metricsState) {
        metricsState = (0, formatMetricsMap_1.formatMetricsMap)(metricsState);
    }
    console.log(metricsState);
    if (!data)
        return;
    return ((0, jsx_runtime_1.jsx)("div", { className: `list-view`, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", flexDirection: "column", gap: "2rem", children: [(0, jsx_runtime_1.jsx)(components_1.FlexBetween, { children: (0, jsx_runtime_1.jsx)(components_1.Header, { title: "List View", subtitle: "View Pod and Container" }) }), (0, jsx_runtime_1.jsx)(ListViewTable_1.ListViewTable, { metricsObject: metricsState.pod }), (0, jsx_runtime_1.jsx)(ListViewTable_1.ListViewTable, { metricsObject: metricsState.container }), (0, jsx_runtime_1.jsx)(NameSpaceTable_1.NameSpaceTable, { cUsageMetrics: cUsageData.namespace }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: cUsageData.namespace[0].type, columns: columns, data: cUsageData.namespace, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: cUsageData.pod[0].type, columns: columns, data: cUsageData.pod, isLoading: false }), (0, jsx_runtime_1.jsx)(DataGridWithHeader, { title: cUsageData.node[0].type, columns: columns, data: cUsageData.node, isLoading: false })] }) }));
};
exports.default = ListViewPage;
