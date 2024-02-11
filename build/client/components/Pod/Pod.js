"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pod = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
require("./Pod.module.scss");
const Pod = ({ podName, podData, animationDelay, clickFunc, }) => {
    const useSelectorState = (0, react_redux_1.useSelector)((state) => state.metricsMap);
    const { cpuUsagePct, memUsagePct } = (useSelectorState === null || useSelectorState === void 0 ? void 0 : useSelectorState.metricsMap[podName]) || { cpuUsage: 0, memUsage: 0 };
    const podCPU = (cpuUsagePct === null || cpuUsagePct === void 0 ? void 0 : cpuUsagePct.toFixed(2)) || 0;
    const podMemory = (memUsagePct === null || memUsagePct === void 0 ? void 0 : memUsagePct.toFixed(2)) || 0;
    return ((0, jsx_runtime_1.jsx)("div", { style: { animationDelay: animationDelay }, onClick: clickFunc, className: `podContainer ${podCPU >= 80
            ? 'unhealthyPod'
            : podCPU >= 50
                ? 'warningPod'
                : 'healthyPod'}`, children: (0, jsx_runtime_1.jsxs)("div", { className: "pod", children: [(0, jsx_runtime_1.jsx)("div", { className: "podName", children: podName }), (0, jsx_runtime_1.jsxs)("div", { className: "podMetrics", children: [(0, jsx_runtime_1.jsxs)("div", { className: "podCpu", children: ["CPU:\u00A0", (0, jsx_runtime_1.jsxs)("span", { className: `${podCPU >= 80
                                        ? 'inlineRedText'
                                        : podCPU >= 50
                                            ? 'inlineOrangeText'
                                            : 'inlineBlueText'}`, children: [podCPU, "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "podMemory", children: ["Memory:\u00A0", (0, jsx_runtime_1.jsxs)("span", { className: `${podMemory >= 80
                                        ? 'inlineRedText'
                                        : podMemory >= 50
                                            ? 'inlineOrangeText'
                                            : 'inlineBlueText'}`, children: [podMemory, "%"] })] })] }), (0, jsx_runtime_1.jsx)("label", { className: "containersLabel", children: "Containers" }), podData.containers &&
                    podData.containers.map((container) => {
                        const key = `${container.name}/${podName}`;
                        const { cpuUsagePct, memUsagePct } = (useSelectorState === null || useSelectorState === void 0 ? void 0 : useSelectorState.metricsMap[key]) || { cpuUsage: 0, memUsage: 0 };
                        const containerCPU = (cpuUsagePct === null || cpuUsagePct === void 0 ? void 0 : cpuUsagePct.toFixed(2)) || 0;
                        const containerMemory = (memUsagePct === null || memUsagePct === void 0 ? void 0 : memUsagePct.toFixed(2)) || 0;
                        return ((0, jsx_runtime_1.jsxs)("div", { className: "containerBox", children: [(0, jsx_runtime_1.jsx)("label", { className: "containerTitle", children: container.name }), (0, jsx_runtime_1.jsxs)("div", { className: "infoDiv", children: [(0, jsx_runtime_1.jsxs)("div", { children: ["CPU:\u00A0", (0, jsx_runtime_1.jsxs)("span", { className: `
                    ${containerCPU >= 80
                                                        ? 'inlineRedText'
                                                        : containerCPU >= 50
                                                            ? 'inlineOrangeText'
                                                            : 'inlineBlueText'}`, children: [containerCPU, "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Memory: \u00A0", (0, jsx_runtime_1.jsxs)("span", { className: `
                    ${containerMemory >= 80
                                                        ? 'inlineRedText'
                                                        : containerMemory >= 50
                                                            ? 'inlineOrangeText'
                                                            : 'inlineBlueText'}`, children: [containerMemory, "%"] })] }), (0, jsx_runtime_1.jsxs)("div", { children: ["Image:\u00A0", (0, jsx_runtime_1.jsx)("div", { className: "imageBox textShadowLight", children: container.image })] })] })] }));
                    })] }) }, podName));
};
exports.Pod = Pod;
