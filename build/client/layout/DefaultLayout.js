"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const index_1 = require("../components/index");
// ! TEMPORARY IMPORT
const api_1 = require("../services/api");
const DefaultLayout = () => {
    // ! TEMPORARY
    (0, api_1.useGetClusterInfoQuery)(undefined, { pollingInterval: 25000 });
    return ((0, jsx_runtime_1.jsxs)("div", { className: "main-wrapper", children: [(0, jsx_runtime_1.jsx)(index_1.NavBar, {}), (0, jsx_runtime_1.jsx)(material_1.Box, { component: "main", sx: {
                    marginTop: '4rem',
                    height: '100%',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                }, children: (0, jsx_runtime_1.jsx)(index_1.AppContent, {}) })] }));
};
exports.default = DefaultLayout;
