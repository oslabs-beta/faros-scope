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

function Draggable({
  id,
  children,
  orientation = 'horizontal',
  className,
}: DraggableProps) {
  const { attributes, listeners, setNodeRef, transform, setActivatorNodeRef } =
    useDraggable({
      id: id,
      data: {
        orientation,
      },
    });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    // transform: CSS.Translate.toString(transform),
  };

  return (
    <div
      className={className || 'draggableContainer'}
      id={id || 'draggableContainer'}
      ref={setNodeRef}
      style={style}
      {...attributes}
    >
      <button
        className="dragButton"
        id="dragButton"
        {...listeners}
        {...attributes}
        ref={setActivatorNodeRef}
      >
        <img id="navDragImg" src="../../assets/move-svgrepo-com.svg"></img>
      </button>
      {children}
    </div>
  );
}

export default Draggable;
