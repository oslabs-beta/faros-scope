"use strict";
(self["webpackChunkfaros_scope"] = self["webpackChunkfaros_scope"] || []).push([["client_layout_DefaultLayout_tsx"],{

/***/ "./client/_nav.tsx":
/*!*************************!*\
  !*** ./client/_nav.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-speedometer.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-drop.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-pencil.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

// import React from 'react'




var _nav = [{
  component: _coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem,
  name: 'Dashboard',
  to: '/dashboard',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_3__.cilSpeedometer,
    customClassName: "nav-icon"
  })
  // badge: {
  //   color: 'info',
  //   text: 'NEW',
  // },
}, {
  component: _coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavTitle,
  name: 'Presets'
}, {
  component: _coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem,
  name: 'NodeView',
  to: '/node-view',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__.cilDrop,
    customClassName: "nav-icon"
  })
}, {
  component: _coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem,
  name: 'ListView',
  to: '/list-view',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cilPencil,
    customClassName: "nav-icon"
  })
}, {
  component: _coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem,
  name: 'NetworkGraph',
  to: '/network-view',
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cilPencil,
    customClassName: "nav-icon"
  })
}
//   {
//     component: CNavTitle,
//     name: 'Components',
//   },
//   {
//     component: CNavGroup,
//     name: 'Base',
//     to: '/base',
//     icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Accordion',
//         to: '/base/accordion',
//       },
//       {
//         component: CNavItem,
//         name: 'Breadcrumb',
//         to: '/base/breadcrumbs',
//       },
//       {
//         component: CNavItem,
//         name: 'Cards',
//         to: '/base/cards',
//       },
//       {
//         component: CNavItem,
//         name: 'Carousel',
//         to: '/base/carousels',
//       },
//       {
//         component: CNavItem,
//         name: 'Collapse',
//         to: '/base/collapses',
//       },
//       {
//         component: CNavItem,
//         name: 'List group',
//         to: '/base/list-groups',
//       },
//       {
//         component: CNavItem,
//         name: 'Navs & Tabs',
//         to: '/base/navs',
//       },
//       {
//         component: CNavItem,
//         name: 'Pagination',
//         to: '/base/paginations',
//       },
//       {
//         component: CNavItem,
//         name: 'Placeholders',
//         to: '/base/placeholders',
//       },
//       {
//         component: CNavItem,
//         name: 'Popovers',
//         to: '/base/popovers',
//       },
//       {
//         component: CNavItem,
//         name: 'Progress',
//         to: '/base/progress',
//       },
//       {
//         component: CNavItem,
//         name: 'Spinners',
//         to: '/base/spinners',
//       },
//       {
//         component: CNavItem,
//         name: 'Tables',
//         to: '/base/tables',
//       },
//       {
//         component: CNavItem,
//         name: 'Tooltips',
//         to: '/base/tooltips',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Buttons',
//     to: '/buttons',
//     icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Buttons',
//         to: '/buttons/buttons',
//       },
//       {
//         component: CNavItem,
//         name: 'Buttons groups',
//         to: '/buttons/button-groups',
//       },
//       {
//         component: CNavItem,
//         name: 'Dropdowns',
//         to: '/buttons/dropdowns',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Forms',
//     icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Form Control',
//         to: '/forms/form-control',
//       },
//       {
//         component: CNavItem,
//         name: 'Select',
//         to: '/forms/select',
//       },
//       {
//         component: CNavItem,
//         name: 'Checks & Radios',
//         to: '/forms/checks-radios',
//       },
//       {
//         component: CNavItem,
//         name: 'Range',
//         to: '/forms/range',
//       },
//       {
//         component: CNavItem,
//         name: 'Input Group',
//         to: '/forms/input-group',
//       },
//       {
//         component: CNavItem,
//         name: 'Floating Labels',
//         to: '/forms/floating-labels',
//       },
//       {
//         component: CNavItem,
//         name: 'Layout',
//         to: '/forms/layout',
//       },
//       {
//         component: CNavItem,
//         name: 'Validation',
//         to: '/forms/validation',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Charts',
//     to: '/charts',
//     icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
//   },
//   {
//     component: CNavGroup,
//     name: 'Icons',
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'CoreUI Free',
//         to: '/icons/coreui-icons',
//         badge: {
//           color: 'success',
//           text: 'NEW',
//         },
//       },
//       {
//         component: CNavItem,
//         name: 'CoreUI Flags',
//         to: '/icons/flags',
//       },
//       {
//         component: CNavItem,
//         name: 'CoreUI Brands',
//         to: '/icons/brands',
//       },
//     ],
//   },
//   {
//     component: CNavGroup,
//     name: 'Notifications',
//     icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Alerts',
//         to: '/notifications/alerts',
//       },
//       {
//         component: CNavItem,
//         name: 'Badges',
//         to: '/notifications/badges',
//       },
//       {
//         component: CNavItem,
//         name: 'Modal',
//         to: '/notifications/modals',
//       },
//       {
//         component: CNavItem,
//         name: 'Toasts',
//         to: '/notifications/toasts',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Widgets',
//     to: '/widgets',
//     icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
//     badge: {
//       color: 'info',
//       text: 'NEW',
//     },
//   },
//   {
//     component: CNavTitle,
//     name: 'Extras',
//   },
//   {
//     component: CNavGroup,
//     name: 'Pages',
//     icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
//     items: [
//       {
//         component: CNavItem,
//         name: 'Login',
//         to: '/login',
//       },
//       {
//         component: CNavItem,
//         name: 'Register',
//         to: '/register',
//       },
//       {
//         component: CNavItem,
//         name: 'Error 404',
//         to: '/404',
//       },
//       {
//         component: CNavItem,
//         name: 'Error 500',
//         to: '/500',
//       },
//     ],
//   },
//   {
//     component: CNavItem,
//     name: 'Docs',
//     href: 'https://coreui.io/react/docs/templates/installation/',
//     icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
//   },
];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_nav);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppBreadcrumb/AppBreadcrumb.tsx":
/*!***********************************************************!*\
  !*** ./client/components/AppBreadcrumb/AppBreadcrumb.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes */ "./client/routes.tsx");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var AppBreadcrumb = function AppBreadcrumb() {
  var currentLocation = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_4__.useLocation)().pathname;
  var getRouteName = function getRouteName(pathname, routes) {
    var currentRoute = routes.find(function (route) {
      return route.path === pathname;
    });
    return currentRoute ? currentRoute.name : false;
  };
  var getBreadcrumbs = function getBreadcrumbs(location) {
    var breadcrumbs = [];
    location.split('/').reduce(function (prev, curr, index, array) {
      var currentPathname = "".concat(prev, "/").concat(curr);
      var routeName = getRouteName(currentPathname, _routes__WEBPACK_IMPORTED_MODULE_1__["default"]);
      routeName && breadcrumbs.push({
        pathname: currentPathname,
        name: routeName,
        active: index + 1 === array.length ? true : false
      });
      return currentPathname;
    });
    return breadcrumbs;
  };
  var breadcrumbs = getBreadcrumbs(currentLocation);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CBreadcrumb, {
    className: "my-0",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CBreadcrumbItem, {
      href: "/",
      children: "Home"
    }), breadcrumbs.map(function (breadcrumb, index) {
      return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CBreadcrumbItem, _objectSpread(_objectSpread({}, breadcrumb.active ? {
        active: true
      } : {
        href: breadcrumb.pathname
      }), {}, {
        key: index
      }), breadcrumb.name);
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(AppBreadcrumb));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppBreadcrumb/index.ts":
/*!**************************************************!*\
  !*** ./client/components/AppBreadcrumb/index.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBreadcrumb: () => (/* reexport safe */ _AppBreadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AppBreadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBreadcrumb */ "./client/components/AppBreadcrumb/AppBreadcrumb.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppContent/AppContent.tsx":
/*!*****************************************************!*\
  !*** ./client/components/AppContent/AppContent.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./client/routes.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





// routes config



var Loader = function Loader() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CSpinner, {
      variant: "grow"
    })
  });
};
var AppContent = function AppContent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CContainer, {
    className: "custom-container px-4",
    lg: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Loader, {}),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Routes, {
        children: [_routes__WEBPACK_IMPORTED_MODULE_2__["default"].map(function (route, idx) {
          return route.element && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
            path: route.path
            //   exact={route.exact}
            //   name={route.name}
            ,
            element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(route.element, {})
          }, idx);
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
          path: "/",
          element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Navigate, {
            to: "dashboard",
            replace: true
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(AppContent));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppContent/index.ts":
/*!***********************************************!*\
  !*** ./client/components/AppContent/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppContent: () => (/* reexport safe */ _AppContent__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AppContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppContent */ "./client/components/AppContent/AppContent.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppFooter/AppFooter.tsx":
/*!***************************************************!*\
  !*** ./client/components/AppFooter/AppFooter.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var AppFooter = function AppFooter() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFooter, {
    className: "px-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://coreui.io",
        target: "_blank",
        rel: "noopener noreferrer"
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
      className: "ms-auto",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a", {
        href: "https://coreui.io/react",
        target: "_blank",
        rel: "noopener noreferrer"
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(AppFooter));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppFooter/index.ts":
/*!**********************************************!*\
  !*** ./client/components/AppFooter/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppFooter: () => (/* reexport safe */ _AppFooter__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AppFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter */ "./client/components/AppFooter/AppFooter.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppHeader/AppHeader.tsx":
/*!***************************************************!*\
  !*** ./client/components/AppHeader/AppHeader.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-menu.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-bell.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-list.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-envelope-open.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-moon.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-sun.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./client/theme.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../index */ "./client/components/index.ts");
/* harmony import */ var _store_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/slice */ "./client/store/slice.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");










// import { AppHeaderDropdown } from './components';
// import { logo } from 'src/assets/brand/logo'




