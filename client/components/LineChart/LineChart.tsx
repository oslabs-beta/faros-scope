import { useTheme, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { ResponsiveLineCanvas } from '@nivo/line';
import './linechart.scss';
import { ResponsiveLineCanvas } from '@nivo/line';

interface RecievedData {
  metric: { [key: string]: string };
  values: number[][];
}

interface URLObject {
  clusterUsage: string;
  nodeUsage: string;
  podNetwork: string;
  packetsTransmitted: string;
  packetsReceived: string;
  nodeUsageURL: string;
  receivedBandwidth: string;
  [key: string]: string;
}

// Get the current time in seconds (Unix timestamp)
const now = Math.floor(Date.now() / 1000);

// Calculate the start time (10 minutes ago)
const tenMinutesAgo = now - 50000 * 2;
const URLObject: URLObject = {
  clusterUsage: `http://104.198.235.133:80/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
  nodeUsage: `http://104.198.235.133/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`,
  podNetwork: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`,
  packetsTransmitted: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`,
  packetsReceived: `http://104.198.235.133/api/v1/query_range?query= sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m]))&start=${tenMinutesAgo}&end=${now}&step=60`,
  nodeUsageURL: `http://104.198.235.133/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`,
  receivedBandwidth: `http://104.198.235.133/api/v1/query_range?query=sum by (node) (rate(node_network_receive_bytes_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
};

interface Props {
  title: string;
  URL: string;
}

const LineChart = ({ title, URL }: Props) => {
  const theme = useTheme();
  const [data, setData] = useState<null>(null);

  useEffect(() => {
    (async function () {
      await fetch(URLObject[URL])
        .then((res) => {
          return res.json();
        })
        .then(({ data }) => {
          const XY = data.result.map((result: RecievedData) => {
            console.log(result);
            const temp = result.values.map((point: number[]) => {
              return { x: new Date(point[0]), y: Number(point[1]) };
            });
            return {
              data: temp,
              id: Object.values(result.metric)[0] || 'placeholder',
            };
          });
          setData(XY);
        });
    })();
  }, []);

  return (
      <div>
          <Typography sx={{
              color: "white",
              fontSize: "1.05rem"
          }}>
              {title}
          </Typography>
      <Paper
        sx={{
          width: '100%',
          height: '40vh',
          borderRadius: '20px',
          backgroundColor: theme.palette.neutral.light,
          color: 'black',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        {!data && <CircularProgress />}
        {data && (
          <ResponsiveLineCanvas
            data={data}
            curve='linear'
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{
              type: 'time',
              format: '%Y-%m-%dT%H:%M:%S.%LZ',
              precision: 'second',
            }}

            axisTop={null}
            axisRight={null}
            axisBottom={{
              format: '%H:%M',
              legendOffset: 36,
              legendPosition: 'middle',
            }}
            legends={[
              {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
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
          />
        )}
      </Paper>
    </div>
  );
};

// Exporting as default for React lazy loading; React.lazy() only supports default exports
export default LineChart;
