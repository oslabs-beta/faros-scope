"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PodContainer = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const util_1 = require("../../util");
const material_1 = require("@mui/material");
require("../../css/graph.scss");
require("../../css/Pod.scss");
// import styles from './PodContainer.module.css';
// import classNames from 'classNames';
/**
 * PodContainer is a container that displays the pods of a node when a node is clicked on.
 * @param nodePods - The pods of the node that was clicked on.
 * @param podsViewRef - A reference to the nodePodsView div.
 */
const PodContainer = ({ nodePods, podsViewRef }) => {
    const [showOverlay, setShowOverlay] = (0, react_1.useState)(false);
    const muiTheme = (0, material_1.useTheme)();
    const disableOverlay = () => {
        setShowOverlay(false);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { ref: podsViewRef, className: `podsView ${muiTheme.palette.mode}`, children: [showOverlay && ((0, jsx_runtime_1.jsx)("span", { onClick: disableOverlay, className: "podsViewOverlay" })), (0, jsx_runtime_1.jsx)("div", { className: `podsViewInner ${muiTheme.palette.mode}`, children: (0, jsx_runtime_1.jsx)("div", { className: "podsContainer", children: (0, util_1.formatPods)(nodePods, 7) }) })] }));
};
exports.PodContainer = PodContainer;
