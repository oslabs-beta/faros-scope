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
const react_1 = require("react");
const line_1 = require("@nivo/line");
require("./linechart.scss");
// Get the current time in seconds (Unix timestamp)
const now = Math.floor(Date.now() / 1000);
// Calculate the start time (10 minutes ago)
const tenMinutesAgo = now - 50000 * 2;
const URLObject = {
    clusterUsage: `http://35.227.104.153:31374/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
    nodeUsage: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`,
    podNetwork: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`,
    packetsTransmitted: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`,
    packetsReceived: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m]))&start=${tenMinutesAgo}&end=${now}&step=60`,
    nodeUsageURL: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`,
    receivedBandwidth: `http://35.227.104.153:31374/api/v1/query_range?query=sum by (node) (rate(node_network_receive_bytes_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
};
const LineChart = ({ title, URL }) => {
    const theme = (0, material_1.useTheme)();
    const [data, setData] = (0, react_1.useState)(null);
    const [isLegendExpanded, setIsLegendExpanded] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        (function () {
            return __awaiter(this, void 0, void 0, function* () {
                yield fetch(URLObject[URL])
                    .then((res) => {
                    return res.json();
                })
                    .then(({ data }) => {
                    const XY = data.result.map((result) => {
                        console.log(result);
                        const temp = result.values.map((point) => {
                            return { x: new Date(point[0]), y: Number(point[1]) };
                        });
                        return {
                            data: temp,
                            id: Object.values(result.metric)[0] || 'placeholder',
                        };
                    });
                    setData(XY);
                });
            });
        })();
    }, []);
    return ((0, jsx_runtime_1.jsxs)(Paper_1.default, { variant: "outlined", sx: {
            width: '100%',
            // height: '40vh',
            borderRadius: '0.45rem',
            backgroundColor: "white",
            // backgroundColor: theme.palette.neutral.light,
            color: 'black',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }, children: [(0, jsx_runtime_1.jsx)(material_1.Typography, { sx: {
                    color: 'white',
                    fontSize: '1.05rem',
                }, children: title }), !data && (0, jsx_runtime_1.jsx)(CircularProgress_1.default, {}), data && ((0, jsx_runtime_1.jsx)(line_1.ResponsiveLineCanvas, { enableArea: true, enableGridX: false, data: data, curve: "linear", 
                //   margin={{ top: 10, right: 50, bottom: 50, left: 90 }}
                margin: { top: 5, right: 20, bottom: 40, left: 20 }, xScale: {
                    type: 'time',
                    format: '%Y-%m-%dT%H:%M:%S.%LZ',
                    precision: 'second',
                }, 
                //   yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
                axisTop: null, axisLeft: null, axisRight: {
                    tickValues: [
                        0,
                        500,
                        1000,
                        1500,
                        2000,
                        2500
                    ],
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    format: '.2s',
                    legendOffset: 0
                }, axisBottom: {
                    format: '%H:%M',
                    legendOffset: 36,
                    legendPosition: 'middle',
                } }))] }));
};
// Exporting as default for React lazy loading; React.lazy() only supports default exports
exports.default = LineChart;
