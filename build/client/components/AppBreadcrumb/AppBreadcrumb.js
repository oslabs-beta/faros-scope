"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const jsx_runtime_1 = require("react/jsx-runtime");
const react_2 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const routes_1 = __importDefault(require("../../routes"));
const react_3 = require("@coreui/react");
const AppBreadcrumb = () => {
    const currentLocation = (0, react_router_dom_1.useLocation)().pathname;
    const getRouteName = (pathname, routes) => {
        const currentRoute = routes.find((route) => route.path === pathname);
        return currentRoute ? currentRoute.name : false;
    };
    const getBreadcrumbs = (location) => {
        const breadcrumbs = [];
        location.split('/').reduce((prev, curr, index, array) => {
            const currentPathname = `${prev}/${curr}`;
            const routeName = getRouteName(currentPathname, routes_1.default);
            routeName &&
                breadcrumbs.push({
                    pathname: currentPathname,
                    name: routeName,
                    active: index + 1 === array.length ? true : false,
                });
            return currentPathname;
        });
        return breadcrumbs;
    };
    const breadcrumbs = getBreadcrumbs(currentLocation);
    return ((0, jsx_runtime_1.jsxs)(react_3.CBreadcrumb, { className: "my-0", children: [(0, jsx_runtime_1.jsx)(react_3.CBreadcrumbItem, { href: "/", children: "Home" }), breadcrumbs.map((breadcrumb, index) => {
                return ((0, react_1.createElement)(react_3.CBreadcrumbItem, Object.assign({}, (breadcrumb.active ? { active: true } : { href: breadcrumb.pathname }), { key: index }), breadcrumb.name));
            })] }));
};
exports.default = react_2.default.memo(AppBreadcrumb);
