import { lazy, Suspense } from "react";
// ! Review React docs regarding ErrorBoundary
// TODO: Add error boundary
// import { ErrorBoundary } from "react-error-boundary";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { GridColDef } from "@mui/x-data-grid";

// Use lazy to defer loading component’s code until it is rendered for the first time.
const LineChart = lazy(() => import("../../components/LineChart/LineChart"));
const DataGridWithHeader = lazy(
  () => import("../../components/DataGridWithHeader/DataGridWithHeader")
);

import { useGetNodeViewQuery } from "../../services/api";

import {
  CollapsiblePanel,
//   FlexBetween,
//   Header,
  StatBox,
} from "../../components";

const columns: GridColDef[] = [
  {
    field: "nodeName",
    headerName: "metadata.system.node_name",
    headerAlign: "left",
    flex: 1,
    align: "left",
  },
  {
    field: "metricValue",
    headerName: "Latest Value",
    headerAlign: "center",
    width: 150,
    //   flex: 1,
    align: "right",
  },
];

const NodeView = () => {
  const theme = useTheme();

  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
  const { data, isLoading } = useGetNodeViewQuery(undefined, {});
  console.log(data);
  let podsFormattedData = [];
  let containersFormattedData = [];

  if (data) {
    podsFormattedData = data.kube_pod_count_per_node.map(
      (item: any, index: number) => ({
        id: index,
        metricName: item.metricName,
        nodeName: item.labels.node,
        metricValue: item.metricValue,
      })
    );

    containersFormattedData = data.kube_container_count_per_node.map(
      (item: any, index: number) => ({
        id: index,
        nodeName: item.labels.node,
        metricValue: item.metricValue,
      })
    );
  }

  return (
    <Box className="NodeView" height="100%" width="100%">
      <Box m="1.5rem 2.5rem">
        {/* <FlexBetween>
          <Header title="Nodes View" subtitle="View all nodes in the network" />
        </FlexBetween> */}

        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(1fr)"
          gridAutoRows="minmax(auto, auto)"
          gap="20px"
          sx={{
            "& > div": {
              gridColumn: isNonMediumScreens ? undefined : "span 12",
            },
          }}
        >
          {/* ROW 1 */}
          <Box
            display="grid"
            gridTemplateColumns="repeat(auto-fill, 200px);"
            gap="20px"
          >
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
            component="div"
            // gridColumn="span 8"
            sx={{ backgroundColor: theme.palette.background.alt }}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="CPU and Memory">
              <Suspense fallback={<CircularProgress />}>
                <LineChart
                  title={"CPU Usage Per Node - Top 50"}
                  URL={"clusterUsage"}
                />
              </Suspense>
              <Suspense fallback={<CircularProgress />}>
                <LineChart
                  title={"Memory Usage Per Node - Top 50"}
                  URL={"nodeUsage"}
                />
              </Suspense>
            </CollapsiblePanel>
          </Box>

          {/* ROW 3 */}
          <Box
            component="div"
            sx={{ backgroundColor: theme.palette.background.alt }}
            p="1rem"
            borderRadius="0.55rem"
          >
            <CollapsiblePanel title="Pod and Container Count">
              <DataGridWithHeader
                title={"Pod Count"}
                columns={columns}
                data={podsFormattedData}
                isLoading={isLoading}
              />
              <DataGridWithHeader
                title={"Container Count"}
                columns={columns}
                data={containersFormattedData}
                isLoading={isLoading}
              />
            </CollapsiblePanel>
          </Box>

          {/* ROW 4 */}
          <Box
            component="div"
            // gridColumn="span 8"
            sx={{ backgroundColor: theme.palette.background.alt }}
            p="1rem"
            borderRadius="0.55rem"
          >
            {/* <CollapsiblePanel title="Bandwidth">
              <Suspense fallback={<CircularProgress />}>
                <LineChart
                  title={"Received Bandwidth Per Node - Top 50"}
                  URL={"receivedBandwidth"}
                />
              </Suspense>
              <Suspense fallback={<CircularProgress />}>
                <LineChart
                  title={"Received Bandwidth Per Node - Top 50"}
                  URL={"podNetwork"}
                />
              </Suspense>
            </CollapsiblePanel> */}
          </Box>

          {/* ROW 5 */}
          <Box
            component="div"
            // gridColumn="span 8"
            sx={{ backgroundColor: theme.palette.background.alt }}
            p="1rem"
            borderRadius="0.55rem"
          >
            {/* <CollapsiblePanel title="Rate of Packets">
              <Suspense fallback={<CircularProgress />}>
                <LineChart
                  title={"Received packet count per node - Top 50"}
                  URL={"packetsReceived"}
                />
              </Suspense>
              <Suspense fallback={<CircularProgress />}>
                <LineChart
                  title={"Transmitted packet count per node - Top 50"}
                  URL={"packetsTransmitted"}
                />
              </Suspense>
            </CollapsiblePanel> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NodeView;
