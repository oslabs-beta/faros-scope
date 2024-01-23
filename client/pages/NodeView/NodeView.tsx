import {
  Box,
  Button,
  Typography,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import { tokens } from '../../theme';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

import {
  FlexBetween,
  Header,
  StatBox,
  CollapsiblePanel,
} from '../../components';

// const VISIBLE_FIELDS = ["name", "rating", "country", "dateCreated", "isAdmin"];

export const NodeView = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const isNonMediumScreens = useMediaQuery('(min-width: 1200px)');
  // const { data, isLoading } = useGetDashboardQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="Nodes View" subtitle="View all nodes in the network" />
      </FlexBetween>

    <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
            '& > div': { gridColumn: isNonMediumScreens ? undefined : 'span 12' }
        }}
    >
        {/* ROW 1 */}
        <StatBox title="Total Nodes" value="1" />
        <StatBox title="Total Cores" value="6" />
        <StatBox title="Allocatable Cores" value="2.82" />
        <StatBox title="Total Memory" value="11.5 GiB" />
        <StatBox title="Allocatable Memory" value="8.23 GiB" />

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          //   gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <CollapsiblePanel title="CPU and Memory"></CollapsiblePanel>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 8"
          //   gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <CollapsiblePanel title="Pod and Container Count"></CollapsiblePanel>
        </Box>

        {/* ROW 4 */}
        <Box
          gridColumn="span 8"
          //   gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <CollapsiblePanel title="Bandwidth"></CollapsiblePanel>
        </Box>

        {/* ROW 5 */}
        <Box
          gridColumn="span 8"
          //   gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          p="1rem"
          borderRadius="0.55rem"
        >
          <CollapsiblePanel title="Rate of Packets"><h1></h1></CollapsiblePanel>
        </Box>
      </Box>
    </Box>
  );
};
