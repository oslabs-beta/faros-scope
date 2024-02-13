"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const react_2 = require("@coreui/react");
// routes config
const routes_1 = __importDefault(require("../../routes"));
const Loader = () => {
    return ((0, jsx_runtime_1.jsx)("div", { style: {
            position: "absolute",
            top: "50%",
            left: "50%",
        }, children: (0, jsx_runtime_1.jsx)(react_2.CSpinner, { variant: "grow" }) }));
};
const AppContent = () => {
    return ((0, jsx_runtime_1.jsx)(react_2.CContainer, { className: "custom-container w-100", fluid: true, children: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)(Loader, {}), children: (0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [routes_1.default.map((route, idx) => {
                        return (route.element && ((0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: route.path, exact: route.exact, name: route.name, element: (0, jsx_runtime_1.jsx)(route.element, {}) }, idx)));
                    }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "/", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { to: "dashboard", replace: true }) })] }) }) }));
};
exports.default = react_1.default.memo(AppContent);
