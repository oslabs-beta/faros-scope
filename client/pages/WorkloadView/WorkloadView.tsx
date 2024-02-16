import { Box, useTheme, useMediaQuery } from "@mui/material";
import {
  CollapsiblePanel,
  FlexBetween,
  Header,
  StatBox,
} from "../../components";

export const WorkloadView = () => {
  const theme = useTheme();
  const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        overflow: "auto",
      }}
    >
      <Box m="1.5rem 2.5rem">
        <FlexBetween>
          <Header
            title="Workload View"
            subtitle="View all workloads in the network"
          />
        </FlexBetween>

        <Box
          mt="20px"
          display="grid"
          gridTemplateColumns="repeat(auto, 1fr)"
          gridAutoRows="minmax(auto, auto)"
          gap="20px"
          sx={{
            "& > div": {
              gridColumn: isNonMediumScreens ? undefined : "span 12",
            },
          }}
        >
          <Box display="grid" gridTemplateColumns="repeat(6, 1fr)" gap="20px">
            <StatBox title="Total Pods" />
            <StatBox title="Total Containers" />
            <StatBox title="Avg CPU Usage / Limit" />
            <StatBox title="Avg CPU Usage / Request" />
            <StatBox title="Avg Memory Usage / Limit" />
            <StatBox title="Avg Memory Usage / Request " />
          </Box>

          <Box
            sx={{
              backgroundColor: theme.palette.background.alt,
              p: "1rem",
              borderRadius: "0.55rem",
            }}
          >
            <CollapsiblePanel title="CPU">
              "I am a CollapsiblePanel"
            </CollapsiblePanel>
          </Box>

          <Box
            sx={{
              // gridColumn:"span 8"
              backgroundColor: theme.palette.background.alt,
              p: "1rem",
              borderRadius: "0.55rem",
            }}
          >
            <CollapsiblePanel title="Memory (non-evictable)">
              "I am a CollapsiblePanel"
            </CollapsiblePanel>
          </Box>

          <Box
            sx={{
              // gridColumn:"span 8"
              backgroundColor: theme.palette.background.alt,
              p: "1rem",
              borderRadius: "0.55rem",
            }}
          >
            <CollapsiblePanel title="Bandwidth">
              "I am a CollapsiblePanel"
            </CollapsiblePanel>
          </Box>

          <Box
            sx={{
              // gridColumn:"span 8"
              backgroundColor: theme.palette.background.alt,
              p: "1rem",
              borderRadius: "0.55rem",
            }}
          >
            <CollapsiblePanel title="Rate of packets">
              "I am a CollapsiblePanel"
            </CollapsiblePanel>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
