"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Draggable_1 = __importDefault(require("./Draggable"));
const index_1 = require("../../NavBar/index");
const DraggableNavbar = ({ orientation }) => {
    return ((0, jsx_runtime_1.jsx)(Draggable_1.default, { className: `navDragContainer ${orientation || ''}`, id: "navDragContainer", orientation: orientation || '', children: (0, jsx_runtime_1.jsx)(index_1.NavBar, { orientation: orientation }) }));
};
exports.default = DraggableNavbar;
