"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListViewDisplay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const formatMetricsMap_1 = require("../../util/formatters/formatMetricsMap");
const ListView_1 = require("./ListView");
require("./ListView.scss");
const ListViewDisplay = () => {
    let metricsState = (0, react_redux_1.useSelector)((state) => state === null || state === void 0 ? void 0 : state.metricsMap);
    if (metricsState) {
        metricsState = (0, formatMetricsMap_1.formatMetricsMap)(metricsState);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "list-view-outer", children: (0, jsx_runtime_1.jsxs)("div", { className: "list-view", children: [(0, jsx_runtime_1.jsx)(ListView_1.ListView, { metricsObject: metricsState.pod }), (0, jsx_runtime_1.jsx)(ListView_1.ListView, { metricsObject: metricsState.container })] }) }));
};
exports.ListViewDisplay = ListViewDisplay;
