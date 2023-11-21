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

  styleOverride = {
    backgroundColor: 'transparent',
    ...styleOverride,
  };

  const dummyStyle = {
    backgroundColor: isOver ? 'white' : 'transparent',
    width: '100%',
    height: '100%',
  };

  return (
    <div ref={setNodeRef} style={styleOverride}>
      <div style={dummyStyle}></div>
      {children}
    </div>
  );
}

export default Droppable;
