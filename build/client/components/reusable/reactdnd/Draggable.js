"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@dnd-kit/core");
const move_svgrepo_com_svg_1 = __importDefault(require("../../../assets/move-svgrepo-com.svg"));
require("../../../css/Reactdnd.scss");
function Draggable({ id, children, orientation = 'horizontal', className, }) {
    const { attributes, listeners, setNodeRef, setActivatorNodeRef } = (0, core_1.useDraggable)({
        id: id,
        data: {
            orientation,
        },
    });
    const style = {
    // Outputs `translate3d(x, y, 0)`
    // transform: CSS.Translate.toString(transform),
    };
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: className || 'draggableDNDContainer', id: id || 'draggableDNDContainer', ref: setNodeRef, style: style }, attributes, { children: [(0, jsx_runtime_1.jsx)("button", Object.assign({ className: "dragButton", id: "dragButton" }, listeners, attributes, { ref: setActivatorNodeRef, children: (0, jsx_runtime_1.jsx)("img", { id: "navDragImg", src: move_svgrepo_com_svg_1.default }) })), children] })));
}
exports.default = Draggable;
