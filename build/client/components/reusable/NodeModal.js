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
const PodsContainer_1 = __importDefault(require("./PodsContainer"));
const ThemedContainer_1 = __importDefault(require("./ThemedContainer"));
const nodeModalExitAnims_1 = __importDefault(require("../../util/nodeModalExitAnims"));
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
    // mock data
    console.log(Node);
    const nodePods = (Node === null || Node === void 0 ? void 0 : Node.pods) || [
        { name: 'test1' },
        { name: 'test2' },
        { name: 'testa3' },
        { name: 'test4' },
        { name: 'test5' },
    ];
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
    return (react_1.default.createElement("div", { ref: nodeModalOverlay, className: "nodeModalOverlay Opacity-In" },
        react_1.default.createElement("div", { className: "nodeClickableOverlay", onClick: closeModal }),
        react_1.default.createElement("div", { className: "nodeModalContainer" },
            react_1.default.createElement("div", { ref: nodeModalPodsViewRef, className: "nodeModalPodsView" },
                react_1.default.createElement("span", { className: "close" },
                    react_1.default.createElement("button", { className: "closeButton", onClick: closeModal }, "X")),
                react_1.default.createElement("div", { className: "nodeModalPodsViewInner" },
                    react_1.default.createElement(ThemedContainer_1.default, null,
                        react_1.default.createElement(PodsContainer_1.default, { podsViewRef: podsViewRef, nodePods: nodePods })))))));
};
exports.default = NodeModal;
