"use strict";
(self["webpackChunkfaros_scope"] = self["webpackChunkfaros_scope"] || []).push([["client_pages_NodeView_NodeView_tsx"],{

/***/ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@mui/material/useMediaQuery/useMediaQuery.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useMediaQuery)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/useThemeWithoutDefault.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/useThemeProps/getThemeProps.js");
/* harmony import */ var _utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/useEnhancedEffect */ "./node_modules/@mui/material/utils/useEnhancedEffect.js");
'use client';





/**
 * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
 */

/**
 * @deprecated Not used internally. Use `MediaQueryList` from lib.dom.d.ts instead.
 */

/**
 * @deprecated Not used internally. Use `(event: MediaQueryListEvent) => void` instead.
 */

function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = react__WEBPACK_IMPORTED_MODULE_0__.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });
  (0,_utils_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__["default"])(() => {
    let active = true;
    if (!matchMedia) {
      return undefined;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    // TODO: Use `addEventListener` once support for Safari < 14 is dropped
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}

// eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseSyncExternalStore = react__WEBPACK_IMPORTED_MODULE_0__['useSyncExternalStore' + ''];
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, notify => {
      // TODO: Use `addEventListener` once support for Safari < 14 is dropped
      mediaQueryList.addListener(notify);
      return () => {
        mediaQueryList.removeListener(notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function useMediaQuery(queryInput, options = {}) {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_2__["default"])();
  // Wait for jsdom to support the match media feature.
  // All the browsers MUI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.
  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    ssrMatchMedia = null,
    noSsr = false
  } = (0,_mui_system__WEBPACK_IMPORTED_MODULE_3__["default"])({
    name: 'MuiUseMediaQuery',
    props: options,
    theme
  });
  if (true) {
    if (typeof queryInput === 'function' && theme === null) {
      console.error(['MUI: The `query` argument provided is invalid.', 'You are providing a function without a theme in the context.', 'One of the parent elements needs to use a ThemeProvider.'].join('\n'));
    }
  }
  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');

  // TODO: Drop `useMediaQueryOld` and use  `use-sync-external-store` shim in `useMediaQueryNew` once the package is stable
  const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== undefined ? useMediaQueryNew : useMediaQueryOld;
  const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
  if (true) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    react__WEBPACK_IMPORTED_MODULE_0__.useDebugValue({
      query,
      match
    });
  }
  return match;
}

/***/ }),

/***/ "./client/pages/NodeView/NodeView.tsx":
/*!********************************************!*\
  !*** ./client/pages/NodeView/NodeView.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api */ "./client/services/api.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./client/components/index.ts");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");


// ! Review React docs regarding ErrorBoundary
// TODO: Add error boundary
// import { ErrorBoundary } from "react-error-boundary";


// Use lazy to defer loading component’s code until it is rendered for the first time.
var LineChart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("vendors-node_modules_nivo_line_dist_nivo-line_es_js"), __webpack_require__.e("client_components_LineChart_LineChart_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/LineChart/LineChart */ "./client/components/LineChart/LineChart.tsx"));
});
var DataGridWithHeader = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../../components/DataGridWithHeader/DataGridWithHeader */ "./client/components/DataGridWithHeader/DataGridWithHeader.tsx"));
});




