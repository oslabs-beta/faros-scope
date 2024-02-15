import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
import { ListViewTable } from '../../components/List-View/ListViewTable';
import './ListViewPage.scss';
import { Box } from '@mui/material';
import { formatContainerUsage } from '../../util/formatters/formatContainerUsage';
import {
  useGetClusterMetricsMapQuery,
  useGetContainerUsageQuery,
  useGetClusterInfoQuery,
} from '../../services/api';
import { lazy } from 'react';
import { GridColDef } from '@mui/x-data-grid';

const DataGridWithHeader = lazy(
  () => import('../../components/DataGridWithHeader/DataGridWithHeader')
);

// Columns for Container Usage by NameSpace
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'left',
    align: 'left',
    // width: 160,
    flex: 1,
    editable: true,
  },
  {
    field: 'CPU',
    headerName: 'CPU (num cores)',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(5);
    },
  },
  {
    field: 'MEM',
    headerName: 'MEM (MB)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    // width: 130,
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
];

// Columns for ListView
const columnsListView: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    editable: true,
  },
  {
    field: 'cpuUsage',
    headerName: 'CPU Usage (MB)',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'cpuUsagePct',
    headerName: 'CPU Usage (%)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUsage',
    headerName: 'MEM Usage (MB)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUsagePct',
    headerName: 'MEM Usage (%)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
];

// Columns for List Container and Nodes Metrics
const columnsListViewUtil: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'name',
    headerName: 'Name',
    headerAlign: 'left',
    align: 'left',
    flex: 1,
    editable: true,
  },
  {
    field: 'cpuUsage',
    headerName: 'CPU Usage (MB)',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'cpuUtilPct',
    headerName: 'CPU Usage (%)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUsage',
    headerName: 'MEM Usage (MB)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUtilPct',
    headerName: 'MEM Usage (%)',
    headerAlign: 'center',
    align: 'center',
    type: 'number',
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
];

const ListViewPage = () => {
  let cUsageData;
  let metricsState = useSelector((state: RootState) => state?.metricsMap);
  console.log('Metrics State ===>', metricsState?.metricsMap);
  const { data } = useGetContainerUsageQuery(undefined, {});
  useGetClusterMetricsMapQuery(undefined, { pollingInterval: 5000 });
  const { data: clusterInfo } = useGetClusterInfoQuery(undefined, {});

  if (data) {
    cUsageData = formatContainerUsage(data);
  }

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
  }

  const capitalizeFirstLetter = (s: string) => {
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  if (
    !data ||
    !metricsState.pod ||
    !metricsState.container ||
    !metricsState.node
  )
    return;

  return (
    <div className={`list-view`}>
      <Box display="flex" flexDirection="column" gap="2rem">
        <DataGridWithHeader
          title={capitalizeFirstLetter(metricsState?.container[0]?.type)}
          columns={columnsListView}
          data={metricsState?.container}
          isLoading={false}
        />

        <DataGridWithHeader
          title={capitalizeFirstLetter(metricsState?.pod[0]?.type)}
          columns={columnsListView}
          data={metricsState?.pod}
          isLoading={false}
        />

        <DataGridWithHeader
          title={capitalizeFirstLetter(metricsState?.node[0]?.type)}
          columns={columnsListViewUtil}
          data={metricsState?.node}
          isLoading={false}
        />

        <DataGridWithHeader
          title={`Container Usage by ${capitalizeFirstLetter(
            cUsageData.namespace[0].type
          )} (Aggr.)`}
          columns={columns}
          data={cUsageData.namespace}
          isLoading={false}
        />

        <DataGridWithHeader
          title={`Container Usage by ${capitalizeFirstLetter(
            cUsageData.pod[0].type
          )} (Aggr.)`}
          columns={columns}
          data={cUsageData.pod}
          isLoading={false}
        />

        <DataGridWithHeader
          title={`Container Usage by ${capitalizeFirstLetter(
            cUsageData.node[0].type
          )} (Aggr.)`}
          columns={columns}
          data={cUsageData.node}
          isLoading={false}
        />
      </Box>
    </div>
  );
};

export default ListViewPage;
