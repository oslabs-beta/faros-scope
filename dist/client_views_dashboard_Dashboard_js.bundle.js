"use strict";
(self["webpackChunkfaros_scope"] = self["webpackChunkfaros_scope"] || []).push([["client_views_dashboard_Dashboard_js"],{

/***/ "./client/views/dashboard/Dashboard.js":
/*!*********************************************!*\
  !*** ./client/views/dashboard/Dashboard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-user.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-user-female.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-google.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-facebook.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-twitter.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-linkedin.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-cloud-download.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-people.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _widgets_WidgetsBrand__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../widgets/WidgetsBrand */ "./client/views/widgets/WidgetsBrand.js");
/* harmony import */ var _widgets_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../widgets/WidgetsDropdown */ "./client/views/widgets/WidgetsDropdown.js");
/* harmony import */ var _MainChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MainChart */ "./client/views/dashboard/MainChart.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






// import avatar1 from 'src/assets/images/avatars/1.jpg'
// import avatar2 from 'src/assets/images/avatars/2.jpg'
// import avatar3 from 'src/assets/images/avatars/3.jpg'
// import avatar4 from 'src/assets/images/avatars/4.jpg'
// import avatar5 from 'src/assets/images/avatars/5.jpg'
// import avatar6 from 'src/assets/images/avatars/6.jpg'







var Dashboard = function Dashboard() {
  var progressExample = [{
    title: 'Visits',
    value: '29.703 Users',
    percent: 40,
    color: 'success'
  }, {
    title: 'Unique',
    value: '24.093 Users',
    percent: 20,
    color: 'info'
  }, {
    title: 'Pageviews',
    value: '78.706 Views',
    percent: 60,
    color: 'warning'
  }, {
    title: 'New Users',
    value: '22.123 Users',
    percent: 80,
    color: 'danger'
  }, {
    title: 'Bounce Rate',
    value: 'Average Rate',
    percent: 40.15,
    color: 'primary'
  }];
  var progressGroupExample1 = [{
    title: 'Monday',
    value1: 34,
    value2: 78
  }, {
    title: 'Tuesday',
    value1: 56,
    value2: 94
  }, {
    title: 'Wednesday',
    value1: 12,
    value2: 67
  }, {
    title: 'Thursday',
    value1: 43,
    value2: 91
  }, {
    title: 'Friday',
    value1: 22,
    value2: 73
  }, {
    title: 'Saturday',
    value1: 53,
    value2: 82
  }, {
    title: 'Sunday',
    value1: 9,
    value2: 69
  }];
  var progressGroupExample2 = [{
    title: 'Male',
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_7__.cilUser,
    value: 53
  }, {
    title: 'Female',
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cilUserFemale,
    value: 43
  }];
  var progressGroupExample3 = [{
    title: 'Organic Search',
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_9__.cibGoogle,
    percent: 56,
    value: '191,235'
  }, {
    title: 'Facebook',
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_10__.cibFacebook,
    percent: 15,
    value: '51,223'
  }, {
    title: 'Twitter',
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_11__.cibTwitter,
    percent: 11,
    value: '37,564'
  }, {
    title: 'LinkedIn',
    icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_12__.cibLinkedin,
    percent: 8,
    value: '27,319'
  }];
  var tableExample = [
    //     {
    //       avatar: { src: avatar1, status: 'success' },
    //       user: {
    //         name: 'Yiorgos Avraamu',
    //         new: true,
    //         registered: 'Jan 1, 2023',
    //       },
    //       country: { name: 'USA', flag: cifUs },
    //       usage: {
    //         value: 50,
    //         period: 'Jun 11, 2023 - Jul 10, 2023',
    //         color: 'success',
    //       },
    //       payment: { name: 'Mastercard', icon: cibCcMastercard },
    //       activity: '10 sec ago',
    //     },
    //     {
    //       avatar: { src: avatar2, status: 'danger' },
    //       user: {
    //         name: 'Avram Tarasios',
    //         new: false,
    //         registered: 'Jan 1, 2023',
    //       },
    //       country: { name: 'Brazil', flag: cifBr },
    //       usage: {
    //         value: 22,
    //         period: 'Jun 11, 2023 - Jul 10, 2023',
    //         color: 'info',
    //       },
    //       payment: { name: 'Visa', icon: cibCcVisa },
    //       activity: '5 minutes ago',
    //     },
    //     {
    //       avatar: { src: avatar3, status: 'warning' },
    //       user: { name: 'Quintin Ed', new: true, registered: 'Jan 1, 2023' },
    //       country: { name: 'India', flag: cifIn },
    //       usage: {
    //         value: 74,
    //         period: 'Jun 11, 2023 - Jul 10, 2023',
    //         color: 'warning',
    //       },
    //       payment: { name: 'Stripe', icon: cibCcStripe },
    //       activity: '1 hour ago',
    //     },
    //     {
    //       avatar: { src: avatar4, status: 'secondary' },
    //       user: { name: 'Enéas Kwadwo', new: true, registered: 'Jan 1, 2023' },
    //       country: { name: 'France', flag: cifFr },
    //       usage: {
    //         value: 98,
    //         period: 'Jun 11, 2023 - Jul 10, 2023',
    //         color: 'danger',
    //       },
    //       payment: { name: 'PayPal', icon: cibCcPaypal },
    //       activity: 'Last month',
    //     },
    //     {
    //       avatar: { src: avatar5, status: 'success' },
    //       user: {
    //         name: 'Agapetus Tadeáš',
    //         new: true,
    //         registered: 'Jan 1, 2023',
    //       },
    //       country: { name: 'Spain', flag: cifEs },
    //       usage: {
    //         value: 22,
    //         period: 'Jun 11, 2023 - Jul 10, 2023',
    //         color: 'primary',
    //       },
    //       payment: { name: 'Google Wallet', icon: cibCcApplePay },
    //       activity: 'Last week',
    //     },
    //     {
    //       avatar: { src: avatar6, status: 'danger' },
    //       user: {
    //         name: 'Friderik Dávid',
    //         new: true,
    //         registered: 'Jan 1, 2023',
    //       },
    //       country: { name: 'Poland', flag: cifPl },
    //       usage: {
    //         value: 43,
    //         period: 'Jun 11, 2023 - Jul 10, 2023',
    //         color: 'success',
    //       },
    //       payment: { name: 'Amex', icon: cibCcAmex },
    //       activity: 'Last week',
    //     },
  ];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {
      className: "mb-4"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCard, {
      className: "mb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardBody, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
            sm: 5,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              id: "traffic",
              className: "card-title mb-0",
              children: "Traffic"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              className: "small text-body-secondary",
              children: "January - July 2023"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
            sm: 7,
            className: "d-none d-md-block",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CButton, {
              color: "primary",
              className: "float-end",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_13__.cilCloudDownload
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CButtonGroup, {
              className: "float-end me-3",
              children: ['Day', 'Month', 'Year'].map(function (value) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CButton, {
                  color: "outline-secondary",
                  className: "mx-0",
                  active: value === 'Month',
                  children: value
                }, value);
              })
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_MainChart__WEBPACK_IMPORTED_MODULE_5__["default"], {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardFooter, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
          xs: {
            cols: 1,
            gutter: 4
          },
          sm: {
            cols: 2
          },
          lg: {
            cols: 4
          },
          xl: {
            cols: 5
          },
          className: "mb-2 text-center",
          children: progressExample.map(function (item, index, items) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
              className: classnames__WEBPACK_IMPORTED_MODULE_0___default()({
                'd-none d-xl-block': index + 1 === items.length
              }),
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "text-body-secondary",
                children: item.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "fw-semibold text-truncate",
                children: [item.value, " (", item.percent, "%)"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CProgress, {
                thin: true,
                className: "mt-2",
                color: item.color,
                value: item.percent
              })]
            }, index);
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_widgets_WidgetsBrand__WEBPACK_IMPORTED_MODULE_3__["default"], {
      className: "mb-4",
      withCharts: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
        xs: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCard, {
          className: "mb-4",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardHeader, {
            children: ["Traffic ", ' & ', " Sales"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCardBody, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
                xs: 12,
                md: 6,
                xl: 6,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
                    xs: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "border-start border-start-4 border-start-info py-1 px-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "text-body-secondary text-truncate small",
                        children: "New Clients"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "fs-5 fw-semibold",
                        children: "9,123"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
                    xs: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "border-start border-start-4 border-start-danger py-1 px-3 mb-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "text-body-secondary text-truncate small",
                        children: "Recurring Clients"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "fs-5 fw-semibold",
                        children: "22,643"
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {
                  className: "mt-0"
                }), progressGroupExample1.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "progress-group mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "progress-group-prepend",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        className: "text-body-secondary small",
                        children: item.title
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "progress-group-bars",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CProgress, {
                        thin: true,
                        color: "info",
                        value: item.value1
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CProgress, {
                        thin: true,
                        color: "danger",
                        value: item.value2
                      })]
                    })]
                  }, index);
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
                xs: 12,
                md: 6,
                xl: 6,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CRow, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
                    xs: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "border-start border-start-4 border-start-warning py-1 px-3 mb-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "text-body-secondary text-truncate small",
                        children: "Pageviews"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "fs-5 fw-semibold",
                        children: "78,623"
                      })]
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CCol, {
                    xs: 6,
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "border-start border-start-4 border-start-success py-1 px-3 mb-3",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "text-body-secondary text-truncate small",
                        children: "Organic"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "fs-5 fw-semibold",
                        children: "49,123"
                      })]
                    })
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("hr", {
                  className: "mt-0"
                }), progressGroupExample2.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "progress-group mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "progress-group-header",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        className: "me-2",
                        icon: item.icon,
                        size: "lg"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        children: item.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                        className: "ms-auto fw-semibold",
                        children: [item.value, "%"]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "progress-group-bars",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CProgress, {
                        thin: true,
                        color: "warning",
                        value: item.value
                      })
                    })]
                  }, index);
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "mb-5"
                }), progressGroupExample3.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "progress-group",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      className: "progress-group-header",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        className: "me-2",
                        icon: item.icon,
                        size: "lg"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        children: item.title
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                        className: "ms-auto fw-semibold",
                        children: [item.value, ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                          className: "text-body-secondary small",
                          children: ["(", item.percent, "%)"]
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "progress-group-bars",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CProgress, {
                        thin: true,
                        color: "success",
                        value: item.percent
                      })
                    })]
                  }, index);
                })]
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTable, {
              align: "middle",
              className: "mb-0 border",
              hover: true,
              responsive: true,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHead, {
                className: "text-nowrap",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableRow, {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHeaderCell, {
                    className: "bg-body-tertiary text-center",
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                      icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_14__.cilPeople
                    })
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHeaderCell, {
                    className: "bg-body-tertiary",
                    children: "User"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHeaderCell, {
                    className: "bg-body-tertiary text-center",
                    children: "Country"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHeaderCell, {
                    className: "bg-body-tertiary",
                    children: "Usage"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHeaderCell, {
                    className: "bg-body-tertiary text-center",
                    children: "Payment Method"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableHeaderCell, {
                    className: "bg-body-tertiary",
                    children: "Activity"
                  })]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableBody, {
                children: tableExample.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableRow, {
                    "v-for": "item in tableItems",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableDataCell, {
                      className: "text-center"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableDataCell, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        children: item.user.name
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "small text-body-secondary text-nowrap",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                          children: item.user["new"] ? 'New' : 'Recurring'
                        }), " | Registered:", ' ', item.user.registered]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableDataCell, {
                      className: "text-center",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        size: "xl",
                        icon: item.country.flag,
                        title: item.country.name
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableDataCell, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                        className: "d-flex justify-content-between text-nowrap",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                          className: "fw-semibold",
                          children: [item.usage.value, "%"]
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                          className: "ms-3",
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("small", {
                            className: "text-body-secondary",
                            children: item.usage.period
                          })
                        })]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CProgress, {
                        thin: true,
                        color: item.usage.color,
                        value: item.usage.value
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableDataCell, {
                      className: "text-center",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
                        size: "xl",
                        icon: item.payment.icon
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_2__.CTableDataCell, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "small text-body-secondary text-nowrap",
                        children: "Last login"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                        className: "fw-semibold text-nowrap",
                        children: item.activity
                      })]
                    })]
                  }, index);
                })
              })]
            })]
          })]
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

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

