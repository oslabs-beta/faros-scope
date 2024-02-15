"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const core_1 = require("@dnd-kit/core");
const react_2 = require("react");
const react_router_dom_1 = require("react-router-dom");
const index_1 = require("./components/NavBar/index");
const NotifDisplay_1 = __importDefault(require("./components/NotifDisplay/NotifDisplay"));
const GridContext_1 = __importDefault(require("./components/context/GridContext"));
const DropPositions_1 = __importDefault(require("./components/reusable/reactdnd/DropPositions"));
const bobbySocketService_1 = require("./redux/bobbySocketService");
const metricsApi_1 = require("./redux/metricsApi");
const Main = () => {
    (0, bobbySocketService_1.useSocket)('http://104.154.129.231:8000/');
    // ^ see if this works w/o variable declarations
    (0, metricsApi_1.useGetClusterInfoQuery)(undefined, { pollingInterval: 25000 });
    (0, metricsApi_1.useGetClusterMetricsMapQuery)(undefined, { pollingInterval: 5000 });
    // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
    const [parent, setParent] = (0, react_2.useState)(getStoredPosition());
    const [orientation, setOrientation] = (0, react_2.useState)(inferOrientation(parent));
    function inferOrientation(parent) {
        switch (parent) {
            case 'topNavPosition':
                return 'horizontal';
            case 'leftNavPosition':
                return 'vertical';
            case 'bottomNavPosition':
                return 'horizontal';
            case 'rightNavPosition':
                return 'vertical';
            default:
                return 'horizontal';
        }
    }
    function setStoredPosition(orientation) {
        localStorage.setItem('orientation', orientation);
    }
    function getStoredPosition() {
        const orientation = localStorage.getItem('orientation');
        if (orientation === null || !orientation.length) {
            setStoredPosition('topNavPosition');
        }
        return orientation || 'topNavPosition';
    }
    function handleDragEnd({ over }) {
        switch (over === null || over === void 0 ? void 0 : over.id) {
            case 'topNavPosition':
                setOrientation('horizontal');
                break;
            case 'leftNavPosition':
                setOrientation('vertical');
                break;
            case 'bottomNavPosition':
                setOrientation('horizontal');
                break;
            case 'rightNavPosition':
                setOrientation('vertical');
                break;
            default:
                break;
        }
        setParent(over ? over.id : parent);
        setStoredPosition(over ? over.id : parent);
    }
    return ((0, jsx_runtime_1.jsx)("div", { className: "Main", children: (0, jsx_runtime_1.jsxs)(GridContext_1.default, { children: [(0, jsx_runtime_1.jsx)(NotifDisplay_1.default, {}), (0, jsx_runtime_1.jsxs)(core_1.DndContext, { onDragEnd: handleDragEnd, collisionDetection: core_1.closestCenter, children: [(0, jsx_runtime_1.jsx)(core_1.DragOverlay, { children: (0, jsx_runtime_1.jsx)(index_1.NavBar, { orientation: orientation }) }), (0, jsx_runtime_1.jsx)(DropPositions_1.default, { parent: parent })] }), (0, jsx_runtime_1.jsx)(react_1.ChakraProvider, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Outlet, {}) })] }) }));
};
exports.default = Main;
