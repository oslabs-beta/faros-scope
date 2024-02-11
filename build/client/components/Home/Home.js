"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Home = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const index_1 = require("../Themed/Container/index");
require("../../css/Home.scss");
const index_2 = require("../Graph/index");
/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
const Home = () => {
    return ((0, jsx_runtime_1.jsx)(index_1.ThemedContainer, { children: (0, jsx_runtime_1.jsx)(index_2.Graph, {}) }));
};
exports.Home = Home;
