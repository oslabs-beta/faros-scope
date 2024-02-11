"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Pod = ({ podName, metrics }) => {
    return (react_1.default.createElement("div", { className: "outerPod" },
        react_1.default.createElement("div", { className: "innerPod" },
            react_1.default.createElement("div", { className: "podName" }, podName),
            react_1.default.createElement("div", { className: "podMetrics" },
                react_1.default.createElement("div", { className: "podCpu" }, "CPU: "),
                react_1.default.createElement("div", { className: "podMemory" }, "Memory: ")))));
};
exports.default = Pod;
