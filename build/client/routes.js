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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Dashboard = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./views/dashboard/Dashboard"))));
const NodeView = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./pages/NodeView/NodeView"))));
const ListView = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./pages/ListViewPage/ListViewPage"))));
const Graph = react_1.default.lazy(() => Promise.resolve().then(() => __importStar(require("./components/Graph/Graph"))));
// const NetworkView = React.lazy(() => import("./components/Graph/Graph"));
// example
//   { path: '/theme', name: 'Theme', element: Colors, exact: true },
const routes = [
    { path: "/*", /*exact: true ,*/ name: "Home" },
    { path: "/dashboard", name: "Dashboard", element: Dashboard },
    { path: "/node-view", name: "Node View", element: NodeView },
    { path: "/list-view", name: "List View", element: ListView },
    { path: "/network-view", name: "Network View", element: Graph },
];
exports.default = routes;
