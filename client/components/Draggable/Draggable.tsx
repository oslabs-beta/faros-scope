// import { useToast } from '@chakra-ui/toast';
import { useRef, useState } from 'react';
import { useTheme } from '@mui/material';
import { useDraggable, useGrid } from '../../hooks';
import './Draggable.module.scss';

interface Props {
  children: React.ReactNode;
}

/**
 * Draggable is a container that allows the user to drag the graph around.
 * @param children - The children of the Draggable component.
 **/
export const Draggable = ({ children }: Props) => {
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
  const muiTheme = useTheme();

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
  );

  return (
    <div
      ref={draggableContainer}
      className={`draggableContainer ${muiTheme.palette.mode}`}
    >
      <div ref={draggableContent} className="draggableContent">
        <div ref={draggableInner} className="draggableInner">
          <div className={`node-graph-title-bar ${muiTheme.palette.mode}`}>
            <span className={`node-graph-title ${muiTheme.palette.mode}`}>
              NODES
            </span>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