var AppHeader = function AppHeader() {
  //   let location = useLocation();

  // type assertion; assert to typescript that ColorModeContext is an object with the method toggleColorMode
  var colorMode = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_theme__WEBPACK_IMPORTED_MODULE_4__.ColorModeContext);
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var changeTheme = function changeTheme() {
    return colorMode.toggleColorMode();
  };
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
  var sidebarShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.appState.sidebarShow;
  });
  var toggleSidebar = function toggleSidebar() {
    dispatch((0,_store_slice__WEBPACK_IMPORTED_MODULE_6__.changeState)({
      type: 'set',
      sidebarShow: !sidebarShow
    }));
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeader, {
    position: "sticky",
    className: "mb-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CContainer, {
      fluid: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeaderToggler, {
        className: "ps-1"
        //   onClick={() => dispatch(changeState({ type: 'set', sidebarShow: !sidebarShow }))}
        ,
        onClick: toggleSidebar,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_9__.cilMenu,
          size: "lg"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeaderNav, {
        className: "d-none d-md-flex me-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavLink, {
            to: "/dashboard",
            component: react_router_dom__WEBPACK_IMPORTED_MODULE_10__.NavLink,
            children: "Dashboard"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeaderNav, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavLink, {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_11__.cilBell,
              size: "lg"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavLink, {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_12__.cilList,
              size: "lg"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavItem, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CNavLink, {
            href: "#",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_13__.cilEnvelopeOpen,
              size: "lg"
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeaderNav, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("li", {
          className: "nav-item py-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
            className: "vr h-100 mx-2 text-body text-opacity-75"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          variant: "nav-item",
          placement: "bottom-end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            caret: false,
            children: theme.palette.mode === 'dark' ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_14__.cilMoon,
              size: "lg"
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_15__.cilSun,
              size: "lg"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              active: theme.palette.mode === 'light',
              className: "d-flex align-items-center",
              component: "button",
              type: "button",
              onClick: function onClick() {
                return changeTheme();
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
                className: "me-2",
                icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_15__.cilSun,
                size: "lg"
              }), " Light"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              active: theme.palette.mode === 'dark',
              className: "d-flex align-items-center",
              component: "button",
              type: "button",
              onClick: function onClick() {
                return changeTheme();
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
                className: "me-2",
                icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_14__.cilMoon,
                size: "lg"
              }), " Dark"]
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeaderDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CContainer, {
      fluid: true,
      className: "d-flex justify-content-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_index__WEBPACK_IMPORTED_MODULE_5__.AppBreadcrumb, {}), "Add TimePicker"]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CHeaderDivider, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CContainer, {
      fluid: true,
      children: "Add Notifications |  Add Filter | Add Event"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AppHeader);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppHeader/index.ts":
/*!**********************************************!*\
  !*** ./client/components/AppHeader/index.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppHeader: () => (/* reexport safe */ _AppHeader__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppHeader */ "./client/components/AppHeader/AppHeader.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppSidebar/AppSidebar.tsx":
/*!*****************************************************!*\
  !*** ./client/components/AppSidebar/AppSidebar.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_slice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/slice */ "./client/store/slice.ts");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./client/components/AppSidebar/components/index.ts");
/* harmony import */ var simplebar_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! simplebar-react */ "./node_modules/simplebar-react/dist/index.mjs");
/* harmony import */ var simplebar_dist_simplebar_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! simplebar/dist/simplebar.min.css */ "./node_modules/simplebar/dist/simplebar.min.css");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_nav */ "./client/_nav.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");










// sidebar nav config



var AppSidebar = function AppSidebar() {
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();
  var unfoldable = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.appState.sidebarUnfoldable;
  });
  var sidebarShow = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)(function (state) {
    return state.appState.sidebarShow;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CSidebar, {
    position: "fixed",
    unfoldable: unfoldable,
    visible: sidebarShow,
    onVisibleChange: function onVisibleChange(visible) {
      dispatch((0,_store_slice__WEBPACK_IMPORTED_MODULE_2__.changeState)({
        type: "set",
        sidebarShow: visible
      }));
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CSidebarBrand, {
      className: "WhatAmI d-none d-md-flex" /*to="/" */,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "sidebar-brand-full",
        height: 35
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: "sidebar-brand-narrow",
        height: 35
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CSidebarNav, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(simplebar_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components__WEBPACK_IMPORTED_MODULE_5__.AppSidebarNav, {
          items: _nav__WEBPACK_IMPORTED_MODULE_7__["default"]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CSidebarToggler, {
      className: "d-none d-lg-flex",
      onClick: function onClick() {
        return dispatch((0,_store_slice__WEBPACK_IMPORTED_MODULE_2__.changeState)({
          type: "set",
          sidebarUnfoldable: !unfoldable
        }));
      }
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().memo(AppSidebar));

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppSidebar/components/AppSidebarNav.tsx":
/*!*******************************************************************!*\
  !*** ./client/components/AppSidebar/components/AppSidebarNav.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebarNav: () => (/* binding */ AppSidebarNav)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["component", "name", "badge", "icon"],
  _excluded2 = ["component", "name", "icon", "items", "to"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var AppSidebarNav = function AppSidebarNav(_ref) {
  var items = _ref.items;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  var navLink = function navLink(name, icon, badge) {
    var indent = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [icon ? icon : indent && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
        className: "nav-icon",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
          className: "nav-icon-bullet"
        })
      }), name && name, badge && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CBadge, {
        color: badge.color,
        className: "ms-auto",
        children: badge.text
      })]
    });
  };
  var navItem = function navItem(item, index) {
    var indent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var component = item.component,
      name = item.name,
      badge = item.badge,
      icon = item.icon,
      rest = _objectWithoutProperties(item, _excluded);
    var Component = component;
    return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(Component, _objectSpread(_objectSpread({}, rest.to && !rest.items && {
      component: react_router_dom__WEBPACK_IMPORTED_MODULE_4__.NavLink
    }), {}, {
      key: index
    }, rest), navLink(name, icon, badge, indent));
  };
  var navGroup = function navGroup(item, index) {
    var _item$items;
    var component = item.component,
      name = item.name,
      icon = item.icon,
      items = item.items,
      to = item.to,
      rest = _objectWithoutProperties(item, _excluded2);
    var Component = component;
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Component, _objectSpread(_objectSpread({
      compact: true,
      idx: String(index),
      toggler: navLink(name, icon),
      visible: location.pathname.startsWith(to)
    }, rest), {}, {
      children: (_item$items = item.items) === null || _item$items === void 0 ? void 0 : _item$items.map(function (item, index) {
        return item.items ? navGroup(item, index) : navItem(item, index, true);
      })
    }), index);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), {
    children: items && items.map(function (item, index) {
      return item.items ? navGroup(item, index) : navItem(item, index);
    })
  });
};
AppSidebarNav.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default().arrayOf((prop_types__WEBPACK_IMPORTED_MODULE_5___default().any)).isRequired
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppSidebar/components/index.ts":
/*!**********************************************************!*\
  !*** ./client/components/AppSidebar/components/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebarNav: () => (/* reexport safe */ _AppSidebarNav__WEBPACK_IMPORTED_MODULE_0__.AppSidebarNav)
/* harmony export */ });
/* harmony import */ var _AppSidebarNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSidebarNav */ "./client/components/AppSidebar/components/AppSidebarNav.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/AppSidebar/index.ts":
/*!***********************************************!*\
  !*** ./client/components/AppSidebar/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppSidebar: () => (/* reexport safe */ _AppSidebar__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _AppSidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppSidebar */ "./client/components/AppSidebar/AppSidebar.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/CollapsiblePanel/CollapsiblePanel.tsx":
/*!*****************************************************************!*\
  !*** ./client/components/CollapsiblePanel/CollapsiblePanel.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsiblePanel: () => (/* binding */ CollapsiblePanel)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Accordion */ "./node_modules/@mui/material/Accordion/Accordion.js");
/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/AccordionDetails */ "./node_modules/@mui/material/AccordionDetails/AccordionDetails.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ "./node_modules/@mui/icons-material/ExpandMore.js");
/* harmony import */ var _mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ArrowForwardIosSharp */ "./node_modules/@mui/icons-material/ArrowForwardIosSharp.js");
/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AccordionSummary */ "./node_modules/@mui/material/AccordionSummary/AccordionSummary.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }










var AccordionSummary = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
    expandIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ArrowForwardIosSharp__WEBPACK_IMPORTED_MODULE_4__["default"], {
      sx: {
        fontSize: "0.9rem"
      }
    })
  }, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    backgroundColor: theme.palette.mode === "dark" ? "rgba(26, 10, 10, 0.05)" : "rgba(0, 0, 0, .03)",
    flexDirection: "row-reverse",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
      transform: "rotate(90deg)"
    },
    "& .MuiAccordionSummary-content": {
      marginLeft: theme.spacing(1)
    }
  };
});
var CollapsiblePanel = function CollapsiblePanel(_ref2) {
  var title = _ref2.title,
    children = _ref2.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AccordionSummary, {
        expandIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
        "aria-controls": title.replace(/\s+/g, "") + "-content",
        id: title.replace(/\s+/g, "") + "-header",
        sx: {
          fontSize: "1.15rem",
          "& .MuiAccordionSummary.Mui-expanded": {
            margin: "20px 0 0px 20px"
          }
        },
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_8__["default"], {
        sx: {
          display: "grid",
          // gridTemplateColumns: '1fr 1fr',
          gridTemplateRows: "auto 1fr",
          gap: "1rem"
        } // TODO: Verify this is correct
        ,
        children: children
      })]
    })
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/CollapsiblePanel/index.ts":
/*!*****************************************************!*\
  !*** ./client/components/CollapsiblePanel/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CollapsiblePanel: () => (/* reexport safe */ _CollapsiblePanel__WEBPACK_IMPORTED_MODULE_0__.CollapsiblePanel)
