"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("react-app-polyfill/stable");
require("core-js");
const client_1 = require("react-dom/client");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const App_1 = __importDefault(require("./App"));
require("./index.css");
require("./variables.scss");
require("./theme.scss");
const store_1 = require("./store/store");
const container = document.getElementById('root');
container ? (0, client_1.createRoot)(container).render((0, jsx_runtime_1.jsx)(react_1.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store_1.store, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) })) : null;
