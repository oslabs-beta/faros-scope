"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeModal = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const util_1 = require("../../util");
const PodContainer_1 = require("../PodContainer");
const ThemeContainer_1 = require("../ThemeContainer");
const ColoredText_1 = require("../reusable/text/ColoredText");
const copy_to_clipboard_1 = require("../reusable/copy-to-clipboard/copy-to-clipboard");
/**
 * NodeModal is a modal that displays the pods of a node when a node is clicked on.
 * @param Node - The node that was clicked on.
 * @param setModalOpen - A function that sets the modal to open or closed.
 */
const NodeModal = ({ Node, setModalOpen }) => {
    const nodeModalOverlay = (0, react_1.useRef)(null);
    const nodeModalPodsViewRef = (0, react_1.useRef)(null);
    const podsViewRef = (0, react_1.useRef)(null);
    const muiTheme = (0, material_1.useTheme)();
    //* pods to format
    const nodePods = Node === null || Node === void 0 ? void 0 : Node.pods;
    const closeModal = (e) => {
        e.stopPropagation();
        if (!nodeModalPodsViewRef.current ||
            !podsViewRef.current ||
            !nodeModalOverlay.current) {
            setModalOpen(false);
            return;
        }
        else {
            (0, util_1.exitAnimations)(e, nodeModalPodsViewRef.current, nodeModalOverlay.current, podsViewRef.current, setModalOpen);
        }
    };
    //* Overlay is the background of the modal
    //* ClickableOverlay is the background of the modal that closes the modal when clicked
    //* PodsContainer is the container that holds the pods, we pass it a ref to give it a animation when the modal is closed
    return ((0, jsx_runtime_1.jsxs)("div", { ref: nodeModalOverlay, className: "nodeModalOverlay Opacity-In", children: [(0, jsx_runtime_1.jsx)("div", { className: "nodeClickableOverlay", onClick: closeModal }), (0, jsx_runtime_1.jsx)("div", { className: "nodeModalContainer", children: (0, jsx_runtime_1.jsxs)("div", { ref: nodeModalPodsViewRef, className: `nodeModalPodsViewOuter ${muiTheme.palette.mode}`, children: [(0, jsx_runtime_1.jsx)("span", { className: "close", children: (0, jsx_runtime_1.jsx)("button", { className: "closeButton", onClick: closeModal, children: "X" }) }), (0, jsx_runtime_1.jsxs)("span", { id: "node-name", children: [(0, jsx_runtime_1.jsx)(copy_to_clipboard_1.CopyToClipboard, { text: Node.nodeName }), (0, jsx_runtime_1.jsx)(ColoredText_1.ColoredText, { color: "White", children: "Node: " }), ' ', (0, jsx_runtime_1.jsxs)(ColoredText_1.ColoredText, { color: "Orange", children: [Node.nodeName, " "] })] }), (0, jsx_runtime_1.jsx)("div", { className: `nodeModalPodsViewInner ${muiTheme.palette.mode}`, children: (0, jsx_runtime_1.jsx)(ThemeContainer_1.ThemeContainer, { IDOverride: "nodeModalThemedContainer", children: (0, jsx_runtime_1.jsx)(PodContainer_1.PodContainer, { podsViewRef: podsViewRef, nodePods: nodePods }) }) })] }) })] }));
};
exports.NodeModal = NodeModal;
