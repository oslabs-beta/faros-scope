import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
import { ListViewTable } from '../../components/List-View/ListViewTable';
import './ListViewPage.scss';
import { FlexBetween, Header } from '../../components';
import { Box, useTheme } from '@mui/material';
import { NameSpaceTable } from '../../components/NameSpaceTable';
import { formatContainerUsage } from '../../util/formatters/formatContainerUsage';
import { useGetContainerUsageQuery } from '../../services/api';

const ListViewPage = () => {
  const muiTheme = useTheme();
  let cUsageData;
  let metricsState = useSelector((state: RootState) => state?.metricsMap);

  const { data, isLoading } = useGetContainerUsageQuery(undefined, {});

  if (data) {
    cUsageData = formatContainerUsage(data);
  }

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
  }

  if (!data) return;

  return (
    <div className={`list-view`}>
      <Box display="flex" flexDirection="column" gap="2rem">
        <FlexBetween>
          <Header title="List View" subtitle="View Pod and Container" />
        </FlexBetween>
        <ListViewTable metricsObject={metricsState.pod} />
        <ListViewTable metricsObject={metricsState.container} />
        <NameSpaceTable cUsageMetrics={cUsageData.namespace} />
        <NameSpaceTable cUsageMetrics={cUsageData.pod} />
        <NameSpaceTable cUsageMetrics={cUsageData.node} />
      </Box>
    </div>
  );
};

export default ListViewPage