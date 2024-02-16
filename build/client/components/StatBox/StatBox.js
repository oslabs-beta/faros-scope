"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const index_1 = require("../index");
const StatBox = ({ title, value = '-' }) => {
    const theme = (0, material_1.useTheme)();
    console.log(theme);
    return ((0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
            gridColumn: 'span 1',
            gridRow: 'span 10',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: '1.25rem 1rem',
            flex: '1 1 100%',
            backgroundColor: `${theme.palette.background.alt}`,
            borderRadius: '0.45rem',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        }, children: [(0, jsx_runtime_1.jsx)(index_1.FlexBetween, { children: (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h5", sx: { color: theme.palette.typography.letters }, children: title }) }), (0, jsx_runtime_1.jsx)(material_1.Typography, { variant: "h2", fontWeight: "600", sx: { color: theme.palette.typography.numbers }, children: value })] }));
};
exports.StatBox = StatBox;
