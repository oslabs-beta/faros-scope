import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
import { ListViewTable } from '../../components/List-View/ListViewTable';
import './ListViewPage.scss';
import { FlexBetween, Header } from '../../components';
import { Box, useTheme } from '@mui/material';
import { flexbox } from '@mui/system';

export const ListViewPage = () => {
  const muiTheme = useTheme();
  let metricsState = useSelector((state: RootState) => state?.metricsMap);

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
  }

  return (
    // <div className={`list-view ${muiTheme.palette.mode}`}>
    <Box display="flex" flexDirection="column" gap="2rem">
      <FlexBetween>
        <Header title="List View" subtitle="View Pod and Container" />
      </FlexBetween>
      <ListViewTable metricsObject={metricsState.pod} />
      <ListViewTable metricsObject={metricsState.container} />
    </Box>
    // </div>
  );
};
