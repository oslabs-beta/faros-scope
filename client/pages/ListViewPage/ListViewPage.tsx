import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
// import { ListViewTable } from '../../components/List-View/ListViewTable';
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
  { field: 'id', headerName: 'ID', width: 50 },
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
    flex: 1,
    editable: true,
  },
  {
    field: 'CPU',
    headerName: 'CPU (%)',
    width: 130,
    flex: 1,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(5);
    },
  },
  {
    field: 'MEM',
    headerName: 'MEM (bytes)',
    type: 'number',
    width: 130,
    flex: 1,
    editable: true,
    // valueGetter: (params) => {
    //   return params.value.toFixed(2);
    // },
  },
];

// Columns for ListView
const columnsListView: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
    editable: true,
  },
  {
    field: 'cpuUsage',
    headerName: 'Cpu Usage',
    width: 130,
    editable: true,
  },
  {
    field: 'cpuUsagePct',
    headerName: 'CPU Usage (%)',
    type: 'number',
    width: 130,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUsage',
    headerName: 'memUsage',
    type: 'number',
    width: 130,
    editable: true,
  },
  {
    field: 'memUsagePct',
    headerName: 'Mem Usage (%)',
    type: 'number',
    width: 130,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
];

// Columns for List Container and Nodes Metrics
const columnsListViewUtil: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 160,
    editable: true,
  },
  {
    field: 'cpuUsage',
    headerName: 'Cpu Usage',
    width: 130,
    editable: true,
  },
  {
    field: 'cpuUtilPct',
    headerName: 'CPU Usage (%)',
    type: 'number',
    width: 130,
    editable: true,
    valueGetter: (params) => {
      return params.value.toFixed(2);
    },
  },
  {
    field: 'memUsage',
    headerName: 'memUsage',
    type: 'number',
    width: 130,
    editable: true,
  },
  {
    field: 'memUtilPct',
    headerName: 'Mem Usage (%)',
    type: 'number',
    width: 130,
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
  const { data: _clusterInfo } = useGetClusterInfoQuery(undefined, {});

  if (data) {
    cUsageData = formatContainerUsage(data);
  }

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
    console.log('AfterFormat', metricsState);
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
  console.log('metricsState pod?', metricsState.pod);
  console.log('metricsState node?', metricsState.node);
  console.log('metricsState container', metricsState.container);

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
          )}`}
          columns={columns}
          data={cUsageData.namespace}
          isLoading={false}
        />

        <DataGridWithHeader
          title={`Container Usage by ${capitalizeFirstLetter(
            cUsageData.pod[0].type
          )}`}
          columns={columns}
          data={cUsageData.pod}
          isLoading={false}
        />

        <DataGridWithHeader
          title={`Container Usage by ${capitalizeFirstLetter(
            cUsageData.node[0].type
          )}`}
          columns={columns}
          data={cUsageData.node}
          isLoading={false}
        />
      </Box>
    </div>
  );
};

export default ListViewPage;
