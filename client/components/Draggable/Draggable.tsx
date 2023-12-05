import { useRef, useEffect, useState } from 'react';
import { useTheme } from '../context/Theme';
import { setScale } from '../../util/animationsUtil';
import { useGrid } from '../context/GridContext';
import '../../css/Graph.scss';

// import styles from './Draggable.module.css';
// import classNames from 'classNames';

interface DraggableProps {
  children: React.ReactNode;
}

/**
 * Draggable is a container that allows the user to drag the graph around.
 * @param children - The children of the Draggable component.
 **/
export const Draggable = ({ children }: DraggableProps) => {
  //* references to the draggable div, which is the container for the graph
  const draggableContainer = useRef<HTMLDivElement>(null);
  const draggableInner = useRef<HTMLDivElement>(null);
  const draggableContent = useRef<HTMLDivElement>(null);

  //* hook instantiation
  const [nodesScale, setNodesScale] = useState(1);
  const { setMostSignificantChild, scrollToSignificantChild, scrollable } =
    useGrid();
  const { theme } = useTheme();

  //* dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
  let dragging: boolean = false;
  let startX: number = 0,
    startY: number = 0;
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setNodesScale((prev) => {
        if (prev <= 0.5) return prev;
        const newScale = Number((prev - 0.1).toFixed(1));
        return newScale;
      });
    } else if (e.deltaY < 0) {
      setNodesScale((prev) => {
        if (prev >= 3) return prev;
        const newScale = Number((prev + 0.1).toFixed(1));
        return newScale;
      });
    }
  };

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
      if (!scrollable) return;
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
      draggableContainer.current.addEventListener('mousemove', handleMouseMove);
      draggableContainer.current.addEventListener('mouseup', handleMouseUp);
      draggableContainer.current.addEventListener('mousedown', handleMouseDown);
    }

    if (draggableInner.current) {
      //* add event listener for scrolling with mouse wheel for scaling
      draggableInner.current.addEventListener('wheel', handleWheel);
      // Reset user-select property on component unmount
      draggableInner.current.style.userSelect = '';
    }

    //* set the most significant child of graph to the draggableContent
    if (draggableContent.current) {
      setMostSignificantChild(draggableContent.current);
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
      if (draggableInner.current) {
        draggableInner.current?.removeEventListener('wheel', handleWheel);
      }
    };
  }, [scrollable]);

  useEffect(() => {
    if (!draggableContainer.current || !draggableContent.current) return;
    const content = draggableContent.current as HTMLDivElement;

    //* Apply the scale to draggableContent
    setScale(content, nodesScale);
    if (nodesScale > 1) {
      setTimeout(() => {
        //* scroll into view discovered, scroll to no longer needed for now
        scrollToSignificantChild();
      }, 400);
    }
  }, [nodesScale]);

  return (
    <div ref={draggableContainer} className={`draggableContainer ${theme}`}>
      <div ref={draggableContent} className="draggableContent">
        <div ref={draggableInner} className="draggableInner">
          {children}
        </div>
      </div>
    </div>
  );
};
