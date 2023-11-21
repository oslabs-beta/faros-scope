import React from 'react';
import { useDroppable } from '@dnd-kit/core';

interface DroppableProps {
  id: string;
  children?: any;
  styleOverride?: any;
}

export function Droppable({ id, children, styleOverride }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div ref={setNodeRef} style={styleOverride || style}>
      {children}
    </div>
  );
}

export default Droppable;
