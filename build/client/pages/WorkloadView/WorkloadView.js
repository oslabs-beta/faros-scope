"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkloadView = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const components_1 = require("../../components");
const WorkloadView = () => {
    const theme = (0, material_1.useTheme)();
    const isNonMediumScreens = (0, material_1.useMediaQuery)("(min-width: 1200px)");
    return ((0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
            height: "100%",
            width: "100%",
            overflow: "auto",
        }, children: (0, jsx_runtime_1.jsxs)(material_1.Box, { m: "1.5rem 2.5rem", children: [(0, jsx_runtime_1.jsx)(components_1.FlexBetween, { children: (0, jsx_runtime_1.jsx)(components_1.Header, { title: "Workload View", subtitle: "View all workloads in the network" }) }), (0, jsx_runtime_1.jsxs)(material_1.Box, { mt: "20px", display: "grid", gridTemplateColumns: "repeat(auto, 1fr)", gridAutoRows: "minmax(auto, auto)", gap: "20px", sx: {
                        "& > div": {
                            gridColumn: isNonMediumScreens ? undefined : "span 12",
                        },
                    }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: "20px", children: [(0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Total Pods" }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Total Containers" }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Avg CPU Usage / Limit" }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Avg CPU Usage / Request" }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Avg Memory Usage / Limit" }), (0, jsx_runtime_1.jsx)(components_1.StatBox, { title: "Avg Memory Usage / Request " })] }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                                backgroundColor: theme.palette.background.alt,
                                p: "1rem",
                                borderRadius: "0.55rem",
                            }, children: (0, jsx_runtime_1.jsx)(components_1.CollapsiblePanel, { title: "CPU", children: "\"I am a CollapsiblePanel\"" }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                                // gridColumn:"span 8"
                                backgroundColor: theme.palette.background.alt,
                                p: "1rem",
                                borderRadius: "0.55rem",
                            }, children: (0, jsx_runtime_1.jsx)(components_1.CollapsiblePanel, { title: "Memory (non-evictable)", children: "\"I am a CollapsiblePanel\"" }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                                // gridColumn:"span 8"
                                backgroundColor: theme.palette.background.alt,
                                p: "1rem",
                                borderRadius: "0.55rem",
                            }, children: (0, jsx_runtime_1.jsx)(components_1.CollapsiblePanel, { title: "Bandwidth", children: "\"I am a CollapsiblePanel\"" }) }), (0, jsx_runtime_1.jsx)(material_1.Box, { sx: {
                                // gridColumn:"span 8"
                                backgroundColor: theme.palette.background.alt,
                                p: "1rem",
                                borderRadius: "0.55rem",
                            }, children: (0, jsx_runtime_1.jsx)(components_1.CollapsiblePanel, { title: "Rate of packets", children: "\"I am a CollapsiblePanel\"" }) })] })] }) }));
};
exports.WorkloadView = WorkloadView;
