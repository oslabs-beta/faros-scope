// import { useEffect, useState } from 'react';
// import './GraphPage.scss';
// import { LineChart } from '@mui/x-charts';
// import { useTheme } from '@mui/material';
// interface ChartData {
//   series: [{ data: number[]; label: string }];
//   xAxis: [{ data: string[]; scaleType?: string }];
// }

// interface ResultData {
//   metric: { [key: string]: string };
//   values: [];
// }

// // Create a new Date object representing the current time
// let currentDate = new Date();

// // Calculate the time for 1 hour ago
// let oneHourAgo = new Date(currentDate.getTime() - 60 * 60 * 1000);

// // Get the epoch time (in seconds) for 1 hour ago
// let epochTimeOneHourAgo = Math.floor(oneHourAgo.getTime() / 1000);

// // Get the current time in seconds (Unix timestamp)
// const now = Math.floor(Date.now() / 1000);

// // Calculate the start time (10 minutes ago)
// const tenMinutesAgo = now - 60000;

// const getClusterUsageURL = `http://104.198.235.133:80/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`;
// const getNodeUsageURL = `http://104.198.235.133/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`;
// const networkByNodeURL = `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`;
// const allPodNetworkURL = `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`;
// const podContainerPacketsURL = `http://104.198.235.133/api/v1/query_range?query= topk(5, sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m])))&start=${tenMinutesAgo}&end=${now}&step=60`;
// const nodeUsageURL = `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`;

// export const GraphPage = () => {
//   const muiTheme = useTheme();
//   const [data, setData] = useState<ChartData | null>(null);

//   useEffect(() => {
//     (async function () {
//       await fetch(getClusterUsageURL)
//         .then((res) => {
//           return res.json();
//         })
//         .then((data) => {

//           const xDatas = data.data.result.map((result) =>
//             result.values.map((point) => point[0]),
//           );

//           const yDatas = data.data.result.map((result) =>
//             result.values.map((point) => Number(point[1])),
//           );
            
//           const labels = data.data.result.map(
//             (result) => Object.values(result.metric)[0],
//           );
//           const seriesData = yDatas.map((el, i) => ({
//             data: el,
//             label: labels[i],
//             showMark: false,
//           }));
//           const xData = data.data.result[0].values.map((point) => point[0]);
//           const yData = data.data.result[0].values.map((point) =>
//             Number(point[1]),
//           );
//           setData({
//             series: seriesData,
//             xAxis: [
//               {
//                 data: xData,
//               },
//             ],
//           });
//         });
//     })();
//   }, []);

//   if (!data) {
//     return <div className={`page ${muiTheme.palette.mode}`}>Loading</div>;
//   }

//   return (
//     <div className={`page ${muiTheme.palette.mode}`}>
//       <LineChart
//         series={data.series}
//         xAxis={[{ data: data.xAxis[0].data, scaleType: 'time' }]}
//         // width={2000}
//         // height={1000}
//         sx={{
//           // width: '100% !important',
//           // height: '100% !important',
//           marginTop: '100px',
//           '& .MuiChartsAxis-root': {
//             stroke: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
//             '& .MuiChartsAxis-tick': {
//               stroke: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
//             },
//             '& .MuiChartsAxis-tickLabel': {
//               fill: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
//             },
//             '& .MuiChartsAxis-line': {
//               stroke: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
//             },
//           },
//         }}
//       />
//     </div>
//   );
// };
