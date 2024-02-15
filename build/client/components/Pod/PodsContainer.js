"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const formatPods_1 = __importDefault(require("../../util/formatPods"));
const Theme_1 = require("../context/Theme");
require("../../css/Graph.scss");
require("../../css/Pod.scss");
/**
 * PodContainer is a container that displays the pods of a node when a node is clicked on.
 * @param nodePods - The pods of the node that was clicked on.
 * @param podsViewRef - A reference to the nodePodsView div.
 */
const PodContainer = ({ nodePods, podsViewRef }) => {
    const [showOverlay, setShowOverlay] = (0, react_1.useState)(false);
    const { theme } = (0, Theme_1.useTheme)();
    const disableOverlay = () => {
        setShowOverlay(false);
        console.log('disableOverlay');
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: podsViewRef, className: `podsView ${theme}`, children: [showOverlay && ((0, jsx_runtime_1.jsx)("span", { onClick: disableOverlay, className: "podsViewOverlay" })), (0, jsx_runtime_1.jsx)("div", { className: `podsViewInner ${theme}`, children: (0, jsx_runtime_1.jsx)("div", { className: "podsContainer", children: (0, formatPods_1.default)(nodePods, 7) }) })] }));
};
exports.default = PodContainer;
