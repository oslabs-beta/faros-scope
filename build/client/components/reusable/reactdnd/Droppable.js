"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Droppable = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("@dnd-kit/core");
require("../../../css/Reactdnd.scss");
function Droppable({ id, children, styleOverride, classOverride, orientation, outlineClass }) {
    const { isOver, setNodeRef } = (0, core_1.useDroppable)({
        id: id,
        data: { orientation },
    });
    styleOverride = Object.assign({}, styleOverride);
    const dummyStyle = {
        opacity: isOver ? '0.6' : '0',
    };
    return ((0, jsx_runtime_1.jsx)("div", { className: classOverride || 'droppableContainer', ref: setNodeRef, style: styleOverride, children: outlineClass && ((0, jsx_runtime_1.jsxs)("div", { className: 'outerDroppable', children: [(0, jsx_runtime_1.jsx)("div", { className: outlineClass, style: dummyStyle }), children] })) }));
}
exports.Droppable = Droppable;
exports.default = Droppable;
