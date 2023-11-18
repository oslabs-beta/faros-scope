import React, { useRef, useEffect } from 'react';
import { useTheme } from '../../Theme';
import '../../css/graph.scss';

const Graph = () => {
  const draggable = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();
  let dragging = false;
  let startX = 0,
    startY = 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;
      if (draggable.current) {
        draggable.current.scrollLeft += deltaX;
        draggable.current.scrollTop += deltaY;
      }
      startX = e.clientX;
      startY = e.clientY;
    };

    const handleMouseDown = (e: MouseEvent) => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };
  
    const handleMouseUp = () => {
      dragging = false;
    };

    if (draggable.current) {
      draggable.current.addEventListener('mousemove', handleMouseMove);
      draggable.current.addEventListener('mouseup', handleMouseUp);
      draggable.current.addEventListener('mousedown', handleMouseDown);
    }

    return () => {
      if (draggable.current) {
        draggable.current.removeEventListener('mousemove', handleMouseMove);
        draggable.current.removeEventListener('mouseup', handleMouseUp);
      }
    };
  }, []);



  return (
    <div ref={draggable} className="container">
      <div className={`draggable${theme}`} id="draggable"></div>
    </div>
  );
};

export default Graph;
