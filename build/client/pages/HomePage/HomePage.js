"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("../../components");
require("./Home.scss");
/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
const HomePage = () => {
    return ((0, jsx_runtime_1.jsx)(components_1.ThemeContainer, { style: { display: 'flex' }, children: (0, jsx_runtime_1.jsx)(components_1.Graph, {}) }));
};
exports.HomePage = HomePage;
