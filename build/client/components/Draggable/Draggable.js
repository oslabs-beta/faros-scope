"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Draggable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
// import { useToast } from '@chakra-ui/toast';
const react_1 = require("react");
const material_1 = require("@mui/material");
const hooks_1 = require("../../hooks");
require("./Draggable.module.scss");
/**
 * Draggable is a container that allows the user to drag the graph around.
 * @param children - The children of the Draggable component.
 **/
const Draggable = ({ children }) => {
    //* references to the draggable div, which is the container for the graph
    const draggableContainer = (0, react_1.useRef)(null);
    const draggableInner = (0, react_1.useRef)(null);
    const draggableContent = (0, react_1.useRef)(null);
    //* hook instantiation
    const [nodesScale, setNodesScale] = (0, react_1.useState)(1);
    const { setMostSignificantChild, scrollToSignificantChild, scrollable, setGridScrollable, } = (0, hooks_1.useGrid)();
    const muiTheme = (0, material_1.useTheme)();
    (0, hooks_1.useDraggable)(draggableContainer, draggableContent, draggableInner, setMostSignificantChild, scrollToSignificantChild, setGridScrollable, nodesScale, setNodesScale, scrollable);
    return ((0, jsx_runtime_1.jsx)("div", { ref: draggableContainer, className: `draggableContainer ${muiTheme.palette.mode}`, children: (0, jsx_runtime_1.jsx)("div", { ref: draggableContent, className: "draggableContent", children: (0, jsx_runtime_1.jsxs)("div", { ref: draggableInner, className: "draggableInner", children: [(0, jsx_runtime_1.jsx)("div", { className: `node-graph-title-bar ${muiTheme.palette.mode}`, children: (0, jsx_runtime_1.jsx)("span", { className: `node-graph-title ${muiTheme.palette.mode}`, children: "NODES" }) }), children] }) }) }));
};
exports.Draggable = Draggable;
