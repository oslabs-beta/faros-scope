"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GridProvider = exports.GridContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
exports.GridContext = (0, react_1.createContext)({});
const GridProvider = ({ children }) => {
    const [significantChild, setSignificantChild] = (0, react_1.useState)();
    const [scrollable, setScrollable] = (0, react_1.useState)(false);
    function setMostSignificantChild(child) {
        setSignificantChild(child);
    }
    function scrollToSignificantChild() {
        if (!significantChild)
            return;
        significantChild.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    }
    function setGridScrollable(scrollable) {
        setScrollable(scrollable);
    }
    return ((0, jsx_runtime_1.jsx)(exports.GridContext.Provider, { value: {
            scrollToSignificantChild,
            setMostSignificantChild,
            setGridScrollable,
            scrollable,
        }, children: children }));
};
exports.GridProvider = GridProvider;
