import { useEffect, useState } from 'react';
// import './GraphPage.scss';
import { LineChart as LChart} from '@mui/x-charts';
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

const getClusterUsageURL = `http://104.198.235.133:80/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=14`;
const getNodeUsageURL = `http://104.198.235.133/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`;
const networkByNodeURL = `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`;
const allPodNetworkURL = `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`;
const podContainerPacketsURL = `http://104.198.235.133/api/v1/query_range?query= topk(5, sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m])))&start=${tenMinutesAgo}&end=${now}&step=60`;
const nodeUsageURL = `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`;

export const LineChart = () => {
  const { theme: customTheme } = useCustomTheme();
  const theme = useTheme();
  console.log(theme);
  const [data, setData] = useState<ChartData | null>(null);

  useEffect(() => {
    (async function () {
      await fetch(getClusterUsageURL)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          const xDatas = data.data.result.map((result) =>
            result.values.map((point) => point[0]),
          );
          console.log(xDatas);
          const yDatas = data.data.result.map((result) =>
            result.values.map((point) => Number(point[1])),
          );
          const labels = data.data.result.map(
            (result) => Object.values(result.metric)[0],
          );
          const seriesData = yDatas.map((el, i) => ({
            data: el,
            label: labels[i],
            showMark: false,
          }));
          console.log(seriesData);
          const xData = data.data.result[0].values.map((point) => point[0]);
          const yData = data.data.result[0].values.map((point) =>
            Number(point[1]),
          );
          setData({
            series: seriesData,
            xAxis: [
              {
                scaleType: 'utc',
                data: xData,
              },
            ],
          });
        });
    })();
  }, []);

  if (!data) {
    return <div className={`page ${customTheme}`}>Loading</div>;
  }

  return (
      <LChart
        series={data.series}
        xAxis={data.xAxis}
        width={500}
        height={500}
        // style={{
        //   marginTop: '100px',
        // }}
        sx={{
          '& .MuiChartsAxis-root': {
            stroke: customTheme === 'dark' ? '#fff' : '#000',
            '& .MuiChartsAxis-tick': {
              stroke: customTheme === 'dark' ? '#fff' : '#000',
            },
            '& .MuiChartsAxis-tickLabel': {
              fill: customTheme === 'dark' ? '#fff' : '#000',
            },
            '& .MuiChartsAxis-line': {
              stroke: customTheme === 'dark' ? '#fff' : '#000',
            },
          },
        }}
      />
  );
};
