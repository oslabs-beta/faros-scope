import { useRef, useState } from 'react';
import { useTheme } from '../context/Theme';
import { useGrid } from '../context/GridContext';
import { useToast } from '@chakra-ui/toast';
import { useDraggable } from './useDraggable';
import '../../css/Graph.scss';

// import styles from './Draggable.module.css';
// import classNames from 'classNames';

interface DraggableProps {
  children: React.ReactNode;
}

/**
 * Draggable is a container that allows the user to drag the graph around.
 * @param children - The children of the Draggable component.
 **/
export const Draggable = ({ children }: DraggableProps) => {
  //* references to the draggable div, which is the container for the graph
  const draggableContainer = useRef<HTMLDivElement>(null);
  const draggableInner = useRef<HTMLDivElement>(null);
  const draggableContent = useRef<HTMLDivElement>(null);

  //* hook instantiation
  const [nodesScale, setNodesScale] = useState(1);
  const {
    setMostSignificantChild,
    scrollToSignificantChild,
    scrollable,
    setGridScrollable,
  } = useGrid();
  const { theme } = useTheme();
  const toast = useToast();

  useDraggable(
    draggableContainer,
    draggableContent,
    draggableInner,
    setMostSignificantChild,
    scrollToSignificantChild,
    setGridScrollable,
    nodesScale,
    setNodesScale,
    scrollable,
    toast,
  );

  console.log(draggableContainer.current?.scrollWidth);

  return (
    <div ref={draggableContainer} className={`draggableContainer ${theme}`}>
      <div ref={draggableContent} className="draggableContent">
        <div ref={draggableInner} className="draggableInner">
          {children}
        </div>
      </div>
    </div>
  );
};
