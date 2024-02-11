"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListViewHeader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const ListViewHeader = ({ title }) => {
    const theme = (0, material_1.useTheme)();
    const muiTheme = (0, material_1.useTheme)();
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h2", color: muiTheme.palette.mode === 'dark'
                ? theme.palette.neutral.light
                : theme.palette.neutral.dark, fontWeight: "bold", sx: { pb: '1rem', pl: '1rem' }, children: title }) }));
};
exports.ListViewHeader = ListViewHeader;
