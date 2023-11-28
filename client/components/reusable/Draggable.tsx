import React, { useRef, useEffect, useState } from 'react';
import '../../css/Graph.scss';
import { useTheme } from '../../Theme';
import { setScale } from '../../util/animationsUtil';
import { node } from 'webpack';
interface DraggableProps {
  children: React.ReactNode;
  delay?: number;
  scale?: number;
}

/**
 * Draggable is a container that allows the user to drag the graph around.
 * @param children - The children of the Draggable component.
 * @param color - The color of the Draggable component.
 * @param delay - The delay before the Draggable component is initialized.
 **/
const Draggable = ({ children, delay }: DraggableProps) => {
  //* references to the draggable div, which is the container for the graph
  const draggableContainer = useRef<HTMLDivElement>(null);
  const draggableInner = useRef<HTMLDivElement>(null);
  const draggableContent = useRef<HTMLDivElement>(null);
  //* for some reason this needs to be initialized to 1.1, otherwise the graph will be too small
  //* I believe this is because the DOM is not yet loaded when the component is initialized, so the calculations are off for the offsets
  const [nodesScale, setNodesScale] = useState(1.1);

  const { theme } = useTheme();
  //* dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
  let dragging: boolean = false;

  let startX: number = 0,
    startY: number = 0;

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setNodesScale((prev) => Number(Math.max(0.5, prev - 0.1).toFixed(1)));
    } else if (e.deltaY < 0) {
      setNodesScale((prev) => Number(Math.min(1.5, prev + 0.1).toFixed(1)));
    }
  };

  useEffect(() => {
    //* add event listener for scrolling with mouse wheel for scaling
    if (draggableInner.current)
      draggableInner.current.addEventListener('wheel', handleWheel);

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

        // Limit scrolling to the visible content
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

        draggableContainer.current.scrollLeft = newScrollLeft;
        draggableContainer.current.scrollTop = newScrollTop;
      }

      //* update the start coordinates for next mouse move event
      startX = e.clientX;
      startY = e.clientY;
    };

    //* Once user clicks, begin dragging
    const handleMouseDown = (e: MouseEvent): void => {
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
      //* center the graph
      if (draggableContainer.current) {
        if (delay) {
          setTimeout(() => {
            if (draggableContainer.current) {
              draggableContainer.current.scrollTo({
                top:
                  (draggableContainer.current.scrollHeight -
                    draggableContainer.current?.clientHeight) /
                  2,
                left:
                  (draggableContainer.current.scrollWidth -
                    draggableContainer.current?.clientWidth) /
                  2,
                behavior: 'smooth',
              });
            }
          }, delay);
        } else {
          //* center the graph
          draggableContainer.current.scrollTo({
            top:
              (draggableContainer.current.scrollHeight -
                draggableContainer.current?.clientHeight) /
              2,
            left:
              (draggableContainer.current.scrollWidth -
                draggableContainer.current?.clientWidth) /
              2,
            behavior: 'smooth',
          });
        }
        //* add event listeners for dragging with mouse
        draggableContainer.current.addEventListener(
          'mousemove',
          handleMouseMove,
        );
        draggableContainer.current.addEventListener('mouseup', handleMouseUp);
        draggableContainer.current.addEventListener(
          'mousedown',
          handleMouseDown,
        );
      }
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

      if (draggableInner.current)
        draggableInner.current?.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (!draggableInner.current || !draggableContent.current) return;

    const content = draggableContent.current as HTMLDivElement;
    const inner = draggableInner.current as HTMLDivElement;

    // Apply the scale to draggableInner
    setScale(inner, nodesScale);

    // Calculate the scaled width and height
    const scaledWidth = Math.round(inner.offsetWidth * nodesScale);
    const scaledHeight = Math.round(inner.offsetHeight * nodesScale);

    // Update the width and height of draggableContent
    content.style.width = `${scaledWidth + 200}px`;
    content.style.height = `${scaledHeight + 200}px`;

    console.log(nodesScale);
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

export default Draggable;