/* harmony export */ });
/* harmony import */ var _CollapsiblePanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CollapsiblePanel */ "./client/components/CollapsiblePanel/CollapsiblePanel.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/DataGridWithHeader/DataGridWithHeader.tsx":
/*!*********************************************************************!*\
  !*** ./client/components/DataGridWithHeader/DataGridWithHeader.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/DataGrid/DataGrid.js");
/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/x-data-grid */ "./node_modules/@mui/x-data-grid/components/toolbar/GridToolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var DataGridWithHeader = function DataGridWithHeader(_ref) {
  var title = _ref.title,
    columns = _ref.columns,
    data = _ref.data,
    isLoading = _ref.isLoading;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"], {
    sx: {
      border: "1px solid #e0e0e0",
      borderRadius: "4px",
      display: "flex",
      flexDirection: "column",
      "& .MuiDataGrid-root": {
        border: "none"
      },
      "& .MuiDataGrid-toolbarContainer": {
        borderTop: "1px solid #e0e0e0",
        borderBottom: "1px solid #e0e0e0"
      },
      "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "lightgray",
        borderRadius: 0
      },
      "& .MuiTablePagination-selectLabel ": {
        margin: "0"
      },
      "& .MuiTablePagination-displayedRows": {
        margin: "0"
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
      style: {
        display: "flex",
        alignItems: "center",
        marginLeft: "1rem",
        fontSize: "1.05rem",
        height: "10%",
        textAlign: "center"
      },
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {
      loading: isLoading || !data,
      rows: data,
      columns: columns,
      components: {
        Toolbar: _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_4__.GridToolbar
      }
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DataGridWithHeader);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/DataGridWithHeader/index.ts":
/*!*******************************************************!*\
  !*** ./client/components/DataGridWithHeader/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DataGridWithHeader: () => (/* reexport safe */ _DataGridWithHeader__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _DataGridWithHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataGridWithHeader */ "./client/components/DataGridWithHeader/DataGridWithHeader.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/FlexBetween/FlexBetween.tsx":
/*!*******************************************************!*\
  !*** ./client/components/FlexBetween/FlexBetween.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexBetween: () => (/* binding */ FlexBetween)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/styled.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



var FlexBetween = (0,_mui_system__WEBPACK_IMPORTED_MODULE_0__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center"
});

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/FlexBetween/index.ts":
/*!************************************************!*\
  !*** ./client/components/FlexBetween/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FlexBetween: () => (/* reexport safe */ _FlexBetween__WEBPACK_IMPORTED_MODULE_0__.FlexBetween)
/* harmony export */ });
/* harmony import */ var _FlexBetween__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FlexBetween */ "./client/components/FlexBetween/FlexBetween.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/Graph/Graph.tsx":
/*!*******************************************!*\
  !*** ./client/components/Graph/Graph.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./client/services/api.ts");
/* harmony import */ var _GraphNetwork__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GraphNetwork */ "./client/components/Graph/GraphNetwork.tsx");
/* harmony import */ var _Graph_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Graph.module.scss */ "./client/components/Graph/Graph.module.scss");
/* harmony import */ var _graph_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./graph.scss */ "./client/components/Graph/graph.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



// import './graph.scss';





/**
 * Graph component
 * @returns ReactNode
 */

/* export */

var Graph = function Graph() {
  var muiTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var _metricsApi$endpoints = _services_api__WEBPACK_IMPORTED_MODULE_1__.metricsApi.endpoints.getClusterInfo.useQueryState(undefined, {}),
    data = _metricsApi$endpoints.data,
    isSuccess = _metricsApi$endpoints.isSuccess;
  console.log('Returned Data', data);
  var draggableContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var graphData = {};
  if (isSuccess && data && data.nodes) {
    console.log('data', data);
    //! TEMPORARY, PASS IN REAL NAMESPACE WHEN AVAILABLE
    graphData.nodes = [{
      id: 'Cluster',
      label: 'Cluster',
      height: 1.5,
      size: 40,
      color: 'green',
      type: 'cluster'
    }];
    graphData.links = [];
    for (var namespace in data.namespaces) {
      graphData.nodes.push({
        id: namespace,
        label: namespace,
        height: 0,
        size: 30,
        color: 'orange',
        type: 'namespace'
      });
      graphData.links.push({
        source: namespace,
        target: 'Cluster',
        distance: 50
      });
    }
    var _loop = function _loop(service) {
      graphData.nodes.push({
        id: service,
        label: service,
        height: 0,
        size: 20,
        color: 'blue',
        type: 'service'
      });
      if (service !== 'kubernetes') {
        data.serviceToPodsMapping[service].forEach(function (pod) {
          graphData.links.push({
            source: service,
            target: pod,
            distance: 125
          });
        });
      }
    };
    for (var service in data.serviceToPodsMapping) {
      _loop(service);
    }
    data.pods.forEach(function (pod) {
      graphData.nodes.push({
        id: pod.id,
        nodeId: pod.nodeId,
        height: 0,
        size: 15,
        color: 'cyan',
        type: 'pod'
      });
      graphData.links.push({
        source: pod.id,
        target: pod.namespace,
        distance: 100
      });
    });
    data.containers.forEach(function (container, index) {
      graphData.nodes.push({
        id: "".concat(container.name, "_").concat(index),
        label: container.name,
        height: 0,
        size: 10,
        color: 'yellow',
        image: container.image,
        type: 'container'
      });
      graphData.links.push({
        source: "".concat(container.name, "_").concat(index),
        target: container.podId,
        distance: 100
      });
    });
  }
  console.log('GraphData', graphData);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
    ref: draggableContainer,
    className: "graph ".concat(muiTheme.palette.mode),
    children: data && isSuccess && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_GraphNetwork__WEBPACK_IMPORTED_MODULE_2__["default"], {
      data: graphData,
      lengthOfData: data.nodes.length + data.pods.length + data.containers.length,
      draggableContainer: draggableContainer
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Graph);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/Graph/GraphNetwork.tsx":
/*!**************************************************!*\
  !*** ./client/components/Graph/GraphNetwork.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Controls: () => (/* binding */ Controls),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _nivo_network__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nivo/network */ "./node_modules/@nivo/network/dist/nivo-network.es.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Snackbar/Snackbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Alert/Alert.js");
/* harmony import */ var react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-zoom-pan-pinch */ "./node_modules/react-zoom-pan-pinch/dist/index.esm.js");
/* harmony import */ var _styles_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.css */ "./client/components/Graph/styles.module.css");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }








var Controls = function Controls(_ref) {
  var zoomIn = _ref.zoomIn,
    zoomOut = _ref.zoomOut,
    resetTransform = _ref.resetTransform,
    centerView = _ref.centerView;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].controlPanel,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].controlBtn,
      onClick: function onClick() {
        return zoomIn();
      },
      children: "Zoom In +"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].controlBtn,
      onClick: function onClick() {
        return zoomOut();
      },
      children: "Zoom Out -"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].controlBtn,
      onClick: function onClick() {
        return resetTransform();
      },
      children: "Reset"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
      type: "button",
      className: _styles_module_css__WEBPACK_IMPORTED_MODULE_4__["default"].controlBtn,
      onClick: function onClick() {
        return centerView();
      },
      children: "Center"
    })]
  });
};
var GraphResponsiveNetwork = function GraphResponsiveNetwork(_ref2) {
  var data = _ref2.data,
    lengthOfData = _ref2.lengthOfData,
    draggableContainer = _ref2.draggableContainer;
  // const {instance, zoomIn, zoomOut, ...rest} = useControls();
  var muiTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"])();
  var containerRef = draggableContainer;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];

  // Calculate the height dynamically based on the length of data
  var calculatedHeight = lengthOfData * 10;
  var calculatedWidth = lengthOfData * 10;
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    // Scroll to the center of the container after rendering
    if (containerRef.current) {
      var containerHeight = containerRef.current.clientHeight;
      var scrollOffset = (calculatedHeight - containerHeight) / 2;
      containerRef.current.scrollTop = scrollOffset;
      var containerWidth = containerRef.current.clientWidth;
      var scrollOffsetWidth = (calculatedHeight - containerWidth) / 2;
      containerRef.current.scrollLeft = scrollOffsetWidth;
    }
  }, [calculatedHeight]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__.TransformWrapper, {
    initialScale: 1,
    initialPositionX: 0,
    initialPositionY: 0,
    wheel: {
      step: 100
    },
    centerOnInit: true,
    children: function children() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_zoom_pan_pinch__WEBPACK_IMPORTED_MODULE_3__.TransformComponent, {
        wrapperStyle: {
          width: '100%',
          height: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          style: {
            height: "calc(100vh + ".concat(calculatedHeight, "px)"),
            width: "calc(100vw + ".concat(calculatedWidth, "px)"),
            position: 'relative',
            zIndex: 999
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_nivo_network__WEBPACK_IMPORTED_MODULE_2__.ResponsiveNetworkCanvas, {
            data: data,
            margin: {
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            },
            linkDistance: function linkDistance(e) {
              return e.distance;
            },
            centeringStrength: 1,
            repulsivity: 100,
            nodeSize: function nodeSize(n) {
              return n.size;
            },
            activeNodeSize: function activeNodeSize(n) {
              return n.size * 2;
            },
            nodeColor: function nodeColor(e) {
              return e.color;
            },
            nodeBorderWidth: 5,
            nodeBorderColor: {
              from: 'color',
              modifiers: [['darker', 0.8]]
            },
            distanceMin: 20,
            linkThickness: function linkThickness(n) {
              return 2 + 2 * n.target.data.height;
            },
            pixelRatio: 2,
            linkColor: function linkColor(n) {
              return n.source.data.type === 'namespace' ? 'green' : n.source.data.type === 'service' ? 'blue' : n.source.data.type === 'pod' ? 'orange' : n.source.data.type === 'container' ? 'cyan' : muiTheme.palette.mode === 'dark' ? 'white' : 'black';
            },
            motionConfig: "wobbly",
            nodeTooltip: function nodeTooltip(e) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
                style: {
                  border: "2px solid ".concat(muiTheme.palette.primary.main),
                  padding: '10px',
                  borderRadius: '20px',
                  color: muiTheme.palette.background["default"],
                  backgroundColor: muiTheme.palette.background.inverted,
                  textAlign: 'center'
                },
                children: ["ID: ", e.node.data.label || e.node.id, " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), "Type: ", e.node.data.type.toUpperCase(), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("span", {
                  style: {
                    color: muiTheme.palette.primary.main
                  },
                  children: "CLICK TO COPY ID"
                })]
              });
            },
            onClick: function onClick(n) {
              console.log(n);
              navigator.clipboard.writeText(n.id || n.data.id || n.data.label || '');
              setOpen(true);
            }
          }), /*#__PURE__*/(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            open: open,
            onClose: function onClose() {
              return setOpen(false);
            },
            autoHideDuration: 5000,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
              severity: "success",
              variant: "filled",
              sx: {
                color: 'white'
              },
              children: "Copied to clipboard!"
            })
          }), document.body)]
        })
      });
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GraphResponsiveNetwork);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/Graph/index.ts":
/*!******************************************!*\
  !*** ./client/components/Graph/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Graph: () => (/* reexport safe */ _Graph__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Graph */ "./client/components/Graph/Graph.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/Header/Header.tsx":
