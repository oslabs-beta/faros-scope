import { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import moveImage from '../../../assets/move-svgrepo-com.svg';
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
  const { attributes, listeners, setNodeRef, setActivatorNodeRef } =
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
      className={className || 'draggableDNDContainer'}
      id={id || 'draggableDNDContainer'}
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
        <img id="navDragImg" src={moveImage}></img>
      </button>
      {children}
    </div>
  );
}

export default Draggable;
