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
require("../../css/Node.scss");
const NodeModal_1 = __importDefault(require("./NodeModal"));
const react_dom_1 = require("react-dom");
/**
 * A node in the graph, represents a single data point in a Kubernetes cluster
 * @param content - The content of the node, which is the data point in the cluster.
 * @param dimensions - The dimensions of the node.
 * @returns ReactNode
 */
const Node = ({ content, dimensions }) => {
    const [modalOpen, setModalOpen] = (0, react_1.useState)(false);
    const openModal = (e) => {
        e.stopPropagation();
        setModalOpen(true);
    };
    const nodeStyle = Object.assign({ width: '8em', height: '8em' }, dimensions);
    //* Add onclick that adds a class to the node that makes send out a pulse engulfing the app
    return (react_1.default.createElement("div", { className: "Node", style: nodeStyle, onClick: openModal },
        react_1.default.createElement("span", { className: "nodeOverlay" }),
        react_1.default.createElement("div", { className: "outerNode" },
            react_1.default.createElement("div", { className: "innerNode" },
                react_1.default.createElement("div", { className: "nodeContent" }, content.name))),
        modalOpen &&
            (0, react_dom_1.createPortal)(react_1.default.createElement(NodeModal_1.default, { Node: content, setModalOpen: setModalOpen }), document.body)));
};
exports.default = Node;
