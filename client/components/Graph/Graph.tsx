import { useTheme } from '@mui/material';
import { useEffect, useRef } from 'react';
// import './graph.scss';
import { metricsApi } from '../../services/api';
import GraphResponsiveNetwork from './GraphNetwork';
import './Graph.module.scss';

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
  let dragging = false;
  let startX = 0;
  let startY = 0;

  console.log('data', data);

  const graphData: {
    nodes: {
      id: string;
      label?: string;
      size: number;
      color: any;
      nodeId?: string;
      height?: number;
    }[];
    links: {
      source: string;
      target?: string;
      distance: number;
    }[];
  } = {} as any;
  if (isSuccess && data && data.nodes) {
    graphData.nodes = [
      {
        id: 'default',
        label: 'default',
        height: 1.5,
        size: 80,
        color: 'green',
      },
    ];
    graphData.links = [];

    //* push nodes
    data.nodes.forEach((node) => {
      graphData.nodes.push({
        id: node.id,
        label: node.id,
        height: 0,
        size: 40,
        color: '#1284ff',
      });

      graphData.links.push({
        source: node.id,
        target: 'default',
        distance: 80,
      });
    });

    //* push pods
    data.pods.forEach((pod) => {
      graphData.nodes.push({
        id: pod.id,
        nodeId: pod.nodeId,
        height: 0,
        size: 25,
        color: 'cyan',
      });

      graphData.links.push({
        source: pod.id,
        target: pod.nodeId,
        distance: 80,
      });
    });

    data.containers.forEach((container, index) => {
      graphData.nodes.push({
        id: `${container.name}_${index}`,
        label: container.name,
        height: 0,
        size: 15,
        color: 'yellow',
      });

      graphData.links.push({
        source: `${container.name}_${index}`,
        target: container.podId,
        distance: 80,
      });
    });
  }

  useEffect(() => {
    //* As user moves the mouse while dragging, update the scroll position
    //* in the case of a mouse event, the event is a MouseEvent, which means e.clientX and e.clientY refer to the mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;

      //* calculate the change in mouse position from the previous position
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;

      //* update the scroll position of the graph
      if (draggableContainer.current) {
        const maxScrollLeft =
          draggableContainer.current.scrollWidth -
          draggableContainer.current.clientWidth;
        const maxScrollTop =
          draggableContainer.current.scrollHeight -
          draggableContainer.current.clientHeight;
        //* Limit scrolling to the visible content
        const newScrollLeft = Math.max(
          0,
          Math.min(
            draggableContainer.current.scrollLeft + deltaX,
            maxScrollLeft,
          ),
        );

        const newScrollTop = Math.max(
          0,
          Math.min(draggableContainer.current.scrollTop + deltaY, maxScrollTop),
        );

        //* update the scroll position
        draggableContainer.current.scrollLeft = newScrollLeft;
        draggableContainer.current.scrollTop = newScrollTop;
      }

      //* update the start coordinates for next mouse move event
      startX = e.clientX;
      startY = e.clientY;
    };

    //* Once user clicks, begin dragging
    const handleMouseDown = (e: MouseEvent): void => {
      e.preventDefault();
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    //* Once user releases mouse, stop dragging
    const handleMouseUp = (): void => {
      dragging = false;
    };

    //* initialize the graph
    if (draggableContainer.current) {
      //* add event listeners for dragging with mouse
      draggableContainer.current.addEventListener('mouseup', handleMouseUp);
      draggableContainer.current.addEventListener('mousedown', handleMouseDown);
      draggableContainer.current.addEventListener('mousemove', handleMouseMove);
    }

    //* Clean up event listeners when component unmounts
    return () => {
      if (draggableContainer.current) {
        draggableContainer.current.removeEventListener(
          'mousemove',
          handleMouseMove,
        );
        draggableContainer.current.removeEventListener(
          'mouseup',
          handleMouseUp,
        );
        draggableContainer.current.removeEventListener(
          'mousedown',
          handleMouseDown,
        );
      }
    };
  }, []);

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
