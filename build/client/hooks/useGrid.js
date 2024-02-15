"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useGrid = void 0;
const react_1 = require("react");
const context_1 = require("../context");
const useGrid = () => (0, react_1.useContext)(context_1.GridContext);
exports.useGrid = useGrid;
