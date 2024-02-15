"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// import React from 'react'
const icons_1 = require("@coreui/icons");
const icons_react_1 = __importDefault(require("@coreui/icons-react"));
const react_1 = require("@coreui/react");
const lu_1 = require("react-icons/lu");
const pi_1 = require("react-icons/pi");
const md_1 = require("react-icons/md");
const _nav = [
    {
        component: react_1.CNavItem,
        name: "Monitoring",
        to: "/dashboard",
        icon: (0, jsx_runtime_1.jsx)(pi_1.PiMonitorFill, { className: "nav-icon" }),
    },
    {
        component: react_1.CNavGroup,
        name: "Dashboard",
        icon: (0, jsx_runtime_1.jsx)(lu_1.LuLayoutDashboard, { className: "nav-icon" }),
    },
    {
        component: react_1.CNavTitle,
        name: "Dashboards",
    },
    {
        component: react_1.CNavGroup,
        name: "Presets",
        // to: '/buttons',
        icon: (0, jsx_runtime_1.jsx)(md_1.MdDashboard, { className: "nav-icon" }),
        items: [
            //   {
            //     component: CNavItem,
            //     name: "Cluster View",
            //     to: "/cluster-view",
            //   },
            {
                component: react_1.CNavItem,
                name: "Node View",
                to: "/node-view",
            },
            //   {
            //     component: CNavItem,
            //     name: "Workload View",
            //     to: "/workload-view",
            //   },
            {
                component: react_1.CNavItem,
                name: "List View",
                to: "/list-view",
            },
        ],
    },
    //   {
    //     component: CNavItem,
    //     name: "Node View",
    //     to: "/node-view",
    //     icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    //   },
    //   {
    //     component: CNavItem,
    //     name: "ListView",
    //     to: "/list-view",
    //     icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    //   },
    //   {
    //     component: CNavItem,
    //     name: "NetworkGraph",
    //     to: "/network-view",
    //     icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    //   },
    //   {
    //     component: CNavTitle,
    //     name: "Components",
    //   },
    //   {
    //     component: CNavGroup,
    //     name: "Base",
    //     to: "/base",
    //     icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    //     items: [
    //       {
    //         component: CNavItem,
    //         name: "Accordion",
    //         to: "/base/accordion",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Breadcrumb",
    //         to: "/base/breadcrumbs",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Cards",
    //         to: "/base/cards",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Carousel",
    //         to: "/base/carousels",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Collapse",
    //         to: "/base/collapses",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "List group",
    //         to: "/base/list-groups",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Navs & Tabs",
    //         to: "/base/navs",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Pagination",
    //         to: "/base/paginations",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Placeholders",
    //         to: "/base/placeholders",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Popovers",
    //         to: "/base/popovers",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Progress",
    //         to: "/base/progress",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Spinners",
    //         to: "/base/spinners",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Tables",
    //         to: "/base/tables",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Tooltips",
    //         to: "/base/tooltips",
    //       },
    //     ],
    //   },
    //   {
    //     component: CNavGroup,
    //     name: "Buttons",
    //     to: "/buttons",
    //     icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
    //     items: [
    //       {
    //         component: CNavItem,
    //         name: "Buttons",
    //         to: "/buttons/buttons",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Buttons groups",
    //         to: "/buttons/button-groups",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Dropdowns",
    //         to: "/buttons/dropdowns",
    //       },
    //     ],
    //   },
    //   {
    //     component: CNavGroup,
    //     name: "Forms",
    //     icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    //     items: [
    //       {
    //         component: CNavItem,
    //         name: "Form Control",
    //         to: "/forms/form-control",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Select",
    //         to: "/forms/select",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Checks & Radios",
    //         to: "/forms/checks-radios",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Range",
    //         to: "/forms/range",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Input Group",
    //         to: "/forms/input-group",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Floating Labels",
    //         to: "/forms/floating-labels",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Layout",
    //         to: "/forms/layout",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Validation",
    //         to: "/forms/validation",
    //       },
    //     ],
    //   },
    //   {
    //     component: CNavItem,
    //     name: "Charts",
    //     to: "/charts",
    //     icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    //   },
    //   {
    //     component: CNavGroup,
    //     name: "Icons",
    //     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    //     items: [
    //       {
    //         component: CNavItem,
    //         name: "CoreUI Free",
    //         to: "/icons/coreui-icons",
    //         badge: {
    //           color: "success",
    //           text: "NEW",
    //         },
    //       },
    //       {
    //         component: CNavItem,
    //         name: "CoreUI Flags",
    //         to: "/icons/flags",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "CoreUI Brands",
    //         to: "/icons/brands",
    //       },
    //     ],
    //   },
    //   {
    //     component: CNavGroup,
    //     name: "Notifications",
    //     icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    //     items: [
    //       {
    //         component: CNavItem,
    //         name: "Alerts",
    //         to: "/notifications/alerts",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Badges",
    //         to: "/notifications/badges",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Modal",
    //         to: "/notifications/modals",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Toasts",
    //         to: "/notifications/toasts",
    //       },
    //     ],
    //   },
    //   {
    //     component: CNavItem,
    //     name: "Widgets",
    //     to: "/widgets",
    //     icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    //     badge: {
    //       color: "info",
    //       text: "NEW",
    //     },
    //   },
    //   {
    //     component: CNavTitle,
    //     name: "Extras",
    //   },
    //   {
    //     component: CNavGroup,
    //     name: "Pages",
    //     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    //     items: [
    //       {
    //         component: CNavItem,
    //         name: "Login",
    //         to: "/login",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Register",
    //         to: "/register",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Error 404",
    //         to: "/404",
    //       },
    //       {
    //         component: CNavItem,
    //         name: "Error 500",
    //         to: "/500",
    //       },
    //     ],
    //   },
    {
        component: react_1.CNavItem,
        name: "Docs",
        href: "https://coreui.io/react/docs/templates/installation/",
        icon: (0, jsx_runtime_1.jsx)(icons_react_1.default, { icon: icons_1.cilDescription, customClassName: "nav-icon" }),
    },
];
exports.default = _nav;
