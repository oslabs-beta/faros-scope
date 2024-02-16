"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const react_2 = require("@coreui/react");
const AppFooter = () => {
    return ((0, jsx_runtime_1.jsxs)(react_2.CFooter, { className: "px-4", children: [(0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("a", { href: "https://coreui.io", target: "_blank", rel: "noopener noreferrer" }) }), (0, jsx_runtime_1.jsx)("div", { className: "ms-auto", children: (0, jsx_runtime_1.jsx)("a", { href: "https://coreui.io/react", target: "_blank", rel: "noopener noreferrer" }) })] }));
};
exports.default = react_1.default.memo(AppFooter);
