import { useTheme, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import { ResponsiveLineCanvas } from '@nivo/line';
import './linechart.scss';

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
  clusterUsage: `http://35.227.104.153:31374/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
  nodeUsage: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (node) (rate(node_cpu_seconds_total{mode!="idle"}[5m])) / sum by (node) (kube_pod_container_resource_requests{resource="cpu"})&start=${tenMinutesAgo}&end=${now}&step=14`,
  podNetwork: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_receive_bytes_total[15m]))&start=${tenMinutesAgo}&end=${now}&step=100`,
  packetsTransmitted: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (rate(container_network_transmit_packets_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=200`,
  packetsReceived: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (pod) (rate(container_network_receive_packets_total{pod!=""}[5m]))&start=${tenMinutesAgo}&end=${now}&step=60`,
  nodeUsageURL: `http://35.227.104.153:31374/api/v1/query_range?query= sum by (kubernetes_io_hostname) (container_memory_usage_bytes)&start=${tenMinutesAgo}&end=${now}&step=150`,
  receivedBandwidth: `http://35.227.104.153:31374/api/v1/query_range?query=sum by (node) (rate(node_network_receive_bytes_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=150`,
};

interface Props {
  title: string;
  URL: string;
}

const LineChart = ({ title, URL }: Props) => {
  const theme = useTheme();
  const [data, setData] = useState<null>(null);
  const [isLegendExpanded, setIsLegendExpanded] = useState(false);

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
    <Paper
      variant="outlined"
      sx={{
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
      }}
    >
          <Typography
        sx={{
          color: 'white',
          fontSize: '1.05rem',
        }}
      >
        {title}
    </Typography> 

      {!data && <CircularProgress />}
      {data && (
              <ResponsiveLineCanvas
                  enableArea={true}
                  enableGridX={false}
          data={data}
          curve="linear"
                  //   margin={{ top: 10, right: 50, bottom: 50, left: 90 }}
                  margin={{top: 5, right: 20, bottom: 40, left: 20}}
          xScale={{
            type: 'time',
            format: '%Y-%m-%dT%H:%M:%S.%LZ',
            precision: 'second',
          }}
        //   yScale={{ type: 'linear', stacked: true, min: 'auto', max: 'auto' }}
          axisTop={null}
          axisLeft={null}
          axisRight={{
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
        }}
          axisBottom={{
            format: '%H:%M',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
       
        />
      )}
    </Paper>
  );
};

// Exporting as default for React lazy loading; React.lazy() only supports default exports
export default LineChart;
