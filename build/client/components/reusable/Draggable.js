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
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
require("../../css/Graph.scss");
const Theme_1 = require("../../Theme");
const animationsUtil_1 = require("../../util/animationsUtil");
/**
 * Draggable is a container that allows the user to drag the graph around.
 * @param children - The children of the Draggable component.
 * @param color - The color of the Draggable component.
 * @param delay - The delay before the Draggable component is initialized.
 **/
const Draggable = ({ children, delay }) => {
    //* references to the draggable div, which is the container for the graph
    const draggableContainer = (0, react_1.useRef)(null);
    const draggableInner = (0, react_1.useRef)(null);
    const draggableContent = (0, react_1.useRef)(null);
    //* for some reason this needs to be initialized to 1.1, otherwise the graph will be too small
    //* I believe this is because the DOM is not yet loaded when the component is initialized, so the calculations are off for the offsets
    //* might have to do with the actual CSS set such as fit-content
    const [nodesScale, setNodesScale] = (0, react_1.useState)(1.1);
    const { theme } = (0, Theme_1.useTheme)();
    //* dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
    let dragging = false;
    let startX = 0, startY = 0;
    const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            setNodesScale((prev) => Number(Math.max(0.5, prev - 0.1).toFixed(1)));
        }
        else if (e.deltaY < 0) {
            setNodesScale((prev) => Number(Math.min(1.5, prev + 0.1).toFixed(1)));
        }
    };
    (0, react_1.useEffect)(() => {
        var _a, _b;
        //* add event listener for scrolling with mouse wheel for scaling
        if (draggableInner.current)
            draggableInner.current.addEventListener('wheel', handleWheel);
        //* As user moves the mouse while dragging, update the scroll position
        //* in the case of a mouse event, the event is a MouseEvent, which means e.clientX and e.clientY refer to the mouse position
        const handleMouseMove = (e) => {
            if (!dragging)
                return;
            //* calculate the change in mouse position from the previous position
            const deltaX = startX - e.clientX;
            const deltaY = startY - e.clientY;
            //* update the scroll position of the graph
            if (draggableContainer.current) {
                const maxScrollLeft = draggableContainer.current.scrollWidth -
                    draggableContainer.current.clientWidth;
                const maxScrollTop = draggableContainer.current.scrollHeight -
                    draggableContainer.current.clientHeight;
                // Limit scrolling to the visible content
                const newScrollLeft = Math.max(0, Math.min(draggableContainer.current.scrollLeft + deltaX, maxScrollLeft));
                const newScrollTop = Math.max(0, Math.min(draggableContainer.current.scrollTop + deltaY, maxScrollTop));
                draggableContainer.current.scrollLeft = newScrollLeft;
                draggableContainer.current.scrollTop = newScrollTop;
            }
            //* update the start coordinates for next mouse move event
            startX = e.clientX;
            startY = e.clientY;
        };
        //* Once user clicks, begin dragging
        const handleMouseDown = (e) => {
            dragging = true;
            startX = e.clientX;
            startY = e.clientY;
        };
        //* Once user releases mouse, stop dragging
        const handleMouseUp = () => {
            dragging = false;
        };
        //* initialize the graph
        if (draggableContainer.current) {
            //* center the graph
            if (draggableContainer.current) {
                if (delay) {
                    setTimeout(() => {
                        var _a, _b;
                        if (draggableContainer.current) {
                            draggableContainer.current.scrollTo({
                                top: (draggableContainer.current.scrollHeight -
                                    ((_a = draggableContainer.current) === null || _a === void 0 ? void 0 : _a.clientHeight)) /
                                    2,
                                left: (draggableContainer.current.scrollWidth -
                                    ((_b = draggableContainer.current) === null || _b === void 0 ? void 0 : _b.clientWidth)) /
                                    2,
                                behavior: 'smooth',
                            });
                        }
                    }, delay);
                }
                else {
                    //* center the graph
                    draggableContainer.current.scrollTo({
                        top: (draggableContainer.current.scrollHeight -
                            ((_a = draggableContainer.current) === null || _a === void 0 ? void 0 : _a.clientHeight)) /
                            2,
                        left: (draggableContainer.current.scrollWidth -
                            ((_b = draggableContainer.current) === null || _b === void 0 ? void 0 : _b.clientWidth)) /
                            2,
                        behavior: 'smooth',
                    });
                }
                //* add event listeners for dragging with mouse
                draggableContainer.current.addEventListener('mousemove', handleMouseMove);
                draggableContainer.current.addEventListener('mouseup', handleMouseUp);
                draggableContainer.current.addEventListener('mousedown', handleMouseDown);
            }
        }
        //* Clean up event listeners when component unmounts
        return () => {
            var _a;
            if (draggableContainer.current) {
                draggableContainer.current.removeEventListener('mousemove', handleMouseMove);
                draggableContainer.current.removeEventListener('mouseup', handleMouseUp);
                draggableContainer.current.removeEventListener('mousedown', handleMouseDown);
            }
            if (draggableInner.current)
                (_a = draggableInner.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('wheel', handleWheel);
        };
    }, []);
    (0, react_1.useEffect)(() => {
        if (!draggableInner.current || !draggableContent.current)
            return;
        const inner = draggableInner.current;
        const content = draggableContent.current;
        // Apply the scale to draggableInner
        (0, animationsUtil_1.setScale)(inner, nodesScale);
        // Calculate the scaled width and height
        const scaledWidth = Math.round(inner.offsetWidth * nodesScale);
        const scaledHeight = Math.round(inner.offsetHeight * nodesScale);
        // Update the width and height of draggableContent
        content.style.width = `${scaledWidth + 200}px`;
        content.style.height = `${scaledHeight + 200}px`;
        // console.log(nodesScale);
    }, [nodesScale]);
    return (react_1.default.createElement("div", { ref: draggableContainer, className: `draggableContainer ${theme}` },
        react_1.default.createElement("div", { ref: draggableContent, className: "draggableContent" },
            react_1.default.createElement("div", { ref: draggableInner, className: "draggableInner" }, children))));
};
exports.default = Draggable;
