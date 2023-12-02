import { useDroppable } from '@dnd-kit/core';
import '../../../css/Reactdnd.scss';

interface DroppableProps {
  id: string;
  children?: any;
  styleOverride?: any;
  classOverride?: string;
  orientation: string;
  outlineClass?: string;
}

export function Droppable({
  id,
  children,
  styleOverride,
  classOverride,
  orientation,
  outlineClass
}: DroppableProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
    data: { orientation },
  });

  styleOverride = {
    // backgroundColor: isOver ? '#FFFFFF' : 'transparent',
    ...styleOverride,
  };

  const dummyStyle = {
    opacity: isOver ? '0.6' : '0',
  };

  return (
    <div
      className={classOverride || 'droppableContainer'}
      ref={setNodeRef}
      style={styleOverride}
    >
      {outlineClass && (
        <div className='outerDroppable'>
          <div className={outlineClass} style={dummyStyle}></div>
          {children}
        </div>
        )
      }
    </div>
  );
}

export default Droppable;
