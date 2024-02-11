"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const Header = ({ title, subtitle }) => {
    const theme = (0, material_1.useTheme)();
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h2", color: theme.palette.primary.main, fontWeight: "bold", sx: { m: '5px' }, children: title }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", color: theme.palette.primary.main, children: subtitle })] }));
};
exports.Header = Header;
