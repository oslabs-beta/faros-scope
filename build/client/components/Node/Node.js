"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const icons8_box_64_png_1 = __importDefault(require("../../assets/icons8-box-64.png"));
require("../../css/NodeModal.scss");
require("../../css/node.scss");
const NodeModal_1 = require("../NodeModal");
const copy_to_clipboard_1 = require("../reusable/copy-to-clipboard/copy-to-clipboard");
require("./Node.module.scss");
/**
 * A node in the graph, represents a single data point in a Kubernetes cluster
 * @param content - The content of the node, which is the data point in the cluster.
 * @param dimensions - The dimensions of the node.
 * @returns ReactNode
 */
const Node = ({ node, dimensions }) => {
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const openModal = (e) => {
        e.stopPropagation();
        setModalOpen(true);
    };
    const nodeStyle = Object.assign({ width: '8em', height: '8em' }, dimensions);
    const muiTheme = (0, material_1.useTheme)();
    // console.log(node);
    //* Add onclick that adds a class to the node that makes send out a pulse engulfing the app
    return ((0, jsx_runtime_1.jsxs)("div", { className: "nodeContainer", children: [(0, jsx_runtime_1.jsx)("span", { className: `tooltip-text ${muiTheme.palette.mode}`, children: node.nodeName }), (0, jsx_runtime_1.jsx)("div", { style: dimensions, className: `borderNode ${muiTheme.palette.mode}`, children: (0, jsx_runtime_1.jsxs)("div", { className: "Node", style: nodeStyle, children: [(0, jsx_runtime_1.jsx)("img", { onClick: openModal, src: icons8_box_64_png_1.default, id: "podIcon", style: { maxWidth: '80px', maxHeight: '80px' }, alt: "pod icon" }), (0, jsx_runtime_1.jsxs)("div", { className: "nodeContent", children: [(0, jsx_runtime_1.jsxs)("div", { className: "nodeNameContainer", children: [(0, jsx_runtime_1.jsx)(copy_to_clipboard_1.CopyToClipboard, { text: node.nodeName }), (0, jsx_runtime_1.jsx)("div", { className: "nodeName", children: node.nodeName })] }), (0, jsx_runtime_1.jsxs)("label", { className: "podCount", children: ["Pods:\u00A0", (0, jsx_runtime_1.jsx)("span", { className: "inlineOrangeText", children: node.pods.length })] })] }), modalOpen &&
                            (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(NodeModal_1.NodeModal, { Node: node, setModalOpen: setModalOpen }), document.body)] }) })] }));
};
exports.Node = Node;
