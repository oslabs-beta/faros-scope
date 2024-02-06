import { useTheme } from '@mui/material';
import { useRef } from 'react';
// import './graph.scss';
import { metricsApi } from '../../services/api';
import GraphResponsiveNetwork from './GraphNetwork';
import './Graph.module.scss';
import './Graph.scss';

/**
 * Graph component
 * @returns ReactNode
 */
export const Graph = () => {
  const muiTheme = useTheme();
  const { data, isSuccess } = metricsApi.endpoints.getClusterInfo.useQueryState(
    undefined,
    {},
  );
  const draggableContainer = useRef<HTMLDivElement>(null);
  console.log('data', data);
  const graphData: {
    nodes: {
      id: string;
      label?: string;
      size: number;
      color: any;
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
      {
        id: 'Namespace',
        label: 'Namespace',
        height: 0,
        size: 30,
        color: 'orange',
        type: 'namespace',
      },
    ];
    graphData.links = [];

    //? push nodes
    // data.nodes.forEach((node) => {
    //   graphData.nodes.push({
    //     id: node.id,
    //     label: node.id,
    //     height: 0,
    //     size: 25,
    //     color: '#1284ff',
    //     type: 'node',
    //   });

    //   graphData.links.push({
    //     source: node.id,
    //     target: 'Cluster',
    //     distance: 100,
    //   });

    //   graphData.links.push({
    //     source: node.id,
    //     target: 'Namespace',
    //     distance: 50,
    //   });
    // });
    //* push pods
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
        target: 'Namespace',
        distance: 200,
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
        distance: 80,
      });
    });

    graphData.links.push({
      source: 'Namespace',
      target: 'Cluster',
      distance: 50,
    });
  }

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
