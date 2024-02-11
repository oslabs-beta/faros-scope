"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Droppable_1 = __importDefault(require("./Droppable"));
require("../../../css/Reactdnd.scss");
const DraggableNavbar_1 = __importDefault(require("./DraggableNavbar"));
const DropPositions = ({ parent }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "navPositions", children: [(0, jsx_runtime_1.jsx)(Droppable_1.default, { id: "topNavPosition", orientation: "horizontal", classOverride: "styleTop", outlineClass: "outlineTop", children: (0, jsx_runtime_1.jsx)("div", { id: "topNavPosition", children: parent === 'topNavPosition' && ((0, jsx_runtime_1.jsx)(DraggableNavbar_1.default, { orientation: "horizontal" })) }) }), (0, jsx_runtime_1.jsx)(Droppable_1.default, { id: "leftNavPosition", orientation: "vertical", classOverride: "styleLeft", outlineClass: "outlineLeft", children: (0, jsx_runtime_1.jsx)("div", { id: "leftNavPosition", children: parent === 'leftNavPosition' && ((0, jsx_runtime_1.jsx)(DraggableNavbar_1.default, { orientation: "vertical" })) }) }), (0, jsx_runtime_1.jsx)(Droppable_1.default, { id: "bottomNavPosition", classOverride: "styleBottom", orientation: "horizontal", outlineClass: "outlineBottom", children: (0, jsx_runtime_1.jsx)("div", { id: "bottomNavPosition", children: parent === 'bottomNavPosition' && ((0, jsx_runtime_1.jsx)(DraggableNavbar_1.default, { orientation: "horizontal" })) }) }), (0, jsx_runtime_1.jsx)(Droppable_1.default, { id: "rightNavPosition", classOverride: "styleRight", orientation: "vertical", outlineClass: "outlineRight", children: (0, jsx_runtime_1.jsx)("div", { id: "rightNavPosition", children: parent === 'rightNavPosition' && ((0, jsx_runtime_1.jsx)(DraggableNavbar_1.default, { orientation: "vertical" })) }) })] }));
};
exports.default = DropPositions;
