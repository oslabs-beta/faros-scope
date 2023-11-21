import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import '../../../css/Reactdnd.scss';

interface DroppableProps {
  id: string;
  children?: any;
  styleOverride?: any;
  classOverride?: string;
  orientation: string;
}

export function Droppable({ id, children, styleOverride, classOverride, orientation }: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { orientation },
  });

  styleOverride = {
    backgroundColor: isOver ? '#FFFFFF' : 'transparent',
    ...styleOverride,
  };

  const dummyStyle = {
    backgroundColor: isOver ? 'white' : 'transparent',
    width: '100%',
    height: '100%',
  };

  return (
    <div className={classOverride || 'droppableContainer'} ref={setNodeRef} style={styleOverride}>
      {/* <div style={dummyStyle}></div> */}
      {children}
    </div>
  );
}

export default Droppable;
