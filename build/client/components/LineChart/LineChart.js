"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const CircularProgress_1 = __importDefault(require("@mui/material/CircularProgress"));
const Paper_1 = __importDefault(require("@mui/material/Paper"));
const line_1 = require("@nivo/line");
const react_1 = require("react");
require("./linechart.scss");
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const IconButton_1 = __importDefault(require("@mui/material/IconButton"));
const InfoTwoTone_1 = __importDefault(require("@mui/icons-material/InfoTwoTone"));
const MoreVertTwoTone_1 = __importDefault(require("@mui/icons-material/MoreVertTwoTone"));
const InfoTooltip = () => {
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: 'Info', children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(InfoTwoTone_1.default, { fontSize: "small" }) }) }));
};
const MoreInfoTooltip = () => {
    return ((0, jsx_runtime_1.jsx)(Tooltip_1.default, { title: "More Info", sx: { marginLeft: "auto" }, children: (0, jsx_runtime_1.jsx)(IconButton_1.default, { children: (0, jsx_runtime_1.jsx)(MoreVertTwoTone_1.default, { fontSize: "small" }) }) }));
};
// Get the current time in seconds (Unix timestamp)
const now = Math.floor(Date.now() / 1000);
// Calculate the start time (10 minutes ago)
const tenMinutesAgo = now - 50000 * 2;
const URLObject = {
    clusterUsage: `/prom-service/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=300`,
    // ! by changing query from 5  to 10 minutes increase range of time of sample
    nodeUsage: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[10m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=120`,
    podNetwork: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=200`,
    packetsTransmitted: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=350`,
    packetsReceived: `http://35.227.104.153:31374/api/v1/query_range?query= topk(5, sum by (pod) (rate(container_network_receive_packets_total[5m])))&start=${tenMinutesAgo}&end=${now}&step=350`,
    nodeUsageURL: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`,
    receivedBandwidth: `http://35.227.104.153:31374/api/v1/query_range?query=sum by (node) (rate(node_network_receive_bytes_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
};
const commonProperties = {
    // width: 900,
    //   height: 400,
    margin: { top: 20, right: 20, bottom: 40, left: 60 },
    pointSize: 8,
    pointColor: { theme: "background" },
    pointBorderWidth: 2,
    pointBorderColor: { theme: "background" },
};
const LineChart = ({ title, URL }) => {
    const theme = (0, material_1.useTheme)();
    const [data, setData] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield fetch(URLObject[URL])
                    .then((res) => {
                    return res.json();
                })
                    .then(({ data }) => {
                    const XY = data.result.map((result) => {
                        const temp = result.values.map((point) => {
                            console.log(new Intl.DateTimeFormat("en-US", {
                                hour: "2-digit",
                                minute: "2-digit",
                                second: "2-digit",
                                hour12: false,
                                timeZone: "UTC",
                            }).format(new Date(point[0] * 1000)));
                            // console.log(new Date(point[0] * 1000)))
                            return {
                                x: new Date(point[0] * 1000).toISOString(),
                                //   x: new Intl.DateTimeFormat('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone:'UTC'}).format(new Date(point[0] * 1000)),
                                y: Number(point[1]),
                            };
                        });
                        return {
                            data: temp,
                            id: Object.values(result.metric)[0] || "placeholder",
                        };
                    });
                    setData(XY);
                    ``;
                });
            });
        })();
        4;
    }, []);
    console.log("The DATA after modification", data);
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default
    //   variant="outlined"
    , { 
        //   variant="outlined"
        sx: {
            position: "relative",
            width: "100%",
            aspectRatio: "1/1",
            height: "50vh",
            borderRadius: "0.45rem",
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "column",
            overFlow: "visible",
        }, children: [(0, jsx_runtime_1.jsxs)(material_1.Box, { sx: {
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { sx: {
                            marginLeft: "1rem",
                            fontSize: "1.17rem",
                            display: "inline-block",
                            color: theme.palette.typography.main,
                            textAlign: "center",
                        }, children: title }), (0, jsx_runtime_1.jsx)(InfoTooltip, {}), (0, jsx_runtime_1.jsx)(MoreInfoTooltip, {})] }), !data && (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), data && ((0, jsx_runtime_1.jsx)("div", { style: {
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "0.45rem",
                    padding: "0.5rem",
                }, children: (0, jsx_runtime_1.jsx)(line_1.ResponsiveLineCanvas, Object.assign({}, commonProperties, { theme: {
                        //   background: "rgba(161, 183, 201, 0.06)",
                        background: theme.palette.background.linechart.main,
                        text: {
                            fill: theme.palette.typography.main,
                        },
                        tooltip: {
                            container: {
                                color: theme.palette.typography.inverted,
                            },
                        },
                    }, data: data, xScale: {
                        type: "time",
                        format: "%Y-%m-%dT%H:%M:%S.%L%Z",
                        precision: "minute",
                        min: "auto",
                        max: "auto",
                    }, xFormat: "time:%Y-%m-%d %H:%M:%S.%Z", yScale: {
                        type: "linear",
                        min: "auto",
                        max: "auto",
                        // stacked: boolean('stacked', false),
                    }, axisLeft: {
                        //   legend: "linear scale",
                        legendOffset: -12,
                    }, axisBottom: {
                        format: "%H:%M",
                        tickValues: 10,
                        tickPadding: 10,
                        //   legend: "time scale",
                        legendOffset: 12,
                    }, 
                    // enablePointLabel={true}
                    pointSize: 0, pointBorderWidth: 1, pointBorderColor: {
                        from: "color",
                        modifiers: [["darker", 0.3]],
                    }, 
                    // useMesh={true}
                    enableSlices: false, enableGridX: false, colors: { scheme: "spectral" } })) }))] }));
};
// Exporting as default for React lazy loading; React.lazy() only supports default exports
exports.default = LineChart;
