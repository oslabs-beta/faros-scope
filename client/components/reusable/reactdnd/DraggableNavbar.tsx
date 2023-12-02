import Draggable from './Draggable';
import { NavBar } from '../../NavBar/index';

interface DraggableNavBarProps {
  styleOverride?: any;
  orientation?: string;
}

const DraggableNavbar = ({ orientation }: DraggableNavBarProps) => {
  return (
    <Draggable
      className={`navDragContainer ${orientation || ''}`}
      id="navDragContainer"
      orientation={orientation || ''}
    >
      <NavBar orientation={orientation} />
    </Draggable>
  );
};

export default DraggableNavbar;
