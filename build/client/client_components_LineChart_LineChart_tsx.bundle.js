"use strict";
(self["webpackChunkfaros_scope"] = self["webpackChunkfaros_scope"] || []).push([["client_components_LineChart_LineChart_tsx"],{

/***/ "./client/components/LineChart/LineChart.tsx":
/*!***************************************************!*\
  !*** ./client/components/LineChart/LineChart.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material/CircularProgress */ "./node_modules/@mui/material/CircularProgress/CircularProgress.js");
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Paper */ "./node_modules/@mui/material/Paper/Paper.js");
/* harmony import */ var _nivo_line__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nivo/line */ "./node_modules/@nivo/line/dist/nivo-line.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _linechart_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linechart.scss */ "./client/components/LineChart/linechart.scss");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_InfoTwoTone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/icons-material/InfoTwoTone */ "./node_modules/@mui/icons-material/InfoTwoTone.js");
/* harmony import */ var _mui_icons_material_MoreVertTwoTone__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/icons-material/MoreVertTwoTone */ "./node_modules/@mui/icons-material/MoreVertTwoTone.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var InfoTooltip = function InfoTooltip() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Info",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_InfoTwoTone__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fontSize: "small"
      })
    })
  });
};
var MoreInfoTooltip = function MoreInfoTooltip() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "More Info",
    sx: {
      marginLeft: "auto"
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_icons_material_MoreVertTwoTone__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fontSize: "small"
      })
    })
  });
};

// Get the current time in seconds (Unix timestamp)
var now = Math.floor(Date.now() / 1000);

// Calculate the start time (10 minutes ago)
var tenMinutesAgo = now - 50000 * 2;
var URLObject = {
  clusterUsage: "/prom-service/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=300"),
  // ! by changing query from 5  to 10 minutes increase range of time of sample
  nodeUsage: "http://35.227.104.153:31374/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!=\"idle\"}[10m])) / sum by (node) (kube_pod_container_resource_requests{resource=\"cpu\"})&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=120"),
  podNetwork: "http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=200"),
  packetsTransmitted: "http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=350"),
  packetsReceived: "http://35.227.104.153:31374/api/v1/query_range?query= topk(5, sum by (pod) (rate(container_network_receive_packets_total[5m])))&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=350"),
  nodeUsageURL: "http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=150"),
  receivedBandwidth: "http://35.227.104.153:31374/api/v1/query_range?query=sum by (node) (rate(node_network_receive_bytes_total[5m]))&start=".concat(tenMinutesAgo, "&end=").concat(now, "&step=150")
};
var commonProperties = {
  // width: 900,
  //   height: 400,
  margin: {
    top: 20,
    right: 20,
    bottom: 40,
    left: 60
  },
  pointSize: 8,
  pointColor: {
    theme: "background"
  },
  pointBorderWidth: 2,
  pointBorderColor: {
    theme: "background"
  }
};
var LineChart = function LineChart(_ref) {
  var title = _ref.title,
    URL = _ref.URL;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"])();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    data = _useState2[0],
    setData = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(URLObject[URL]).then(function (res) {
              return res.json();
            }).then(function (_ref3) {
              var data = _ref3.data;
              var XY = data.result.map(function (result) {
                var temp = result.values.map(function (point) {
                  console.log(new Intl.DateTimeFormat("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: false,
                    timeZone: "UTC"
                  }).format(new Date(point[0] * 1000)));
                  // console.log(new Date(point[0] * 1000)))
                  return {
                    x: new Date(point[0] * 1000).toISOString(),
                    //   x: new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone:'UTC'}).format(new Date(point[0] * 1000)),
                    y: Number(point[1])
                  };
                });
                return {
                  data: temp,
                  id: Object.values(result.metric)[0] || "placeholder"
                };
              });
              setData(XY);
              "";
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
    4;
  }, []);
  console.log("The DATA after modification", data);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_9__["default"]
  //   variant="outlined"
  , {
    sx: {
      position: "relative",
      width: "100%",
      aspectRatio: "1/1",
      height: "50vh",
      borderRadius: "0.45rem",
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      overFlow: "visible"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
      sx: {
        display: "flex",
        alignItems: "center",
        width: "100%"
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        sx: {
          marginLeft: "1rem",
          fontSize: "1.17rem",
          display: "inline-block",
          color: theme.palette.typography.main,
          textAlign: "center"
        },
        children: title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(InfoTooltip, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(MoreInfoTooltip, {})]
    }), !data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_12__["default"], {}), data && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      style: {
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: "0.45rem",
        padding: "0.5rem"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_nivo_line__WEBPACK_IMPORTED_MODULE_0__.ResponsiveLineCanvas, _objectSpread(_objectSpread({}, commonProperties), {}, {
        theme: {
          //   background: "rgba(161, 183, 201, 0.06)",
          background: theme.palette.background.linechart.main,
          text: {
            fill: theme.palette.typography.main
          },
          tooltip: {
            container: {
              color: theme.palette.typography.inverted
            }
          }
        },
        data: data,
        xScale: {
          type: "time",
          format: "%Y-%m-%dT%H:%M:%S.%L%Z",
          precision: "minute",
          min: "auto",
          max: "auto"
        },
        xFormat: "time:%Y-%m-%d %H:%M:%S.%Z",
        yScale: {
          type: "linear",
          min: "auto",
          max: "auto"
          // stacked: boolean('stacked', false),
        },

        axisLeft: {
          //   legend: "linear scale",
          legendOffset: -12
        },
        axisBottom: {
          format: "%H:%M",
          tickValues: 10,
          tickPadding: 10,
          //   legend: "time scale",
          legendOffset: 12
        }
        // enablePointLabel={true}
        ,
        pointSize: 0,
        pointBorderWidth: 1,
        pointBorderColor: {
          from: "color",
          modifiers: [["darker", 0.3]]
        }
        // useMesh={true}
        ,
        enableSlices: false,
        enableGridX: false,
        colors: {
          scheme: "spectral"
        }
      }))
    })]
  });
};