/***/ "./client/views/dashboard/MainChart.js":
/*!*********************************************!*\
  !*** ./client/views/dashboard/MainChart.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/dist/index.es.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/esm/getStyle.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");






var MainChart = function MainChart() {
  var chartRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    document.documentElement.addEventListener('ColorSchemeChange', function () {
      if (chartRef.current) {
        setTimeout(function () {
          chartRef.current.options.scales.x.grid.borderColor = (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent');
          chartRef.current.options.scales.x.grid.color = (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent');
          chartRef.current.options.scales.x.ticks.color = (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-body-color');
          chartRef.current.options.scales.y.grid.borderColor = (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent');
          chartRef.current.options.scales.y.grid.color = (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent');
          chartRef.current.options.scales.y.ticks.color = (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-body-color');
          chartRef.current.update();
        });
      }
    });
  }, [chartRef]);
  var random = function random() {
    return Math.round(Math.random() * 100);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_1__.CChartLine, {
      ref: chartRef,
      style: {
        height: '300px',
        marginTop: '40px'
      },
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: "rgba(".concat((0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-info-rgb'), ", .1)"),
          borderColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-info'),
          pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-info'),
          borderWidth: 2,
          data: [random(50, 200), random(50, 200), random(50, 200), random(50, 200), random(50, 200), random(50, 200), random(50, 200)],
          fill: true
        }, {
          label: 'My Second dataset',
          backgroundColor: 'transparent',
          borderColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-success'),
          pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-success'),
          borderWidth: 2,
          data: [random(50, 200), random(50, 200), random(50, 200), random(50, 200), random(50, 200), random(50, 200), random(50, 200)]
        }, {
          label: 'My Third dataset',
          backgroundColor: 'transparent',
          borderColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-danger'),
          pointHoverBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-danger'),
          borderWidth: 1,
          borderDash: [8, 5],
          data: [65, 65, 65, 65, 65, 65, 65]
        }]
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            grid: {
              color: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent'),
              drawOnChartArea: false
            },
            ticks: {
              color: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-body-color')
            }
          },
          y: {
            border: {
              color: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent')
            },
            grid: {
              color: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-border-color-translucent')
            },
            ticks: {
              beginAtZero: true,
              color: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_3__["default"])('--cui-body-color'),
              max: 250,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5)
            }
          }
        },
        elements: {
          line: {
            tension: 0.4
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      }
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainChart);

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

/***/ "./client/views/widgets/WidgetsBrand.js":
/*!**********************************************!*\
  !*** ./client/views/widgets/WidgetsBrand.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-facebook.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-twitter.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/brand/cib-linkedin.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-calendar.js");
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/dist/index.es.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }








var WidgetsBrand = function WidgetsBrand(_ref) {
  var withCharts = _ref.withCharts;
  var chartOptions = {
    elements: {
      line: {
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3
      }
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        display: false
      },
      y: {
        display: false
      }
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__.CChart, {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [65, 59, 84, 84, 51, 55, 40],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cibFacebook,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'friends',
          value: '89K'
        }, {
          title: 'feeds',
          value: '459'
        }],
        style: {
          '--cui-card-cap-bg': '#3b5998'
        }
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__.CChart, {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [1, 13, 9, 17, 34, 41, 38],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cibTwitter,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'followers',
          value: '973k'
        }, {
          title: 'tweets',
          value: '1.792'
        }],
        style: {
          '--cui-card-cap-bg': '#00aced'
        }
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__.CChart, {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [78, 81, 80, 45, 34, 12, 40],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_7__.cibLinkedin,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'contacts',
          value: '500'
        }, {
          title: 'feeds',
          value: '1.292'
        }],
        style: {
          '--cui-card-cap-bg': '#4875b4'
        }
      }))
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsD, _objectSpread(_objectSpread({
        className: "mb-4",
        color: "warning"
      }, withCharts && {
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_3__.CChart, {
          className: "position-absolute w-100 h-100",
          type: "line",
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              backgroundColor: 'rgba(255,255,255,.1)',
              borderColor: 'rgba(255,255,255,.55)',
              pointHoverBackgroundColor: '#fff',
              borderWidth: 2,
              data: [35, 23, 56, 22, 97, 23, 64],
              fill: true
            }]
          },
          options: chartOptions
        })
      }), {}, {
        icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
          icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cilCalendar,
          height: 52,
          className: "my-4 text-white"
        }),
        values: [{
          title: 'events',
          value: '12+'
        }, {
          title: 'meetings',
          value: '4'
        }]
      }))
    })]
  });
};
WidgetsBrand.propTypes = {
  withCharts: (prop_types__WEBPACK_IMPORTED_MODULE_9___default().bool)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsBrand);

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

/***/ "./client/views/widgets/WidgetsDropdown.js":
/*!*************************************************!*\
  !*** ./client/views/widgets/WidgetsDropdown.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/utils */ "./node_modules/@coreui/utils/dist/esm/getStyle.js");
