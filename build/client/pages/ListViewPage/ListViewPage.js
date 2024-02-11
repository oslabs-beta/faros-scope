"use strict";
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
const ListViewPage = () => {
    const muiTheme = (0, material_1.useTheme)();
    let cUsageData;
    let metricsState = (0, react_redux_1.useSelector)((state) => state === null || state === void 0 ? void 0 : state.metricsMap);
    const { data, isLoading } = (0, api_1.useGetContainerUsageQuery)(undefined, {});
    if (data) {
        cUsageData = (0, formatContainerUsage_1.formatContainerUsage)(data);
    }
    if (metricsState) {
        metricsState = (0, formatMetricsMap_1.formatMetricsMap)(metricsState);
    }
    if (!data)
        return;
    return ((0, jsx_runtime_1.jsx)("div", { className: `list-view`, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { display: "flex", flexDirection: "column", gap: "2rem", children: [(0, jsx_runtime_1.jsx)(components_1.FlexBetween, { children: (0, jsx_runtime_1.jsx)(components_1.Header, { title: "List View", subtitle: "View Pod and Container" }) }), (0, jsx_runtime_1.jsx)(ListViewTable_1.ListViewTable, { metricsObject: metricsState.pod }), (0, jsx_runtime_1.jsx)(ListViewTable_1.ListViewTable, { metricsObject: metricsState.container }), (0, jsx_runtime_1.jsx)(NameSpaceTable_1.NameSpaceTable, { cUsageMetrics: cUsageData.namespace }), (0, jsx_runtime_1.jsx)(NameSpaceTable_1.NameSpaceTable, { cUsageMetrics: cUsageData.pod }), (0, jsx_runtime_1.jsx)(NameSpaceTable_1.NameSpaceTable, { cUsageMetrics: cUsageData.node })] }) }));
};
exports.default = ListViewPage;
