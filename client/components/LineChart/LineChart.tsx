import { useEffect, useState, useContext } from 'react';
import { useEffect, useState, useContext } from 'react';
import './linechart.scss';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import { LineChart as LChart } from '@mui/x-charts';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import { useTheme } from '@mui/material';
interface ChartData {
  series: [{ data: number[]; label: string }];
  xAxis: [{ data: string[]; scaleType: string }];
}

interface ResultData {
  metric: { [key: string]: string };
  values: [];
}

// Get the current time in seconds (Unix timestamp)
const now = Math.floor(Date.now() / 1000);

// Calculate the start time (10 minutes ago)
const tenMinutesAgo = now - 60000 * 2;

const URLObject = {
  clusterUsage: `http://104.198.235.133:80/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
  nodeUsage: `http://104.198.235.133/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`,
  nodeNetwork: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`,
  podNetwork: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`,
  containerPackets: `http://104.198.235.133/api/v1/query_range?query= topk(5, sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m])))&start=${tenMinutesAgo}&end=${now}&step=60`,
  nodeUsageURL: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`,
};

export const LineChart = () => {
  const muiTheme = useTheme();
  const [data, setData] = useState<ChartData | null>(null);

    const colorMode = useContext(ColorModeContext);
    // colorMode.toggleColorMode(); 

  useEffect(() => {
    (async function () {
      await fetch(URLObject[URL])
        .then((res) => {
          return res.json();
        })
        .then(({ data }) => {
          const xDatas = data.result.map((result) =>
            result.values.map((point) => point[0]),
          );

          const yDatas = data.result.map((result) =>
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

  if (!data) {
    return <div className={`page ${muiTheme.palette.mode}`}>Loading</div>;
  }

  return (
    <div className={`page ${muiTheme.palette.mode}`}>
      <LChart
        series={data.series}
        xAxis={data.xAxis}
        sx={{
          width: '100%',
          height: '100%',
          '& .MuiChartsAxis-root': {
            stroke: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
            '& .MuiChartsAxis-tick': {
              stroke: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
            },
            '& .MuiChartsAxis-tickLabel': {
              fill: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
            },
            '& .MuiChartsAxis-line': {
              stroke: muiTheme.palette.mode === 'dark' ? '#fff' : '#000',
            },
            svg: {
              fill: muiTheme.palette.mode === 'dark' ? 'red' : '#000',
            },
          },
        }}
      />
    </div>
  );
};
