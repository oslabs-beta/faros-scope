"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../components/index");
// ! TEMPORARY IMPORT
const api_1 = require("../services/api");
const DefaultLayout = () => {
    // ! TEMPORARY
    (0, api_1.useGetClusterInfoQuery)(undefined, { pollingInterval: 25000 });
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(index_1.AppSidebar, {}), (0, jsx_runtime_1.jsxs)("div", { className: "wrapper d-flex flex-column min-vh-100", children: [(0, jsx_runtime_1.jsx)(index_1.AppHeader, {}), (0, jsx_runtime_1.jsx)("div", { className: "body flex-grow-1 px-3", children: (0, jsx_runtime_1.jsx)(index_1.AppContent, {}) }), (0, jsx_runtime_1.jsx)(index_1.AppFooter, {})] })] }));
};
exports.default = DefaultLayout;
