import { useTheme } from '@mui/material';
import { useRef } from 'react';
// import './graph.scss';
import { metricsApi } from '../../services/api';
import GraphResponsiveNetwork from './GraphNetwork';
import './Graph.module.scss';
import './graph.scss';

/**
 * Graph component
 * @returns ReactNode
 */

/* export */ const Graph = () => {
  const muiTheme = useTheme();
  const { data, isSuccess } = metricsApi.endpoints.getClusterInfo.useQueryState(
    undefined,
    {},
  );

    console.log('Returned Data', data);
  const draggableContainer = useRef<HTMLDivElement>(null);

  const graphData: {
    nodes: {
      id: string;
      label?: string;
      size: number;
      color: string;
      nodeId?: string;
      height?: number;
      type: string;
      image?: string;
    }[];
    links: {
      source: string;
      target?: string;
      distance: number;
    }[];
  } = {} as any;

  if (isSuccess && data && data.nodes) {
    console.log('data', data);
    //! TEMPORARY, PASS IN REAL NAMESPACE WHEN AVAILABLE
    graphData.nodes = [
      {
        id: 'Cluster',
        label: 'Cluster',
        height: 1.5,
        size: 40,
        color: 'green',
        type: 'cluster',
      },
    ];

    graphData.links = [];
    for (const namespace in data.namespaces) {
      graphData.nodes.push({
        id: namespace,
        label: namespace,
        height: 0,
        size: 30,
        color: 'orange',
        type: 'namespace',
      });

      graphData.links.push({
        source: namespace,
        target: 'Cluster',
        distance: 50,
      });
    }

    for (const service in data.serviceToPodsMapping) {
      graphData.nodes.push({
        id: service,
        label: service,
        height: 0,
        size: 20,
        color: 'blue',
        type: 'service',
      });

      if (service !== 'kubernetes') {
        data.serviceToPodsMapping[service].forEach((pod: string) => {
          graphData.links.push({
            source: service,
            target: pod,
            distance: 125,
          });
        });
      }
    }

    data.pods.forEach((pod) => {
      graphData.nodes.push({
        id: pod.id,
        nodeId: pod.nodeId,
        height: 0,
        size: 15,
        color: 'cyan',
        type: 'pod',
      });

      graphData.links.push({
        source: pod.id,
        target: pod.namespace,
        distance: 100,
      });
    });

    data.containers.forEach((container, index) => {
      graphData.nodes.push({
        id: `${container.name}_${index}`,
        label: container.name,
        height: 0,
        size: 10,
        color: 'yellow',
        image: container.image,
        type: 'container',
      });

      graphData.links.push({
        source: `${container.name}_${index}`,
        target: container.podId,
        distance: 100,
      });
    });
  }

    console.log('GraphData', graphData);

  return (
    <div ref={draggableContainer} className={`graph ${muiTheme.palette.mode}`}>
      {data && isSuccess && (
        <GraphResponsiveNetwork
          data={graphData}
          lengthOfData={
            data.nodes.length + data.pods.length + data.containers.length
          }
          draggableContainer={draggableContainer}
        />
      )}
    </div>
  );
};

export default Graph; 