/*!*********************************************!*\
  !*** ./client/components/Header/Header.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




var Header = function Header(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "h2",
      color: theme.palette.primary.main,
      fontWeight: "bold",
      sx: {
        m: '5px'
      },
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      variant: "h5",
      color: theme.palette.primary.main,
      children: subtitle
    })]
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/Header/index.ts":
/*!*******************************************!*\
  !*** ./client/components/Header/index.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./client/components/Header/Header.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/StatBox/StatBox.tsx":
/*!***********************************************!*\
  !*** ./client/components/StatBox/StatBox.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatBox: () => (/* binding */ StatBox)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index */ "./client/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");





var StatBox = function StatBox(_ref) {
  var title = _ref.title,
    _ref$value = _ref.value,
    value = _ref$value === void 0 ? '-' : _ref$value;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: {
      gridColumn: 'span 1',
      gridRow: 'span 10',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      p: '1.25rem 1rem',
      flex: '1 1 100%',
      backgroundColor: "".concat(theme.palette.background.alt),
      borderRadius: '0.45rem',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_index__WEBPACK_IMPORTED_MODULE_0__.FlexBetween, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h5",
        sx: {
          color: theme.palette.typography.main
        },
        children: title
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      variant: "h2",
      fontWeight: "600",
      sx: {
        color: theme.palette.typography.main
      },
      children: value
    })]
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/StatBox/index.ts":
/*!********************************************!*\
  !*** ./client/components/StatBox/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StatBox: () => (/* reexport safe */ _StatBox__WEBPACK_IMPORTED_MODULE_0__.StatBox)
/* harmony export */ });
/* harmony import */ var _StatBox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatBox */ "./client/components/StatBox/StatBox.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/SwitchButton/SwitchButton.tsx":
/*!*********************************************************!*\
  !*** ./client/components/SwitchButton/SwitchButton.tsx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitchButton: () => (/* binding */ SwitchButton)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _SwitchButton_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchButton.scss */ "./client/components/SwitchButton/SwitchButton.scss");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






/**
 * A basic switch button that uses the current theme for styling, and toggles the current global theme between light and dark modes
 * @param checked
 * @param onChange
 * @returns ReactNode
 */
var SwitchButton = function SwitchButton(_ref) {
  var onChange = _ref.onChange;
  var muiTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: 'switchContainer',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: 'switchButton',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        className: 'modeLabel',
        htmlFor: "lightTheme",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "radio",
          id: "lightTheme",
          className: 'brightnessModeLight' + ' ' + 'brightnessMode',
          value: "light",
          checked: muiTheme.palette.mode === 'light',
          onChange: onChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaSun, {
          className: 'sunIcon'
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("label", {
        className: 'modeLabel',
        htmlFor: "darkTheme",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("input", {
          type: "radio",
          id: "darkTheme",
          className: 'brightnessModeLight' + ' ' + 'brightnessMode',
          value: "dark",
          checked: muiTheme.palette.mode === 'dark',
          onChange: onChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__.FaMoon, {
          className: 'moonIcon'
        })]
      })]
    })
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/SwitchButton/index.ts":
/*!*************************************************!*\
  !*** ./client/components/SwitchButton/index.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SwitchButton: () => (/* reexport safe */ _SwitchButton__WEBPACK_IMPORTED_MODULE_0__.SwitchButton)
/* harmony export */ });
/* harmony import */ var _SwitchButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SwitchButton */ "./client/components/SwitchButton/SwitchButton.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/ThemeContainer/ThemeContainer.tsx":
/*!*************************************************************!*\
  !*** ./client/components/ThemeContainer/ThemeContainer.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeContainer: () => (/* binding */ ThemeContainer)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */

var ThemeContainer = function ThemeContainer(_ref) {
  var children = _ref.children,
    IDOverride = _ref.IDOverride,
    style = _ref.style;
  var muiTheme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: style,
    id: IDOverride || undefined,
    className: "styledContainer ".concat(muiTheme.palette.mode),
    children: children
  });
};

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/ThemeContainer/index.ts":
/*!***************************************************!*\
  !*** ./client/components/ThemeContainer/index.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeContainer: () => (/* reexport safe */ _ThemeContainer__WEBPACK_IMPORTED_MODULE_0__.ThemeContainer)
/* harmony export */ });
/* harmony import */ var _ThemeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeContainer */ "./client/components/ThemeContainer/ThemeContainer.tsx");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/components/index.ts":
/*!************************************!*\
  !*** ./client/components/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppBreadcrumb: () => (/* reexport safe */ _AppBreadcrumb__WEBPACK_IMPORTED_MODULE_8__.AppBreadcrumb),
/* harmony export */   AppContent: () => (/* reexport safe */ _AppContent__WEBPACK_IMPORTED_MODULE_11__.AppContent),
/* harmony export */   AppFooter: () => (/* reexport safe */ _AppFooter__WEBPACK_IMPORTED_MODULE_9__.AppFooter),
/* harmony export */   AppHeader: () => (/* reexport safe */ _AppHeader__WEBPACK_IMPORTED_MODULE_7__.AppHeader),
/* harmony export */   AppSidebar: () => (/* reexport safe */ _AppSidebar__WEBPACK_IMPORTED_MODULE_10__.AppSidebar),
/* harmony export */   CollapsiblePanel: () => (/* reexport safe */ _CollapsiblePanel__WEBPACK_IMPORTED_MODULE_6__.CollapsiblePanel),
/* harmony export */   DataGridWithHeader: () => (/* reexport safe */ _DataGridWithHeader__WEBPACK_IMPORTED_MODULE_12__.DataGridWithHeader),
/* harmony export */   FlexBetween: () => (/* reexport safe */ _FlexBetween__WEBPACK_IMPORTED_MODULE_4__.FlexBetween),
/* harmony export */   Graph: () => (/* reexport safe */ _Graph__WEBPACK_IMPORTED_MODULE_1__.Graph),
/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_3__.Header),
/* harmony export */   StatBox: () => (/* reexport safe */ _StatBox__WEBPACK_IMPORTED_MODULE_5__.StatBox),
/* harmony export */   SwitchButton: () => (/* reexport safe */ _SwitchButton__WEBPACK_IMPORTED_MODULE_2__.SwitchButton),
/* harmony export */   ThemeContainer: () => (/* reexport safe */ _ThemeContainer__WEBPACK_IMPORTED_MODULE_0__.ThemeContainer)
/* harmony export */ });
/* harmony import */ var _ThemeContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThemeContainer */ "./client/components/ThemeContainer/index.ts");
/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph */ "./client/components/Graph/index.ts");
/* harmony import */ var _SwitchButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchButton */ "./client/components/SwitchButton/index.ts");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Header */ "./client/components/Header/index.ts");
/* harmony import */ var _FlexBetween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FlexBetween */ "./client/components/FlexBetween/index.ts");
/* harmony import */ var _StatBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./StatBox */ "./client/components/StatBox/index.ts");
/* harmony import */ var _CollapsiblePanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CollapsiblePanel */ "./client/components/CollapsiblePanel/index.ts");
/* harmony import */ var _AppHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppHeader */ "./client/components/AppHeader/index.ts");
/* harmony import */ var _AppBreadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./AppBreadcrumb */ "./client/components/AppBreadcrumb/index.ts");
/* harmony import */ var _AppFooter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./AppFooter */ "./client/components/AppFooter/index.ts");
/* harmony import */ var _AppSidebar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./AppSidebar */ "./client/components/AppSidebar/index.ts");
/* harmony import */ var _AppContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AppContent */ "./client/components/AppContent/index.ts");
/* harmony import */ var _DataGridWithHeader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./DataGridWithHeader */ "./client/components/DataGridWithHeader/index.ts");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");




// export { Notification,NotificationDisplay } from './Notification';











const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/layout/DefaultLayout.tsx":
/*!*****************************************!*\
  !*** ./client/layout/DefaultLayout.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/index */ "./client/components/index.ts");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/api */ "./client/services/api.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");



// ! TEMPORARY IMPORT



