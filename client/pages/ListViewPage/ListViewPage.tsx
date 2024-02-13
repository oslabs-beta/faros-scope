import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { formatMetricsMap } from '../../util/formatters/formatMetricsMap';
import { ListViewTable } from '../../components/List-View/ListViewTable';
import './ListViewPage.scss';
import { FlexBetween, Header } from '../../components';
import { Box } from '@mui/material';
import { NameSpaceTable } from '../../components/NameSpaceTable';
import { formatContainerUsage } from '../../util/formatters/formatContainerUsage';
import { useGetContainerUsageQuery } from '../../services/api';
import { lazy } from 'react';
import { GridColDef } from '@mui/x-data-grid';
import React from 'react';

const DataGridWithHeader = lazy(
  () => import('../../components/DataGridWithHeader/DataGridWithHeader')
);

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

const ListViewPage = () => {
  let cUsageData;
  let metricsState = useSelector((state: RootState) => state?.metricsMap);

  const { data } = useGetContainerUsageQuery(undefined, {});

  if (data) {
    cUsageData = formatContainerUsage(data);
  }

  if (metricsState) {
    metricsState = formatMetricsMap(metricsState);
  }

  console.log(metricsState);

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
        <DataGridWithHeader
          title={cUsageData.namespace[0].type}
          columns={columns}
          data={cUsageData.namespace}
          isLoading={false}
        />

        <DataGridWithHeader
          title={cUsageData.pod[0].type}
          columns={columns}
          data={cUsageData.pod}
          isLoading={false}
        />

        <DataGridWithHeader
          title={cUsageData.node[0].type}
          columns={columns}
          data={cUsageData.node}
          isLoading={false}
        />
      </Box>
    </div>
  );
};

export default ListViewPage;
