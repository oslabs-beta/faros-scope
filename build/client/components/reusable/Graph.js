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
const react_1 = __importStar(require("react"));
const Draggable_1 = __importDefault(require("./Draggable"));
require("../../css/Graph.scss");
const Theme_1 = require("../../Theme");
// import query
const metricsApi_1 = require("../../redux/metricsApi");
/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around via the Draggable component.
 * @returns ReactNode
 */
const Graph = () => {
    const { data, status, error } = (0, metricsApi_1.useGetClusterInfoQuery)(undefined, {});
    console.log(data, status, error);
    //* reference to the draggable div, which is the container for the graph
    const graph = (0, react_1.useRef)(null);
    const { theme } = (0, Theme_1.useTheme)();
    // ADD NODE QUERY AND RESPONSE
    //   const nodes = Array.from({ length: 50 }, () => {
    //     return {
    //       name: 'Node 1',
    //       pods: [
    //         {
    //           name: 'Pod 1',
    //           containers: [
    //             { name: 'nginx', image: 'nginx' },
    //             { name: 'busybox', image: 'busybox' },
    //           ],
    //         },
    //         {
    //           name: 'Pod 2',
    //           containers: [
    //             { name: 'nginx', image: 'nginx' },
    //             { name: 'busybox', image: 'busybox' },
    //           ],
    //         },
    //         {
    //           name: 'Pod 3',
    //           containers: [
    //             { name: 'nginx', image: 'nginx' },
    //             { name: 'busybox', image: 'busybox' },
    //           ],
    //         },
    //       ],
    //     };
    //   });
    //   const formattedNodes = formatNodes(nodes, 8);
    // if (data) {
    //     const formattedNodes = (formatNodes(data, Object.keys(data).length));
    // }
    // console.log(formattedNodes);
    return (react_1.default.createElement(Draggable_1.default, null,
        react_1.default.createElement("div", { className: `graph ${theme}`, ref: graph })));
};
exports.default = Graph;
