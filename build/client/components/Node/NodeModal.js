"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const PodsContainer_1 = __importDefault(require("../Pod/PodsContainer"));
const index_1 = require("../Themed/Container/index");
const nodeModalExitAnims_1 = __importDefault(require("../../util/nodeModalExitAnims"));
const Theme_1 = require("../context/Theme");
require("../../css/NodeModal.scss");
/**
 * NodeModal is a modal that displays the pods of a node when a node is clicked on.
 * @param Node - The node that was clicked on.
 * @param setModalOpen - A function that sets the modal to open or closed.
 */
const NodeModal = ({ Node, setModalOpen }) => {
    const nodeModalOverlay = (0, react_1.useRef)(null);
    const nodeModalPodsViewRef = (0, react_1.useRef)(null);
    const podsViewRef = (0, react_1.useRef)(null);
    const { theme } = (0, Theme_1.useTheme)();
    //* pods to format
    const nodePods = Node === null || Node === void 0 ? void 0 : Node.pods;
    //* Close modal when clicked outside of modal or x button is clicked
    const closeModal = (e) => {
        e.stopPropagation();
        if (!nodeModalPodsViewRef.current ||
            !podsViewRef.current ||
            !nodeModalOverlay.current) {
            setModalOpen(false);
            return;
        }
        else {
            (0, nodeModalExitAnims_1.default)(e, nodeModalPodsViewRef.current, nodeModalOverlay.current, podsViewRef.current, setModalOpen);
        }
    };
    //* Overlay is the background of the modal
    //* ClickableOverlay is the background of the modal that closes the modal when clicked
    //* PodsContainer is the container that holds the pods, we pass it a ref to give it a animation when the modal is closed
    return ((0, jsx_runtime_1.jsxs)("div", { ref: nodeModalOverlay, className: "nodeModalOverlay Opacity-In", children: [(0, jsx_runtime_1.jsx)("div", { className: "nodeClickableOverlay", onClick: closeModal }), (0, jsx_runtime_1.jsx)("div", { className: "nodeModalContainer", children: (0, jsx_runtime_1.jsxs)("div", { ref: nodeModalPodsViewRef, className: `nodeModalPodsViewOuter ${theme}`, children: [(0, jsx_runtime_1.jsx)("span", { className: "close", children: (0, jsx_runtime_1.jsx)("button", { className: "closeButton", onClick: closeModal, children: "X" }) }), (0, jsx_runtime_1.jsx)("div", { className: `nodeModalPodsViewInner ${theme}`, children: (0, jsx_runtime_1.jsx)(index_1.ThemedContainer, { IDOverride: 'nodeModalThemedContainer', children: (0, jsx_runtime_1.jsx)(PodsContainer_1.default, { podsViewRef: podsViewRef, nodePods: nodePods }) }) })] }) })] }));
};
exports.default = NodeModal;
