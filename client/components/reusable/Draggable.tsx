import React, { useRef, useEffect } from 'react';
import '../../css/Graph.scss';
import { useTheme } from '../../Theme';
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
  const draggableGraph = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  //* dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
  let dragging = false;

  let startX = 0,
    startY = 0;
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
    const handleMouseDown = (e: MouseEvent) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    //* Once user releases mouse, stop dragging
    const handleMouseUp = () => {
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
    };
  }, []);

  return (
    <div ref={draggableContainer} className="draggableContainer">
      {/* draggableGlowOverlay is what facilitates the customizable glow effect, it IS essentially the glow effect itself */}
      <div className={`graphBackgroundImage${theme}`}></div>
      {theme === 'dark' && <div className="draggableGlowOverlay"></div>}
      <div ref={draggableGraph} className={`draggable`} id="draggable">
        {children}
      </div>
    </div>
  );
};

export default Draggable;
