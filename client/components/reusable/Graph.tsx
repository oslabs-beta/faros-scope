import React, { useRef, useEffect } from 'react';
import formatNodes from '../../util/formatNodes';
import { useTheme } from '../../Theme';
import '../../css/graph.scss';

/**
 * A draggable graph component, this component houses Node.tsx components and allows the user to drag the graph around
 * @returns ReactNode
 */
const Graph = () => {
  // reference to the draggable div, which is the container for the graph
  const draggable = useRef<HTMLDivElement>(null);
  const nodes = [1, 2, 3, 4, 5];
  // default width and height from viewport
  let defaultW = window.innerWidth,
    defaultH = window.innerHeight;

  const { theme } = useTheme();
  // dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
  let dragging = false;
  let startX = 0,
    startY = 0;

  useEffect(() => {
    // As user moves the mouse while dragging, update the scroll position
    //* in the case of a mouse event, the event is a MouseEvent, which means e.clientX and e.clientY refer to the mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      // calculate the change in mouse position from the previous position
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;
      // update the scroll position of the graph
      if (draggable.current) {
        draggable.current.scrollLeft += deltaX;
        draggable.current.scrollTop += deltaY;
      }
      // update the start coordinates for next mouse move event
      startX = e.clientX;
      startY = e.clientY;
    };

    // Once user clicks, begin dragging
    const handleMouseDown = (e: MouseEvent) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    // Once user releases mouse, stop dragging
    const handleMouseUp = () => {
      dragging = false;
    };

    // initialize the graph
    if (draggable.current) {
      // center the graph
      draggable.current.scrollLeft = defaultW / 2;
      draggable.current.scrollTop = defaultH / 2;

      // add event listeners for dragging with mouse
      draggable.current.addEventListener('mousemove', handleMouseMove);
      draggable.current.addEventListener('mouseup', handleMouseUp);
      draggable.current.addEventListener('mousedown', handleMouseDown);
    }

    // Clean up event listeners when component unmounts
    return () => {
      if (draggable.current) {
        draggable.current.removeEventListener('mousemove', handleMouseMove);
        draggable.current.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);

  return (
    <div ref={draggable} className="container">
      {/* draggableGlowOverlay is what facilitates the customizable glow effect, it IS essentially the glow effect itself */}
      {theme === 'dark' && <div className="draggableGlowOverlay"></div>}
      <div className={`draggable${theme}`} id="draggable">
        <div className="nodesContainer">{formatNodes(nodes)}</div>
      </div>
    </div>
  );
};

export default Graph;
