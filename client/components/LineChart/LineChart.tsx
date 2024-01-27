import { useTheme, Typography } from '@mui/material';
import { LineChart as LChart } from '@mui/x-charts';
import { LinePlot, MarkPlot } from '@mui/x-charts/LineChart';
import { ChartsXAxis } from '@mui/x-charts/ChartsXAxis';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { ResponsiveChartContainer } from '@mui/x-charts/ResponsiveChartContainer';
import { useEffect, useState } from 'react';
import './linechart.scss';
interface ChartData {
  series: [{ data: number[]; label: string }];
  xAxis: [{ data: string[]; scaleType: string }];
}

// Get the current time in seconds (Unix timestamp)
const now = Math.floor(Date.now() / 1000);

// Calculate the start time (10 minutes ago)
const tenMinutesAgo = now - 50000 * 2;

const URLObject = {
  clusterUsage: `http://104.198.235.133:80/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
  nodeUsage: `http://104.198.235.133/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`,
  podNetwork: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`,
  packetsTransmitted: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`,
  packetsReceived: `http://104.198.235.133/api/v1/query_range?query= sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m]))&start=${tenMinutesAgo}&end=${now}&step=60`,
  nodeUsageURL: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`,
  receivedBandwidth: `http://104.198.235.133/api/v1/query_range?query=sum by (node) (rate(node_network_receive_bytes_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
};

export const LineChart = ({ title, URL }) => {
  const theme = useTheme();
  const [data, setData] = useState<ChartData | null>(null);

  useEffect(() => {
    (async function () {
      await fetch(URLObject[URL])
        .then((res) => {
          return res.json();
        })
        .then(({ data }) => {
          console.log(data);
          const xDatas = data.result.map((result: any[]) =>
            result.values.map((point) => point[0]),
          );

          const yDatas = data.result.map((result: any[]) =>
            result.values.map((point) => Number(point[1])),
          );

          const labels = data.result.map(
            (result) => Object.values(result.metric)[0],
          );

          const seriesData = yDatas.map((el, i) => ({
            data: el,
            label: labels[i],
            showMark: false,
          }));

          const xData = data.result[0].values.map((point) => {
            return new Date(point[0] * 1000);
          });

          const yData = data.result[0].values.map((point) => Number(point[1]));

          setData({
            series: seriesData,
            xAxis: [
              {
                scaleType: 'time',
                data: xData,
              },
            ],
          });
        });
    })();
  }, []);

  return (
    // <div className={`page ${theme.palette.mode}`}>
    <div>
      <Typography
        sx={{
          color: 'white',
          fontSize: '1.15rem',
        }}
      >
        {title}
      </Typography>
      {/* <p
        styles={{
          colors: 'white',
          fontFamily: "Source Sans 3 !important",
                  paddingLeft: '0.5rem',
                    fontSize: '1rem',
        }}
      >
        {title}
      </p> */}
      <Paper
        sx={{
          width: '100%',
          height: '40vh',
          borderRadius: '20px',
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {!data && <CircularProgress />}
        {data && (
          <LChart
            series={data.series}
            xAxis={data.xAxis}
            sx={{
              width: '100%',
              height: '100%',
              '& .MuiChartsAxis-root': {
                fill: `${theme.palette.typography.main}`,
                '& .MuiChartsAxis-tick': {
                  stroke: 'black',
                },
                '& .MuiChartsAxis-tickLabel': {
                  fill: `${theme.palette.typography.main}`,
                },
                '& .MuiChartsAxis-line': {
                  stroke: 'black',
                },
                svg: {
                  fill: 'black',
                },
              },
            }}
            slotProps={{ legend: { hidden: 'true' } }}
          />
        )}
        {/* </div> */}
      </Paper>
    </div>
  );
};
