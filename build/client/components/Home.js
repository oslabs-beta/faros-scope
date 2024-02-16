"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const ThemedContainer_1 = __importDefault(require("./reusable/ThemedContainer"));
require("../css/Home.scss");
const Graph_1 = __importDefault(require("./reusable/Graph"));
/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
const Home = () => {
    return (react_1.default.createElement(ThemedContainer_1.default, null,
        react_1.default.createElement(Graph_1.default, null)));
};
exports.default = Home;