var DefaultLayout = function DefaultLayout() {
  // ! TEMPORARY
  (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.useGetClusterInfoQuery)(undefined, {
    pollingInterval: 25000
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_index__WEBPACK_IMPORTED_MODULE_0__.AppSidebar, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "wrapper d-flex flex-column min-vh-100",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_index__WEBPACK_IMPORTED_MODULE_0__.AppHeader, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "body flex-grow-1 px-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_index__WEBPACK_IMPORTED_MODULE_0__.AppContent, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_index__WEBPACK_IMPORTED_MODULE_0__.AppFooter, {})]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultLayout);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./client/routes.tsx":
/*!***************************!*\
  !*** ./client/routes.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_coreui_icons_dist_esm_brand_cib-facebook_js-node_modules_coreui_icons_di-5939ac"), __webpack_require__.e("client_views_dashboard_Dashboard_js")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/dashboard/Dashboard */ "./client/views/dashboard/Dashboard.js"));
});
var NodeView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "client_pages_NodeView_NodeView_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/NodeView/NodeView */ "./client/pages/NodeView/NodeView.tsx"));
});
var ListView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "client_pages_ListViewPage_ListViewPage_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/ListViewPage/ListViewPage */ "./client/pages/ListViewPage/ListViewPage.tsx"));
});
var NetworkView = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./components/Graph/Graph */ "./client/components/Graph/Graph.tsx"));
});

// example
//   { path: '/theme', name: 'Theme', element: Colors, exact: true },

