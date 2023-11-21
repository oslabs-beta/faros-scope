import React, { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import '../../../css/Reactdnd.scss';

interface DraggableProps {
  id: string;
  children: ReactNode;
  orientation: string;
  className?: string;
}

function Draggable({ id, children, orientation='horizontal', className }: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
    data: {
      orientation
    }
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className={className || 'draggableContainer'}
      id={id || 'draggableContainer'}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </div>
  );
}

export default Draggable;