var columns = [{
  field: 'nodeName',
  headerName: 'metadata.system.node_name',
  headerAlign: 'left',
  flex: 1,
  align: 'left'
}, {
  field: 'metricValue',
  headerName: 'Latest Value',
  headerAlign: 'center',
  width: 150,
  //   flex: 1,
  align: 'right'
}];
var NodeView = function NodeView() {
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])();
  var isNonMediumScreens = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])('(min-width: 1200px)');
  var _useGetNodeViewQuery = (0,_services_api__WEBPACK_IMPORTED_MODULE_1__.useGetNodeViewQuery)(undefined, {}),
    data = _useGetNodeViewQuery.data,
    isLoading = _useGetNodeViewQuery.isLoading;
  console.log(data);
  var podsFormattedData = [];
  var containersFormattedData = [];
  if (data) {
    podsFormattedData = data.kube_pod_count_per_node.map(function (item, index) {
      return {
        id: index,
        metricName: item.metricName,
        nodeName: item.labels.node,
        metricValue: item.metricValue
      };
    });
    containersFormattedData = data.kube_container_count_per_node.map(function (item, index) {
      return {
        id: index,
        nodeName: item.labels.node,
        metricValue: item.metricValue
      };
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: "NodeView",
    height: "100%",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      m: "1.5rem 2.5rem",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.FlexBetween, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.Header, {
          title: "Nodes View",
          subtitle: "View all nodes in the network"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        mt: "20px",
        display: "grid",
        gridTemplateColumns: "repeat(1fr)",
        gridAutoRows: "minmax(auto, auto)",
        gap: "20px",
        sx: {
          '& > div': {
            gridColumn: isNonMediumScreens ? undefined : 'span 12'
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "20px",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.StatBox, {
            title: "Total Nodes",
            value: data && data.kube_nodes_total.metricValue
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.StatBox, {
            title: "Total Cores",
            value: data && data.kube_total_cores.metricValue
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.StatBox, {
            title: "Allocatable Cores",
            value: data && data.kube_total_allocatable_cores.metricValue
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.StatBox, {
            title: "Total Memory",
            value: data && data.kube_total_memory.metricValue
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_components__WEBPACK_IMPORTED_MODULE_2__.StatBox, {
            title: "Allocatable Memory",
            value: data && data.kube_total_allocatable_memory.metricValue
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          component: "div"
          // gridColumn="span 8"
          //   bgColor={theme.palette.background.secondary}
          ,
          sx: {
            backgroundColor: theme.palette.background["default"]
          },
          p: "1rem",
          borderRadius: "0.55rem",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__.CollapsiblePanel, {
            title: "CPU and Memory",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChart, {
                title: 'CPU Usage Per Node - Top 50',
                URL: 'clusterUsage'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChart, {
                title: 'Memory Usage Per Node - Top 50',
                URL: 'nodeUsage'
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          component: "div",
          sx: {
            backgroundColor: theme.palette.background["default"]
          },
          p: "1rem",
          borderRadius: "0.55rem",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__.CollapsiblePanel, {
            title: "Pod and Container Count",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DataGridWithHeader, {
              title: 'Pod Count',
              columns: columns,
              data: podsFormattedData,
              isLoading: isLoading
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(DataGridWithHeader, {
              title: 'Container Count',
              columns: columns,
              data: containersFormattedData,
              isLoading: isLoading
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          component: "div"
          // gridColumn="span 8"
          //   backgroundColor={theme.palette.background.secondary}
          ,
          sx: {
            backgroundColor: theme.palette.background["default"]
          },
          p: "1rem",
          borderRadius: "0.55rem",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__.CollapsiblePanel, {
            title: "Bandwidth",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChart, {
                title: 'Received Bandwidth Per Node - Top 50',
                URL: 'receivedBandwidth'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChart, {
                title: 'Received Bandwidth Per Node - Top 50',
                URL: 'podNetwork'
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          component: "div"
          // gridColumn="span 8"
          // backgroundColor={theme.palette.background.secondary}
          ,
          sx: {
            backgroundColor: theme.palette.background["default"]
          },
          p: "1rem",
          borderRadius: "0.55rem",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__.CollapsiblePanel, {
            title: "Rate of Packets",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChart, {
                title: 'Received packet count per node - Top 50',
                URL: 'packetsReceived'
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
              fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LineChart, {
                title: 'Transmitted packet count per node - Top 50',
                URL: 'packetsTransmitted'
              })
            })]
          })
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NodeView);

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

/***/ })

}]);
//# sourceMappingURL=client_pages_NodeView_NodeView_tsx.bundle.js.map