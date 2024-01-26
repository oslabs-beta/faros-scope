import { Box, useTheme, useMediaQuery } from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid';

import { useGetNodeViewQuery } from '../../services/api';

import {
  FlexBetween,
  Header,
  StatBox,
  CollapsiblePanel,
  LineChart,
} from '../../components';

export const NodeView = () => {
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');
  const { data, isLoading } = useGetNodeViewQuery(undefined, {});
  let podsFormattedData = [];
  let containersFormattedData = [];

  if (data) {
    podsFormattedData = data.kube_pod_count_per_node.map((item, index) => ({
      id: index,
      metricName: item.metricName,
      nodeName: item.labels.node,
      metricValue: item.metricValue,
    }));

    containersFormattedData = data.kube_container_count_per_node.map(
      (item, index) => ({
        id: index,
        nodeName: item.labels.node,
        metricValue: item.metricValue,
      }),
    );
  }

  const columns: GridColDef[] = [
    { field: 'nodeName', headerName: 'metadata.system.node_name', flex: 1 },
    { field: 'metricValue', headerName: 'Latest Value', flex: 1 },
  ];

  return (
    <Box
      className={`node-view-container ${theme.palette.mode}`}
      sx={{
        height: '100%',
        width: '100%',
        overflow: 'auto',
      }}
    >
      <Box m="1.5rem 2.5rem">
        <FlexBetween>
          <Header title="Nodes View" subtitle="View all nodes in the network" />
        </FlexBetween>

        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(auto, 1fr)"
          gridAutoRows="minmax(auto, auto)"
          gap="20px"
          sx={{
            '& > div': {
              gridColumn: isNonMediumScreens ? undefined : 'span 12',
            },
          }}
        >
          {/* ROW 1 */}
          <Box display="grid" gridTemplateColumns="repeat(5, 1fr)" gap="20px">
            <StatBox
              title="Total Nodes"
              value={data && data.kube_nodes_total.metricValue}
            />
            <StatBox
              title="Total Cores"
              value={data && data.kube_total_cores.metricValue}
            />
            <StatBox
              title="Allocatable Cores"
              value={data && data.kube_total_allocatable_cores.metricValue}
            />
            <StatBox
              title="Total Memory"
              value={data && data.kube_total_memory.metricValue}
            />
            <StatBox
              title="Allocatable Memory"
              value={data && data.kube_total_allocatable_memory.metricValue}
            />
          </Box>

          {/* ROW 2 */}
          <Box
            // gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="CPU and Memory">
              <LineChart
                title={'CPU Usage Per Node - Top 50'}
                URL={'clusterUsage'}
              />
              <LineChart
                title={'Memory Usage Per Node - Top 50'}
                URL={'nodeUsage'}
              />
            </CollapsiblePanel>
          </Box>

          {/* ROW 3 */}
          <Box
            // gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
                      <CollapsiblePanel title="Pod and Container Count">
                          <div style={{
                              display: "flex",
                              flexDirection: "column"
                          }}>
                              <p
                                  style={{
                                      paddingLeft: "1rem",
                                      fontSize: "1.05rem",
                              }}
                              >Pod Count</p>
              <DataGrid
                loading={isLoading || !data}
                rows={containersFormattedData}
                columns={columns}
                              />
                          </div>
                          <div
                          style={{
                            display: "flex",
                            flexDirection: "column"
                        }}
                          >
                              <p style={{
                              paddingLeft: "1rem",
                              fontSize: "1.05rem",
                          }}>Container Count</p>
              <DataGrid
                loading={isLoading || !data}
                rows={podsFormattedData}
                columns={columns}
                              />
                              </div>
            </CollapsiblePanel>
          </Box>

          {/* ROW 4 */}
          <Box
            // gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="Bandwidth">
              <LineChart
                title={'Received Bandwidth Per Node - Top 50'}
                URL={'receivedBandwidth'}
              />
              <LineChart
                title={'Received Bandwidth Per Node - Top 50'}
                URL={'podNetwork'}
              />
            </CollapsiblePanel>
          </Box>

          {/* ROW 5 */}
          <Box
            // gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="Rate of Packets">
              <LineChart
                title={'Received packet count per node - Top 50'}
                URL={'packetsReceived'}
              /> 
             <LineChart
                title={'Transmitted packet count per node - Top 50'}
                URL={'packetsTransmitted'}
              />
            </CollapsiblePanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
