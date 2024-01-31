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

  const graphData: {
    nodes: {
      id: string;
      label?: string;
      size: number;
      color: any;
      nodeId?: string;
      height?: number;
    }[];
    links: { source: string; target: string }[];
  } = {} as any;
  if (isSuccess && data && data.nodes) {
    graphData.nodes = data.nodes.map((node) => {
      return {
        id: node.id,
        label: node.id,
        height: 1,
        size: 25,
        color: 'white',
      };
    });

    data.pods.forEach((pod) => {
      graphData.nodes.push({
        id: pod.id,
        nodeId: pod.nodeId,
        height: 1,
        size: 25,
        color: 'cyan',
      });
    });

    console.log('graphData.nodes', graphData.nodes);
    graphData.links = data.pods.map((pod) => {
      return {
        source: pod.id,
        target: pod.nodeId,
        distance: 150,
      };
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
      {data && isSuccess && <GraphResponsiveNetwork data={graphData} />}
    </div>
  );
};
