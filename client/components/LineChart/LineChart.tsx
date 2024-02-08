import { useTheme, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
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
  clusterUsage: `http://35.227.104.153:31374/api/v1/query_range?query=sum by (cluster_ip) (rate(container_cpu_user_seconds_total[5m]))&start=${tenMinutesAgo}&end=${now}&step=300`,
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
        height: '50vh',
        borderRadius: '0.45rem',
        backgroundColor: 'white',
        // backgroundColor: theme.palette.neutral.light,
        color: 'black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overFlow: 'visible',
      }}
    >
      <Box>
        <Typography
          sx={{
            color: 'black',
            fontSize: '1.05rem',
            border: '1px solid black',
            height: '100%',
          }}
        >
          {title}
        </Typography>
      </Box>

      {!data && <CircularProgress />}
      {data && (
        <ResponsiveLineCanvas
          data={data}
          curve="natural"
          margin={{ top: 5, right: 60, bottom: 40, left: 60 }} // Adjust left margin for potential axisLeft use
          xScale={{
            type: 'time',
            format: '%Y-%m-%dT%H:%M:%S.%LZ',
            precision: 'second',
          }}
          yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false,
          }}
          axisTop={null}
          //   axisRight={{
          //     tickValues: 'auto', // Use 'auto' to dynamically adjust tick values based on data
          //     tickSize: 5,
          //     tickPadding: 5,
          //     tickRotation: 0,
          //     format: '.2s',
          //     legend: 'Your Legend', // Add a legend if useful
          //     legendOffset: -40,
          //     legendPosition: 'middle',
          //   }}
          axisBottom={{
            format: '%H:%M', // Consider if this format suits your data's temporal resolution
            tickValues: 'every 2 hours', // Adjust based on your data's time range
            legend: 'Time of Day',
            legendOffset: 36,
            legendPosition: 'middle',
          }}
          //   axisLeft={{ // Optionally enable and configure the left axis for better readability
          //     orient: 'left',
          //     tickSize: 5,
          //     tickPadding: 5,
          //     tickRotation: 0,
          //     legend: 'Metric Value',
          //     legendOffset: -40,
          //     legendPosition: 'middle',
          //     format: '.2s',
          //   }}
          colors={{ scheme: 'category10' }}
          enablePoints={false} // Keep disabled for performance, enable if needed for clarity
          enableGridX={true} // Optionally enable for better readability
          enableGridY={true} // Enable Y grid for better data value readability
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
        />
      )}
    </Paper>
  );
};

// Exporting as default for React lazy loading; React.lazy() only supports default exports
export default LineChart;