var routes = [{
  path: "/*",
  /*exact: true ,*/name: "Home"
}, {
  path: "/dashboard",
  name: "Dashboard",
  element: Dashboard
}, {
  path: "/node-view",
  name: "NodeView",
  element: NodeView
}, {
  path: "/list-view",
  name: "ListView",
  element: ListView
}, {
  path: "/network-view",
  name: "NetworkView",
  element: NetworkView
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

const $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
const $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (false) {}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/Graph.module.scss":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/Graph.module.scss ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes SseB7DFgSDLiyxtUuga3 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes ynDirUgZKxS_3NHoPer9 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes Qv0fcARDGBzEjFpjRGIJ {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes fuBmDgSWeojv8RbM9OTs {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3.5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes bxqMh2CqQgbS3a2tKtbo {
  0% {
    box-shadow: 0 0 0px #287aff;
  }
  50% {
    box-shadow: 0 0 8px #287aff;
    text-shadow: 0px 0px 10px #287aff;
  }
  100% {
    box-shadow: 0 0 0px #287aff;
  }
}
@keyframes ZlEnB6uPobwyS2IqfOeA {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.hwZIsWajkpHuqtprB25D {
  color: #f4a227;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.NUscMKI7vg0XiQJX8SKF {
  color: #24b0df;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.LosvbF0LqwCNOrC5k0US {
  color: #db3523;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.quXgX4iu1pOUrFAfG1RH {
  color: #ededed;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.jrh3FSN6yQCDslZwwbwa {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-radius: 0px;
  transition: all 0.5s ease-in-out;
  background-size: 1.6em 1.6em;
  background-attachment: local;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em), linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em);
}
.t9xOgJLxo3JbsaNNX3gm {
  position: relative;
  width: fit-content;
  height: fit-content;
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(0.2rem);
  border-radius: 0 0 20px 20px;
  animation: ynDirUgZKxS_3NHoPer9 1s ease-in-out;
  padding: 1rem;
  background-size: 1.6em 1.6em;
  background-attachment: local;
}
.t9xOgJLxo3JbsaNNX3gm.VmZ8dIOzc1kjCe4NYA5C {
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5) 0.1em, transparent 0.1em), linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0.1em, transparent 0.1em);
}
.t9xOgJLxo3JbsaNNX3gm.jPLZEyoKRB7yjSniIAvy {
  border: 1px solid rgb(255, 255, 255);
  border-top: none;
}
.FMsY0mkdYJSzj3TmUzmV {
  perspective: 1000px;
}
.rdL9BwQs7WktoAk1lFxL {
  transform-origin: center center;
  position: relative;
  height: fit-content;
  width: fit-content;
  transition: all 0.5s ease-in-out;
  scale: 1;
}
.ussKNe2kotWrT1YcGWyM {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  transition: all 0.5s ease-in-out;
  transform-origin: 0% 0%;
  overflow: hidden;
  scale: 1;
}
@keyframes GIyov2gwcGg12oRrHWJE {
  0% {
    transform: translate(-50%, 0px);
  }
  50% {
    transform: translate(-50%, 8px);
  }
  100% {
    transform: translate(-50%, 0px);
  }
}
.ltGLohiuC2mmSmivI3y6 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 4rem;
  border-radius: 20px 20px 0 0;
  color: #ededed;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  animation: ynDirUgZKxS_3NHoPer9 1s ease-in-out;
  backdrop-filter: blur(0.2rem);
  font-size: 3rem;
  text-decoration: underline;
}
.ltGLohiuC2mmSmivI3y6 .WiDudkWILo6Vm5PFGCQZ {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  animation: GIyov2gwcGg12oRrHWJE 4s infinite ease-in-out;
}
.ltGLohiuC2mmSmivI3y6.VmZ8dIOzc1kjCe4NYA5C {
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.ltGLohiuC2mmSmivI3y6.jPLZEyoKRB7yjSniIAvy {
  background-color: rgba(255, 255, 255, 0);
  color: black;
  border: 1px solid rgb(255, 255, 255);
}`, "",{"version":3,"sources":["webpack://./client/variables.scss","webpack://./client/components/Graph/Graph.module.scss"],"names":[],"mappings":"AAmDA;EACE;IACE,0BAAA;EClDF;EDoDA;IACE,2BAAA;EClDF;EDoDA;IACE,0BAAA;EClDF;AACF;ADqDA;EACE;IACE,UAAA;ECnDF;EDqDA;IACE,UAAA;ECnDF;AACF;ADsDA;EACE;IACE,UAAA;ECpDF;EDsDA;IACE,UAAA;ECpDF;AACF;ADuDA;EACE;IACE,0BAAA;ECrDF;EDuDA;IACE,6BAAA;ECrDF;EDuDA;IACE,0BAAA;ECrDF;AACF;ADwDA;EACE;IACE,2BAAA;ECtDF;EDwDA;IACE,2BAAA;IACA,iCAAA;ECtDF;EDwDA;IACE,2BAAA;ECtDF;AACF;ADyDA;EACE;IACE,4BAAA;ECvDF;ED0DA;IACE,yBAAA;ECxDF;AACF;ADgEA;EACE,cAJc;EAKd,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAZY;EAaZ,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAjBW;EAkBX,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cArBa;EAsBb,8BAAA;EACA,eAAA;AC9DF;AA9EA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,gCAAA;EACA,4BAAA;EACA,4BAAA;EACA,mJAAA;AAiFF;AA7EA;EACE,kBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gCAAA;EACA,6BAAA;EACA,4BAAA;EACA,8CAAA;EACA,aAAA;EACA,4BAAA;EACA,4BAAA;AAgFF;AA/EE;EAEE,oCAAA;EACA,gBAAA;EACA,+JAAA;AAgFJ;AA5EE;EAEE,oCAAA;EACA,gBAAA;AA6EJ;AAzEA;EACE,mBAAA;AA4EF;AAzEA;EACE,+BAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gCAAA;EACA,QAAA;AA4EF;AAzEA;EDrBE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;ECoBA,kBAAA;EACA,iBAAA;EACA,gCAAA;EACA,uBAAA;EACA,gBAAA;EACA,QAAA;AA+EF;AA5EA;EACE;IACE,+BAAA;EA+EF;EA5EA;IACE,+BAAA;EA8EF;EA3EA;IACE,+BAAA;EA6EF;AACF;AA1EA;EDpDE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;ECmDA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,cAAA;EACA,aAAA;EACA,gCAAA;EACA,8CAAA;EACA,6BAAA;EACA,eAAA;EACA,0BAAA;AA+EF;AA7EE;EACE,kBAAA;EACA,SAAA;EACA,gCAAA;EACA,6BAAA;EACA,uDAAA;AA+EJ;AA5EE;EACE,oCAAA;EACA,YAAA;EACA,oCAAA;AA8EJ;AA3EE;EACE,wCAAA;EACA,YAAA;EACA,oCAAA;AA6EJ","sourcesContent":["$background-color-dark: #222222;\n$background-color-light: #d0d0d0;\n$base-blue: #154084;\n$base-red: #9d2719;\n$base-yellow: #d7b418;\n$base-orange: #f4a227;\n$accent-blue: #188fff;\n$accent-red: #ff4d4d;\n$accent-yellow: #f5d300;\n$accent-orange: #f4a227;\n$dark-border: rgba(0, 0, 0, 0.2);\n$light-border: rgba(255, 255, 255, 1);\n$dark-text: #ededed;\n$light-text: #222222;\n$graph-blue: #188fff;\n$graph-yellow: #f5d300;\n$diamond-blue: rgb(200, 230, 255);\n$unhealthy-pod: #ad4a39;\n$healthy-pod: #42a62b;\n$warning-pod: #e8c529;\n$pronounced-shadow: 4px 4px 1px 0 rgba(0, 0, 0, 0.5);\n$healthyGradient: linear-gradient(-45deg, #52caee, #3c53e7, #23a6d5, #23d5ab);\n$unhealthyGradient: linear-gradient(-45deg, #e65252, #e73c3c, #d52323, #ab2323);\n$warningGradient: linear-gradient(-45deg, #e6e652, #e7e73c, #d5d523, #abab23);\n\n@mixin flex-horizontal {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flex-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin grid-base {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-gap: 1rem;\n}\n\n@keyframes hover-up-down {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-3px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes opacity-reverse {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes hover-up-down-3D {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-3.5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes navLinkBlueShadow {\n  0% {\n    box-shadow: 0 0 0px #287aff;\n  }\n  50% {\n    box-shadow: 0 0 8px #287aff;\n    text-shadow: 0px 0px 10px #287aff;\n  }\n  100% {\n    box-shadow: 0 0 0px #287aff;\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-100%);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n$inline-blue: #24b0df;\n$inline-red: #db3523;\n$inline-orange: #f4a227;\n$inline-white: #ededed;\n\n.inlineOrangeText {\n  color: $inline-orange;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineBlueText {\n  color: $inline-blue;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineRedText {\n  color: $inline-red;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineWhiteText {\n  color: $inline-white;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n// Source mixin\n// @mixin make-container($padding-x: $container-padding-x) {\n//     width: 100%;\n//     padding-right: $padding-x;\n//     padding-left: $padding-x;\n//     margin-right: auto;\n//     margin-left: auto;\n//   }\n\n//   .custom-container {\n    \n//   }","@import '../../variables.scss';\n\n.draggableContainer {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  border-radius: 0px;\n  transition: all 0.5s ease-in-out;\n  background-size: 1.6em 1.6em;\n  background-attachment: local;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em),\n    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em);\n}\n\n.graph {\n  position: relative;\n  width: fit-content;\n  height: fit-content;\n  transition: all 0.5s ease-in-out;\n  backdrop-filter: blur(0.2rem);\n  border-radius: 0 0 20px 20px;\n  animation: opacity 1s ease-in-out;\n  padding: 1rem;\n  background-size: 1.6em 1.6em;\n  background-attachment: local;\n  &.dark {\n    // background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid $dark-border;\n    border-top: none;\n    background-image: linear-gradient(rgba(255, 255, 255, 0.5) 0.1em, transparent 0.1em),\n    linear-gradient(90deg, rgba(255, 255, 255, 0.5) 0.1em, transparent 0.1em);\n  }\n\n  &.light {\n    // background-color: rgba(255, 255, 255, 0);\n    border: 1px solid $light-border;\n    border-top: none;\n  }\n}\n\n.row {\n  perspective: 1000px;\n}\n\n.draggableInner {\n  transform-origin: center center;\n  position: relative;\n  height: fit-content;\n  width: fit-content;\n  transition: all 0.5s ease-in-out;\n  scale: 1;\n}\n\n.draggableContent {\n  @include flex-vertical;\n  position: relative;\n  min-height: 100vh;\n  transition: all 0.5s ease-in-out;\n  transform-origin: 0% 0%;\n  overflow: hidden;\n  scale: 1;\n}\n\n@keyframes title-hover {\n  0% {\n    transform: translate(-50%, 0px);\n  }\n\n  50% {\n    transform: translate(-50%, 8px);\n  }\n\n  100% {\n    transform: translate(-50%, 0px);\n  }\n}\n\n.node-graph-title-bar {\n  @include flex-horizontal;\n  position: relative;\n  width: 100%;\n  height: 4rem;\n  border-radius: 20px 20px 0 0;\n  color: #ededed;\n  padding: 1rem;\n  transition: all 0.2s ease-in-out;\n  animation: opacity 1s ease-in-out;\n  backdrop-filter: blur(0.2rem);\n  font-size: 3rem;\n  text-decoration: underline;\n\n  & .node-graph-title {\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: transparent;\n    animation: title-hover 4s infinite ease-in-out;\n  }\n\n  &.dark {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: white;\n    border: 1px solid $dark-border;\n  }\n\n  &.light {\n    background-color: rgba(255, 255, 255, 0);\n    color: black;\n    border: 1px solid $light-border;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"inlineOrangeText": `hwZIsWajkpHuqtprB25D`,
	"inlineBlueText": `NUscMKI7vg0XiQJX8SKF`,
	"inlineRedText": `LosvbF0LqwCNOrC5k0US`,
	"inlineWhiteText": `quXgX4iu1pOUrFAfG1RH`,
	"draggableContainer": `jrh3FSN6yQCDslZwwbwa`,
	"graph": `t9xOgJLxo3JbsaNNX3gm`,
	"opacity": `ynDirUgZKxS_3NHoPer9`,
	"dark": `VmZ8dIOzc1kjCe4NYA5C`,
	"light": `jPLZEyoKRB7yjSniIAvy`,
	"row": `FMsY0mkdYJSzj3TmUzmV`,
	"draggableInner": `rdL9BwQs7WktoAk1lFxL`,
	"draggableContent": `ussKNe2kotWrT1YcGWyM`,
	"node-graph-title-bar": `ltGLohiuC2mmSmivI3y6`,
	"node-graph-title": `WiDudkWILo6Vm5PFGCQZ`,
	"title-hover": `GIyov2gwcGg12oRrHWJE`,
	"hover-up-down": `SseB7DFgSDLiyxtUuga3`,
	"opacity-reverse": `Qv0fcARDGBzEjFpjRGIJ`,
	"hover-up-down-3D": `fuBmDgSWeojv8RbM9OTs`,
	"navLinkBlueShadow": `bxqMh2CqQgbS3a2tKtbo`,
	"slide-in-left": `ZlEnB6uPobwyS2IqfOeA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/graph.scss":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/graph.scss ***!
  \*******************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes hover-up-down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity-reverse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes hover-up-down-3D {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3.5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes navLinkBlueShadow {
  0% {
    box-shadow: 0 0 0px #287aff;
  }
  50% {
    box-shadow: 0 0 8px #287aff;
    text-shadow: 0px 0px 10px #287aff;
  }
  100% {
    box-shadow: 0 0 0px #287aff;
  }
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.inlineOrangeText {
  color: #f4a227;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.inlineBlueText {
  color: #24b0df;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.inlineRedText {
  color: #db3523;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.inlineWhiteText {
  color: #ededed;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.draggableContainer {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  border-radius: 0px;
  transition: all 0.5s ease-in-out;
  background-size: 1.6em 1.6em;
  background-attachment: local;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em), linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em);
}
.graph {
  position: relative;
  display: flex;
  height: 100vh;
  transition: all 0.5s ease-in-out;
  backdrop-filter: blur(0.2rem);
  border-radius: 0 0 20px 20px;
  animation: opacity 1s ease-in-out;
  background-size: 1.5em 1.5em;
  background-attachment: local;
  overflow: hidden;
  padding: 0;
  cursor: grab;
}
.graph:active {
  cursor: grabbing;
}
.graph.dark {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-top: none;
  background-image: linear-gradient(rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em);
}
.graph.light {
  background-color: rgba(255, 255, 255, 0);
  border: 1px solid rgb(255, 255, 255);
  border-top: none;
  background-image: linear-gradient(rgba(0, 0, 0, 0.4) 0.1em, transparent 0.1em), linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0.1em, transparent 0.1em);
}
.row {
  perspective: 1000px;
}
.draggableInner {
  transform-origin: center center;
  position: relative;
  height: fit-content;
  width: fit-content;
  transition: all 0.5s ease-in-out;
  scale: 1;
}
.draggableContent {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
  transition: all 0.5s ease-in-out;
  transform-origin: 0% 0%;
  overflow: hidden;
  scale: 1;
}
@keyframes title-hover {
  0% {
    transform: translate(-50%, 0px);
  }
  50% {
    transform: translate(-50%, 8px);
  }
  100% {
    transform: translate(-50%, 0px);
  }
}
.node-graph-title-bar {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 4rem;
  border-radius: 20px 20px 0 0;
  color: #ededed;
  padding: 1rem;
  transition: all 0.2s ease-in-out;
  animation: opacity 1s ease-in-out;
  backdrop-filter: blur(0.2rem);
  font-size: 3rem;
  text-decoration: underline;
}
.node-graph-title-bar .node-graph-title {
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  animation: title-hover 4s infinite ease-in-out;
}
.node-graph-title-bar.dark {
  background-color: rgba(0, 0, 0, 0.2);
  color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.node-graph-title-bar.light {
  background-color: rgba(255, 255, 255, 0);
  color: black;
  border: 1px solid rgb(255, 255, 255);
}`, "",{"version":3,"sources":["webpack://./client/variables.scss","webpack://./client/components/Graph/graph.scss"],"names":[],"mappings":"AAmDA;EACE;IACE,0BAAA;EClDF;EDoDA;IACE,2BAAA;EClDF;EDoDA;IACE,0BAAA;EClDF;AACF;ADqDA;EACE;IACE,UAAA;ECnDF;EDqDA;IACE,UAAA;ECnDF;AACF;ADsDA;EACE;IACE,UAAA;ECpDF;EDsDA;IACE,UAAA;ECpDF;AACF;ADuDA;EACE;IACE,0BAAA;ECrDF;EDuDA;IACE,6BAAA;ECrDF;EDuDA;IACE,0BAAA;ECrDF;AACF;ADwDA;EACE;IACE,2BAAA;ECtDF;EDwDA;IACE,2BAAA;IACA,iCAAA;ECtDF;EDwDA;IACE,2BAAA;ECtDF;AACF;ADyDA;EACE;IACE,4BAAA;ECvDF;ED0DA;IACE,yBAAA;ECxDF;AACF;ADgEA;EACE,cAJc;EAKd,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAZY;EAaZ,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAjBW;EAkBX,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cArBa;EAsBb,8BAAA;EACA,eAAA;AC9DF;AA9EA;EACE,kBAAA;EACA,YAAA;EACA,aAAA;EACA,gBAAA;EACA,kBAAA;EACA,gCAAA;EACA,4BAAA;EACA,4BAAA;EACA,mJAAA;AAiFF;AA7EA;EACE,kBAAA;EACA,aAAA;EAKA,aAAA;EACA,gCAAA;EACA,6BAAA;EACA,4BAAA;EACA,iCAAA;EACA,4BAAA;EACA,4BAAA;EACA,gBAAA;EACA,UAAA;EACA,YAAA;AA4EF;AA3EE;EACE,gBAAA;AA6EJ;AA3EE;EACE,oCAAA;EACA,oCAAA;EACA,gBAAA;EACA,+JAAA;AA6EJ;AAtEE;EACE,wCAAA;EACA,oCAAA;EACA,gBAAA;EACA,mJAAA;AAwEJ;AAhEA;EACE,mBAAA;AAmEF;AAhEA;EACE,+BAAA;EACA,kBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gCAAA;EACA,QAAA;AAmEF;AAhEA;EDtCE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;ECqCA,kBAAA;EACA,iBAAA;EACA,gCAAA;EACA,uBAAA;EACA,gBAAA;EACA,QAAA;AAsEF;AAnEA;EACE;IACE,+BAAA;EAsEF;EAnEA;IACE,+BAAA;EAqEF;EAlEA;IACE,+BAAA;EAoEF;AACF;AAjEA;EDrEE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;ECoEA,kBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,cAAA;EACA,aAAA;EACA,gCAAA;EACA,iCAAA;EACA,6BAAA;EACA,eAAA;EACA,0BAAA;AAsEF;AApEE;EACE,kBAAA;EACA,SAAA;EACA,gCAAA;EACA,6BAAA;EACA,8CAAA;AAsEJ;AAnEE;EACE,oCAAA;EACA,YAAA;EACA,oCAAA;AAqEJ;AAlEE;EACE,wCAAA;EACA,YAAA;EACA,oCAAA;AAoEJ","sourcesContent":["$background-color-dark: #222222;\n$background-color-light: #d0d0d0;\n$base-blue: #154084;\n$base-red: #9d2719;\n$base-yellow: #d7b418;\n$base-orange: #f4a227;\n$accent-blue: #188fff;\n$accent-red: #ff4d4d;\n$accent-yellow: #f5d300;\n$accent-orange: #f4a227;\n$dark-border: rgba(0, 0, 0, 0.2);\n$light-border: rgba(255, 255, 255, 1);\n$dark-text: #ededed;\n$light-text: #222222;\n$graph-blue: #188fff;\n$graph-yellow: #f5d300;\n$diamond-blue: rgb(200, 230, 255);\n$unhealthy-pod: #ad4a39;\n$healthy-pod: #42a62b;\n$warning-pod: #e8c529;\n$pronounced-shadow: 4px 4px 1px 0 rgba(0, 0, 0, 0.5);\n$healthyGradient: linear-gradient(-45deg, #52caee, #3c53e7, #23a6d5, #23d5ab);\n$unhealthyGradient: linear-gradient(-45deg, #e65252, #e73c3c, #d52323, #ab2323);\n$warningGradient: linear-gradient(-45deg, #e6e652, #e7e73c, #d5d523, #abab23);\n\n@mixin flex-horizontal {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flex-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin grid-base {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-gap: 1rem;\n}\n\n@keyframes hover-up-down {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-3px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes opacity-reverse {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes hover-up-down-3D {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-3.5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes navLinkBlueShadow {\n  0% {\n    box-shadow: 0 0 0px #287aff;\n  }\n  50% {\n    box-shadow: 0 0 8px #287aff;\n    text-shadow: 0px 0px 10px #287aff;\n  }\n  100% {\n    box-shadow: 0 0 0px #287aff;\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-100%);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n$inline-blue: #24b0df;\n$inline-red: #db3523;\n$inline-orange: #f4a227;\n$inline-white: #ededed;\n\n.inlineOrangeText {\n  color: $inline-orange;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineBlueText {\n  color: $inline-blue;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineRedText {\n  color: $inline-red;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineWhiteText {\n  color: $inline-white;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n// Source mixin\n// @mixin make-container($padding-x: $container-padding-x) {\n//     width: 100%;\n//     padding-right: $padding-x;\n//     padding-left: $padding-x;\n//     margin-right: auto;\n//     margin-left: auto;\n//   }\n\n//   .custom-container {\n    \n//   }","@import '../../variables.scss';\n\n.draggableContainer {\n  position: relative;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n  border-radius: 0px;\n  transition: all 0.5s ease-in-out;\n  background-size: 1.6em 1.6em;\n  background-attachment: local;\n  background-image: linear-gradient(rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em),\n    linear-gradient(90deg, rgba(0, 0, 0, 0.5) 0.1em, transparent 0.1em);\n}\n\n.graph {\n  position: relative;\n  display: flex;\n  // justify-content: center;\n  // align-items: center;\n  //   width: 100vw;\n//   width: 100%;\n  height: 100vh;\n  transition: all 0.5s ease-in-out;\n  backdrop-filter: blur(0.2rem);\n  border-radius: 0 0 20px 20px;\n  animation: opacity 1s ease-in-out;\n  background-size: 1.5em 1.5em;\n  background-attachment: local;\n  overflow: hidden;\n  padding: 0;\n  cursor: grab;\n  &:active {\n    cursor: grabbing;\n  }\n  &.dark {\n    background-color: rgba(0, 0, 0, 0.2);\n    border: 1px solid $dark-border;\n    border-top: none;\n    background-image: linear-gradient(\n        rgba(255, 255, 255, 0.1) 0.1em,\n        transparent 0.1em\n      ),\n      linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0.1em, transparent 0.1em);\n  }\n\n  &.light {\n    background-color: rgba(255, 255, 255, 0);\n    border: 1px solid $light-border;\n    border-top: none;\n    background-image: linear-gradient(\n        rgb(0, 0, 0, 0.4) 0.1em,\n        transparent 0.1em\n      ),\n      linear-gradient(90deg, rgba(0, 0, 0, 0.4) 0.1em, transparent 0.1em);\n  }\n}\n\n.row {\n  perspective: 1000px;\n}\n\n.draggableInner {\n  transform-origin: center center;\n  position: relative;\n  height: fit-content;\n  width: fit-content;\n  transition: all 0.5s ease-in-out;\n  scale: 1;\n}\n\n.draggableContent {\n  @include flex-vertical;\n  position: relative;\n  min-height: 100vh;\n  transition: all 0.5s ease-in-out;\n  transform-origin: 0% 0%;\n  overflow: hidden;\n  scale: 1;\n}\n\n@keyframes title-hover {\n  0% {\n    transform: translate(-50%, 0px);\n  }\n\n  50% {\n    transform: translate(-50%, 8px);\n  }\n\n  100% {\n    transform: translate(-50%, 0px);\n  }\n}\n\n.node-graph-title-bar {\n  @include flex-horizontal;\n  position: relative;\n  width: 100%;\n  height: 4rem;\n  border-radius: 20px 20px 0 0;\n  color: #ededed;\n  padding: 1rem;\n  transition: all 0.2s ease-in-out;\n  animation: opacity 1s ease-in-out;\n  backdrop-filter: blur(0.2rem);\n  font-size: 3rem;\n  text-decoration: underline;\n\n  & .node-graph-title {\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: transparent;\n    animation: title-hover 4s infinite ease-in-out;\n  }\n\n  &.dark {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: white;\n    border: 1px solid $dark-border;\n  }\n\n  &.light {\n    background-color: rgba(255, 255, 255, 0);\n    color: black;\n    border: 1px solid $light-border;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/styles.module.css":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/styles.module.css ***!
  \**************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.RxGGuAoCa0tS4Gk8muvO {
  position: absolute;
  z-index: 2;
  transform: translate(10px, 10px);
  max-width: calc(100% - 20px);
}

.kCMtFqFweds4xtasVn2w {
  padding: 6px 12px;
  background: white;
  border: 1px solid grey;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
}

.kCMtFqFweds4xtasVn2w:focus {
  filter: brightness(90%);
}

.kCMtFqFweds4xtasVn2w:hover {
  filter: brightness(120%);
}

.kCMtFqFweds4xtasVn2w:active {
  opacity: 0.9;
}

.VRuoplqqomqWzpmpypQA {
  display: grid;
  grid-template-columns: repeat(100, 1fr);
}`, "",{"version":3,"sources":["webpack://./client/components/Graph/styles.module.css"],"names":[],"mappings":"AAAA;EACI,kBAAA;EACA,UAAA;EACA,gCAAA;EACA,4BAAA;AACJ;;AACE;EACE,iBAAA;EACA,iBAAA;EACA,sBAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;EACA,yBAAA;EACA,gBAAA;EACA,eAAA;AAEJ;;AACE;EACE,uBAAA;AAEJ;;AACE;EACE,wBAAA;AAEJ;;AACE;EACE,YAAA;AAEJ;;AACE;EACE,aAAA;EACA,uCAAA;AAEJ","sourcesContent":[".controlPanel {\n    position: absolute;\n    z-index: 2;\n    transform: translate(10px, 10px);\n    max-width: calc(100% - 20px);\n  }\n  .controlBtn {\n    padding: 6px 12px;\n    background: white;\n    border: 1px solid grey;\n    border-radius: 5px;\n    margin-right: 10px;\n    font-size: 12px;\n    text-transform: uppercase;\n    font-weight: 600;\n    cursor: pointer;\n  }\n  \n  .controlBtn:focus {\n    filter: brightness(90%);\n  }\n  \n  .controlBtn:hover {\n    filter: brightness(120%);\n  }\n  \n  .controlBtn:active {\n    opacity: 0.9;\n  }\n  \n  .grid {\n    display: grid;\n    grid-template-columns: repeat(100, 1fr);\n  }"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"controlPanel": `RxGGuAoCa0tS4Gk8muvO`,
	"controlBtn": `kCMtFqFweds4xtasVn2w`,
	"grid": `VRuoplqqomqWzpmpypQA`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/SwitchButton/SwitchButton.scss":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/SwitchButton/SwitchButton.scss ***!
  \*********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@keyframes hover-up-down {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes opacity-reverse {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@keyframes hover-up-down-3D {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-3.5px);
  }
  100% {
    transform: translateY(0px);
  }
}
@keyframes navLinkBlueShadow {
  0% {
    box-shadow: 0 0 0px #287aff;
  }
  50% {
    box-shadow: 0 0 8px #287aff;
    text-shadow: 0px 0px 10px #287aff;
  }
  100% {
    box-shadow: 0 0 0px #287aff;
  }
}
@keyframes slide-in-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0%);
  }
}
.inlineOrangeText {
  color: #f4a227;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.inlineBlueText {
  color: #24b0df;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.inlineRedText {
  color: #db3523;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.inlineWhiteText {
  color: #ededed;
  text-shadow: 2px 2px 2px black;
  display: inline;
}
.switchContainer {
  position: relative;
  margin: 0.1em;
  border-radius: 20px;
  background-color: #0e2b58;
  padding: 0.2em;
}
.switchContainer::after {
  content: "";
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.05);
  left: 50%;
  top: 0;
}
.switchButton {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.check-box {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.brightnessMode {
  position: absolute;
  appearance: none;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.4s;
}
.brightnessMode:checked + .sunIcon, .brightnessMode:checked + .moonIcon {
  background-color: #236bdc;
  border-radius: 50%;
  padding: 0.1em;
  margin: 0.05em;
}
.sunIcon {
  width: 1.5em;
  height: 1.5em;
  transition: 0.2s ease-in-out;
  pointer-events: none;
}
.moonIcon {
  width: 1.5em;
  height: 1.5em;
  transition: 0.2s ease-in-out;
  pointer-events: none;
}
.modeLabel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 0 0.5em;
}
.slider {
  position: absolute;
  width: 2em;
  height: 2em;
  top: -0.3em;
  left: -0.5em;
  background: transparent;
  transition: 0.4s ease-in-out;
  pointer-events: none;
}
.switchBar[type=checkbox]:checked + .slider {
  left: 50%;
  width: 2em;
  height: 2em;
  top: -0.3em;
}
.themeIcon {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: 0.2s ease-in-out;
  pointer-events: none;
}`, "",{"version":3,"sources":["webpack://./client/variables.scss","webpack://./client/components/SwitchButton/SwitchButton.scss"],"names":[],"mappings":"AAmDA;EACE;IACE,0BAAA;EClDF;EDoDA;IACE,2BAAA;EClDF;EDoDA;IACE,0BAAA;EClDF;AACF;ADqDA;EACE;IACE,UAAA;ECnDF;EDqDA;IACE,UAAA;ECnDF;AACF;ADsDA;EACE;IACE,UAAA;ECpDF;EDsDA;IACE,UAAA;ECpDF;AACF;ADuDA;EACE;IACE,0BAAA;ECrDF;EDuDA;IACE,6BAAA;ECrDF;EDuDA;IACE,0BAAA;ECrDF;AACF;ADwDA;EACE;IACE,2BAAA;ECtDF;EDwDA;IACE,2BAAA;IACA,iCAAA;ECtDF;EDwDA;IACE,2BAAA;ECtDF;AACF;ADyDA;EACE;IACE,4BAAA;ECvDF;ED0DA;IACE,yBAAA;ECxDF;AACF;ADgEA;EACE,cAJc;EAKd,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAZY;EAaZ,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAjBW;EAkBX,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cArBa;EAsBb,8BAAA;EACA,eAAA;AC9DF;AA9EA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,yBAAA;EACA,cAAA;AAiFF;AA9EA;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,2CAAA;EACA,SAAA;EACA,MAAA;AAiFF;AA9EA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiFF;AA9EA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;AAiFF;AA9EA;EACE,kBAAA;EACA,gBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AAiFF;AAhFE;EACE,yBAAA;EACA,kBAAA;EACA,cAAA;EACA,cAAA;AAkFJ;AA9EA;EACE,YAAA;EACA,aAAA;EACA,4BAAA;EACA,oBAAA;AAiFF;AA9EA;EACE,YAAA;EACA,aAAA;EACA,4BAAA;EACA,oBAAA;AAiFF;AA9EA;ED/BE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EC8BA,kBAAA;EACA,eAAA;AAoFF;AAjFA;EACE,kBAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,uBAAA;EACA,4BAAA;EACA,oBAAA;AAoFF;AAjFA;EACE,SAAA;EACA,UAAA;EACA,WAAA;EACA,WAAA;AAoFF;AAjFA;EACE,kBAAA;EACA,WAAA;EACA,YAAA;EACA,4BAAA;EACA,oBAAA;AAoFF","sourcesContent":["$background-color-dark: #222222;\n$background-color-light: #d0d0d0;\n$base-blue: #154084;\n$base-red: #9d2719;\n$base-yellow: #d7b418;\n$base-orange: #f4a227;\n$accent-blue: #188fff;\n$accent-red: #ff4d4d;\n$accent-yellow: #f5d300;\n$accent-orange: #f4a227;\n$dark-border: rgba(0, 0, 0, 0.2);\n$light-border: rgba(255, 255, 255, 1);\n$dark-text: #ededed;\n$light-text: #222222;\n$graph-blue: #188fff;\n$graph-yellow: #f5d300;\n$diamond-blue: rgb(200, 230, 255);\n$unhealthy-pod: #ad4a39;\n$healthy-pod: #42a62b;\n$warning-pod: #e8c529;\n$pronounced-shadow: 4px 4px 1px 0 rgba(0, 0, 0, 0.5);\n$healthyGradient: linear-gradient(-45deg, #52caee, #3c53e7, #23a6d5, #23d5ab);\n$unhealthyGradient: linear-gradient(-45deg, #e65252, #e73c3c, #d52323, #ab2323);\n$warningGradient: linear-gradient(-45deg, #e6e652, #e7e73c, #d5d523, #abab23);\n\n@mixin flex-horizontal {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flex-vertical {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin grid-base {\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  grid-gap: 1rem;\n}\n\n@keyframes hover-up-down {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-3px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes opacity {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n@keyframes opacity-reverse {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n@keyframes hover-up-down-3D {\n  0% {\n    transform: translateY(0px);\n  }\n  50% {\n    transform: translateY(-3.5px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n\n@keyframes navLinkBlueShadow {\n  0% {\n    box-shadow: 0 0 0px #287aff;\n  }\n  50% {\n    box-shadow: 0 0 8px #287aff;\n    text-shadow: 0px 0px 10px #287aff;\n  }\n  100% {\n    box-shadow: 0 0 0px #287aff;\n  }\n}\n\n@keyframes slide-in-left {\n  0% {\n    transform: translateX(-100%);\n  }\n\n  100% {\n    transform: translateX(0%);\n  }\n}\n\n$inline-blue: #24b0df;\n$inline-red: #db3523;\n$inline-orange: #f4a227;\n$inline-white: #ededed;\n\n.inlineOrangeText {\n  color: $inline-orange;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineBlueText {\n  color: $inline-blue;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineRedText {\n  color: $inline-red;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n.inlineWhiteText {\n  color: $inline-white;\n  text-shadow: 2px 2px 2px black;\n  display: inline;\n}\n\n// Source mixin\n// @mixin make-container($padding-x: $container-padding-x) {\n//     width: 100%;\n//     padding-right: $padding-x;\n//     padding-left: $padding-x;\n//     margin-right: auto;\n//     margin-left: auto;\n//   }\n\n//   .custom-container {\n    \n//   }","@import '../../variables.scss';\n\n.switchContainer {\n  position: relative;\n  margin: 0.1em;\n  border-radius: 20px;\n  background-color: darken($base-blue, 10%);\n  padding: 0.2em;\n}\n\n.switchContainer::after {\n  content: '';\n  position: absolute;\n  width: 1px;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0.05);\n  left: 50%;\n  top: 0;\n}\n\n.switchButton {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.check-box {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.brightnessMode {\n  position: absolute;\n  appearance: none;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  cursor: pointer;\n  transition: 0.4s;\n  &:checked + .sunIcon, &:checked + .moonIcon {\n    background-color: lighten($base-blue, 20%);\n    border-radius: 50%;\n    padding: 0.1em;\n    margin: 0.05em;\n  }\n}\n\n.sunIcon {\n  width: 1.5em;\n  height: 1.5em;\n  transition: 0.2s ease-in-out;\n  pointer-events: none;\n}\n\n.moonIcon {\n  width: 1.5em;\n  height: 1.5em;\n  transition: 0.2s ease-in-out;\n  pointer-events: none;\n}\n\n.modeLabel {\n  @include flex-vertical;\n  position: relative;\n  margin: 0 0.5em;\n}\n\n.slider {\n  position: absolute;\n  width: 2em;\n  height: 2em;\n  top: -0.3em;\n  left: -0.5em;\n  background: transparent;\n  transition: 0.4s ease-in-out;\n  pointer-events: none;\n}\n\n.switchBar[type='checkbox']:checked + .slider {\n  left: 50%;\n  width: 2em;\n  height: 2em;\n  top: -0.3em;\n}\n\n.themeIcon {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  transition: 0.2s ease-in-out;\n  pointer-events: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/components/Graph/Graph.module.scss":
/*!***************************************************!*\
  !*** ./client/components/Graph/Graph.module.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./Graph.module.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/Graph.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Graph_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./client/components/Graph/graph.scss":
/*!********************************************!*\
  !*** ./client/components/Graph/graph.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_graph_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./graph.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/graph.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_graph_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_graph_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_graph_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_graph_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./client/components/Graph/styles.module.css":
/*!***************************************************!*\
  !*** ./client/components/Graph/styles.module.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.module.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/Graph/styles.module.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_module_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./client/components/SwitchButton/SwitchButton.scss":
/*!**********************************************************!*\
  !*** ./client/components/SwitchButton/SwitchButton.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SwitchButton_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./SwitchButton.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/SwitchButton/SwitchButton.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SwitchButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SwitchButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SwitchButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_SwitchButton_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=client_layout_DefaultLayout_tsx.bundle.js.map