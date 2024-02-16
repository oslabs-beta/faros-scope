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
exports.PodContainer = void 0;
const react_1 = __importStar(require("react"));
const Theme_1 = require("../../Theme");
const formatPods_1 = __importDefault(require("../../util/formatPods"));
require("../Graph/Graph.module.css");
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
    const enableOverlay = () => {
        setShowOverlay(true);
        console.log('enableOverlay');
    };
    return (react_1.default.createElement("div", { ref: podsViewRef, className: "podsView" },
        showOverlay && (react_1.default.createElement("span", { onClick: disableOverlay, className: "podsViewOverlay" })),
        theme === 'dark' && react_1.default.createElement("span", { className: "podsViewPolkaOverlay" }),
        react_1.default.createElement("div", { className: "podsViewInner" },
            react_1.default.createElement("div", { className: "podsContainer" }, (0, formatPods_1.default)(nodePods, 4, enableOverlay)))));
};
exports.PodContainer = PodContainer;
