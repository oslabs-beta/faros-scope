import { useEffect, useId } from 'react';
import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { GridColDef } from '@mui/x-data-grid';
import { tokens } from '../../theme';
import { useCustomTheme } from '../../hooks/useCustomTheme';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { useGetNodeViewQuery } from '../../services/api';

import {
  FlexBetween,
  Header,
  StatBox,
  CollapsiblePanel,
  LineChart,
} from '../../components';

export const NodeView = () => {
  const muiTheme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    <div
      className={`node-view-container ${muiTheme.palette.mode}`}
      style={{ width: '100%', height: '100%' }}
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

          {/* ROW 2 */}
          <Box
            gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="CPU and Memory">
              <LineChart />
              <LineChart />
              <LineChart />
              <LineChart />
            </CollapsiblePanel>
          </Box>

          {/* ROW 3 */}
          <Box
            gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="Pod and Container Count">
              <DataGrid
                loading={isLoading || !data}
                rows={containersFormattedData}
                columns={columns}
              ></DataGrid>
              <DataGrid
                loading={isLoading || !data}
                rows={podsFormattedData}
                columns={columns}
              ></DataGrid>
            </CollapsiblePanel>
          </Box>

          {/* ROW 4 */}
          <Box
            gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="Bandwidth"></CollapsiblePanel>
          </Box>

          {/* ROW 5 */}
          <Box
            gridColumn="span 8"
            backgroundColor={theme.palette.background.alt}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="Rate of Packets"></CollapsiblePanel>
          </Box>
        </Box>
      </Box>
    </div>
  );
};