/* harmony import */ var _coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/react-chartjs */ "./node_modules/@coreui/react-chartjs/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-arrow-bottom.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-options.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/dist/esm/free/cil-arrow-top.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "./node_modules/react-refresh/runtime.js");










var WidgetsDropdown = function WidgetsDropdown() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsA, {
        className: "mb-4",
        color: "primary",
        value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: ["26K", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "fs-6 fw-normal",
            children: ["(-12.4% ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cilArrowBottom
            }), ")"]
          })]
        }),
        title: "Users",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cilOptions,
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
              pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('--cui-primary'),
              data: [65, 59, 84, 84, 51, 55, 40]
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  display: false
                }
              },
              y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                  display: false
                },
                ticks: {
                  display: false
                }
              }
            },
            elements: {
              line: {
                borderWidth: 1,
                tension: 0.4
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsA, {
        className: "mb-4",
        color: "info",
        value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: ["$6.200", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "fs-6 fw-normal",
            children: ["(40.9% ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cilArrowTop
            }), ")"]
          })]
        }),
        title: "Income",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cilOptions,
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'transparent',
              borderColor: 'rgba(255,255,255,.55)',
              pointBackgroundColor: (0,_coreui_utils__WEBPACK_IMPORTED_MODULE_7__["default"])('--cui-info'),
              data: [1, 18, 9, 17, 34, 22, 11]
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                grid: {
                  display: false,
                  drawBorder: false
                },
                ticks: {
                  display: false
                }
              },
              y: {
                min: -9,
                max: 39,
                display: false,
                grid: {
                  display: false
                },
                ticks: {
                  display: false
                }
              }
            },
            elements: {
              line: {
                borderWidth: 1
              },
              point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsA, {
        className: "mb-4",
        color: "warning",
        value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: ["2.49", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "fs-6 fw-normal",
            children: ["(84.7% ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_8__.cilArrowTop
            }), ")"]
          })]
        }),
        title: "Conversion Rate",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cilOptions,
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartLine, {
          className: "mt-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(255,255,255,.2)',
              borderColor: 'rgba(255,255,255,.55)',
              data: [78, 81, 80, 45, 34, 12, 40],
              fill: true
            }]
          },
          options: {
            plugins: {
              legend: {
                display: false
              }
            },
            maintainAspectRatio: false,
            scales: {
              x: {
                display: false
              },
              y: {
                display: false
              }
            },
            elements: {
              line: {
                borderWidth: 2,
                tension: 0.4
              },
              point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
              }
            }
          }
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
      sm: 6,
      lg: 3,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CWidgetStatsA, {
        className: "mb-4",
        color: "danger",
        value: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: ["44K", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
            className: "fs-6 fw-normal",
            children: ["(-23.6% ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_5__.cilArrowBottom
            }), ")"]
          })]
        }),
        title: "Sessions",
        action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdown, {
          alignment: "end",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownToggle, {
            color: "transparent",
            caret: false,
            className: "p-0",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"], {
              icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_6__.cilOptions,
              className: "text-high-emphasis-inverse"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownMenu, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Another action"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              children: "Something else here..."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CDropdownItem, {
              disabled: true,
              children: "Disabled action"
            })]
          })]
        }),
        chart: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react_chartjs__WEBPACK_IMPORTED_MODULE_2__.CChartBar, {
          className: "mt-3 mx-3",
          style: {
            height: '70px'
          },
          data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
            datasets: [{
              label: 'My First dataset',
              backgroundColor: 'rgba(255,255,255,.2)',
              borderColor: 'rgba(255,255,255,.55)',
              data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
              barPercentage: 0.6
            }]
          },
          options: {
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false
              }
            },
            scales: {
              x: {
                grid: {
                  display: false,
                  drawTicks: false
                },
                ticks: {
                  display: false
                }
              },
              y: {
                grid: {
                  display: false,
                  drawBorder: false,
                  drawTicks: false
                },
                ticks: {
                  display: false
                }
              }
            }
          }
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WidgetsDropdown);

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
//# sourceMappingURL=client_views_dashboard_Dashboard_js.bundle.js.map