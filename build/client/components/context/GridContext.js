"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGrid = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const GridContext = (0, react_1.createContext)({});
const GridProvider = ({ children }) => {
    const [significantChild, setSignificantChild] = (0, react_1.useState)();
    const [scrollable, setScrollable] = (0, react_1.useState)(false);
    function setMostSignificantChild(child) {
        setSignificantChild(child);
    }
    function scrollToSignificantChild() {
        if (!significantChild)
            return;
        significantChild === null || significantChild === void 0 ? void 0 : significantChild.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
            inline: 'center',
        });
    }
    function setGridScrollable(scrollable) {
        setScrollable(scrollable);
    }
    return ((0, jsx_runtime_1.jsx)(GridContext.Provider, { value: {
            scrollToSignificantChild,
            setMostSignificantChild,
            setGridScrollable,
            scrollable,
        }, children: children }));
};
exports.default = GridProvider;
const useGrid = () => (0, react_1.useContext)(GridContext);
exports.useGrid = useGrid;