// Exporting as default for React lazy loading; React.lazy() only supports default exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineChart);

/*

          <ResponsiveLineCanvas
            {...commonProperties}
            data={data}
            // xScale={{
            //   type: "time",
            //   format: "%Y-%m-%dT%H:%M:%S.%L%Z",
            //   useUTC: true,
            //   precision: "second",
            // }}
            // xFormat="time:%Y-%m-%dT%H:%M:%S.%L%Z"
            // yScale={{
            //   type: "linear",
            //   // stacked: boolean('stacked', false),
            // }}
            // axisLeft={{
            //   legend: "linear scale",
            //   legendOffset: 12,
            // }}
            // axisBottom={{
            //   format: '%S.%L',
            //   tickValues: 'every 1 minute',
            //   legend: 'time',
            //   legendOffset: -12,
            // }}
            // curve="natural"
            // enablePointLabel={true}
            // pointSymbol={CustomSymbol}
            // pointSize={0}
            // pointBorderWidth={0}
            // pointBorderColor={{
            //   from: "color",
            //   modifiers: [["darker", 0.3]],
            // }}
            // enableSlices={false}
            // colors={{ scheme: "spectral" }}
          />


<ResponsiveLineCanvas
data={data}
margin={{ top: 5, right: 60, bottom: 40, left: 60 }} // Adjust left margin for potential axisLeft use
xScale={{
  type: 'time',
  format: '%Y-%m-%dT%H:%M:%S.%LZ',
  precision: 'second',
}}
//   xScale={{

// }}
yScale={{
  type: 'linear',
  min: 'auto',
  max: 'auto',
  stacked: false,
  reverse: false,
}}
axisLeft={{
  legend: 'linear',
  legendOffset: 12,
}}
axisBottom={{
  format: '%H:%M', // Consider if this format suits your data's temporal resolution
  tickValues: 'every 2 hours', // Adjust based on your data's time range
  legend: 'Time of Day',
  legendOffset: -12,
  legendPosition: 'middle',
}}
curve="natural"
enablePointLabel={true}
useMesh={true}
enableSlices={true}
colors={{ scheme: 'category10' }}
enablePoints={false} // Keep disabled for performance, enable if needed for clarity
enableGridX={true} // Optionally enable for better readability
enableGridY={true} // Enable Y grid for better data value readability
layers={['grid', 'axes', 'bars', 'markers', 'legends']} // Adding CustomLayer here
tooltip={(
  { point }, // Custom tooltip for better interaction
) => (
  <div style={{ color: point.serieColor }}>
    <strong>{point.serieId}</strong>: {point.data.yFormatted}
  </div>
)}
enableArea={false} // Disabled for performance, enable if it adds value
useMesh={true} // Improve interaction performance
legends={[
  // Optional: add legends to improve readability
  {
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 120,
    translateY: 0,
    itemsSpacing: 2,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)',
    effects: [
      {
        on: 'hover',
        style: {
          itemBackground: 'rgba(0, 0, 0, .03)',
          itemOpacity: 1,
        },
      },
    ],
  },
]}
/> */

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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/LineChart/linechart.scss":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/LineChart/linechart.scss ***!
  \***************************************************************************************************************************************************************************/
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
.custom-container {
  margin-left: 0;
  margin-right: 0;
  max-width: 100%;
  height: 100%;
}
.page {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: white;
  min-height: 30vh;
  min-width: 25vw;
  border-radius: 20px;
}
.page.dark {
  border: 1px solid rgb(255, 255, 255);
}
.page.light {
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.page h1 {
  color: white;
}`, "",{"version":3,"sources":["webpack://./client/variables.scss","webpack://./client/components/LineChart/linechart.scss"],"names":[],"mappings":"AAmDA;EACE;IACE,0BAAA;EClDF;EDoDA;IACE,2BAAA;EClDF;EDoDA;IACE,0BAAA;EClDF;AACF;ADqDA;EACE;IACE,UAAA;ECnDF;EDqDA;IACE,UAAA;ECnDF;AACF;ADsDA;EACE;IACE,UAAA;ECpDF;EDsDA;IACE,UAAA;ECpDF;AACF;ADuDA;EACE;IACE,0BAAA;ECrDF;EDuDA;IACE,6BAAA;ECrDF;EDuDA;IACE,0BAAA;ECrDF;AACF;ADwDA;EACE;IACE,2BAAA;ECtDF;EDwDA;IACE,2BAAA;IACA,iCAAA;ECtDF;EDwDA;IACE,2BAAA;ECtDF;AACF;ADyDA;EACE;IACE,4BAAA;ECvDF;ED0DA;IACE,yBAAA;ECxDF;AACF;ADgEA;EACE,cAJc;EAKd,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAZY;EAaZ,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAjBW;EAkBX,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cArBa;EAsBb,8BAAA;EACA,eAAA;AC9DF;ADiEA;EACE,cAAA;EACA,eAAA;EACA,eAAA;EACA,YAAA;AC9DF;AArFA;EDwBE,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,uBAAA;ECzBA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;AA2FF;AA1FE;EACE,oCAAA;AA4FJ;AA1FE;EACE,oCAAA;AA4FJ;AA1FE;EACE,YAAA;AA4FJ","sourcesContent":["$background-color-dark: #222222;\r\n$background-color-light: #d0d0d0;\r\n$base-blue: #154084;\r\n$base-red: #9d2719;\r\n$base-yellow: #d7b418;\r\n$base-orange: #f4a227;\r\n$accent-blue: #188fff;\r\n$accent-red: #ff4d4d;\r\n$accent-yellow: #f5d300;\r\n$accent-orange: #f4a227;\r\n$dark-border: rgba(0, 0, 0, 0.2);\r\n$light-border: rgba(255, 255, 255, 1);\r\n$dark-text: #ededed;\r\n$light-text: #222222;\r\n$graph-blue: #188fff;\r\n$graph-yellow: #f5d300;\r\n$diamond-blue: rgb(200, 230, 255);\r\n$unhealthy-pod: #ad4a39;\r\n$healthy-pod: #42a62b;\r\n$warning-pod: #e8c529;\r\n$pronounced-shadow: 4px 4px 1px 0 rgba(0, 0, 0, 0.5);\r\n$healthyGradient: linear-gradient(-45deg, #52caee, #3c53e7, #23a6d5, #23d5ab);\r\n$unhealthyGradient: linear-gradient(-45deg, #e65252, #e73c3c, #d52323, #ab2323);\r\n$warningGradient: linear-gradient(-45deg, #e6e652, #e7e73c, #d5d523, #abab23);\r\n\r\n@mixin flex-horizontal {\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flex-vertical {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n@mixin flex-center {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n@mixin grid-base {\r\n  display: grid;\r\n  grid-template-columns: repeat(12, 1fr);\r\n  grid-gap: 1rem;\r\n}\r\n\r\n@keyframes hover-up-down {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(-3px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes opacity {\r\n  0% {\r\n    opacity: 0;\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes opacity-reverse {\r\n  0% {\r\n    opacity: 1;\r\n  }\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n@keyframes hover-up-down-3D {\r\n  0% {\r\n    transform: translateY(0px);\r\n  }\r\n  50% {\r\n    transform: translateY(-3.5px);\r\n  }\r\n  100% {\r\n    transform: translateY(0px);\r\n  }\r\n}\r\n\r\n@keyframes navLinkBlueShadow {\r\n  0% {\r\n    box-shadow: 0 0 0px #287aff;\r\n  }\r\n  50% {\r\n    box-shadow: 0 0 8px #287aff;\r\n    text-shadow: 0px 0px 10px #287aff;\r\n  }\r\n  100% {\r\n    box-shadow: 0 0 0px #287aff;\r\n  }\r\n}\r\n\r\n@keyframes slide-in-left {\r\n  0% {\r\n    transform: translateX(-100%);\r\n  }\r\n\r\n  100% {\r\n    transform: translateX(0%);\r\n  }\r\n}\r\n\r\n$inline-blue: #24b0df;\r\n$inline-red: #db3523;\r\n$inline-orange: #f4a227;\r\n$inline-white: #ededed;\r\n\r\n.inlineOrangeText {\r\n  color: $inline-orange;\r\n  text-shadow: 2px 2px 2px black;\r\n  display: inline;\r\n}\r\n\r\n.inlineBlueText {\r\n  color: $inline-blue;\r\n  text-shadow: 2px 2px 2px black;\r\n  display: inline;\r\n}\r\n\r\n.inlineRedText {\r\n  color: $inline-red;\r\n  text-shadow: 2px 2px 2px black;\r\n  display: inline;\r\n}\r\n\r\n.inlineWhiteText {\r\n  color: $inline-white;\r\n  text-shadow: 2px 2px 2px black;\r\n  display: inline;\r\n}\r\n\r\n.custom-container {\r\n  margin-left: 0;\r\n  margin-right: 0;\r\n  max-width: 100%;\r\n  height: 100%;\r\n}\r\n","@import '../../variables.scss';\r\n\r\n.page {\r\n  @include flex-horizontal;\r\n  color: white;\r\n  min-height: 30vh;\r\n  min-width: 25vw;\r\n  border-radius: 20px;\r\n  &.dark {\r\n    border: 1px solid $light-border;\r\n  }\r\n  &.light {\r\n    border: 1px solid $dark-border;\r\n  }\r\n  h1 {\r\n    color: white;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./client/components/LineChart/linechart.scss":
/*!****************************************************!*\
  !*** ./client/components/LineChart/linechart.scss ***!
  \****************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_linechart_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/postcss-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./linechart.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./client/components/LineChart/linechart.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_linechart_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_linechart_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_linechart_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_linechart_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ })

}]);
//# sourceMappingURL=client_components_LineChart_LineChart_tsx.bundle.js.map