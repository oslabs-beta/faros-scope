import { useEffect } from 'react';
import { setScale } from '../../util/animationsUtil';

export const useDraggable = (
  draggableContainer: React.RefObject<HTMLDivElement>,
  draggableContent: React.RefObject<HTMLDivElement>,
  draggableInner: React.RefObject<HTMLDivElement>,
  setMostSignificantChild: (child: HTMLDivElement) => void,
  scrollToSignificantChild: () => void,
  setGridScrollable: (scrollable: boolean) => void,
  nodesScale: number,
  setNodesScale: React.Dispatch<React.SetStateAction<number>>,
  scrollable: boolean,
  toast: any, // Adjust the type of 'toast' based on your specific usage
) => {
  //* dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
  let dragging: boolean = false;
  let startX: number = 0,
    startY: number = 0;
  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    if (e.deltaY > 0) {
      setNodesScale((prev) => {
        if (prev <= 0.5) return prev;
        const newScale = Number((prev - 0.1).toFixed(1));
        return newScale;
      });
    } else if (e.deltaY < 0) {
      setNodesScale((prev) => {
        if (prev >= 3) return prev;
        const newScale = Number((prev + 0.1).toFixed(1));
        return newScale;
      });
    }
  };

  useEffect(() => {
    //* As user moves the mouse while dragging, update the scroll position
    //* in the case of a mouse event, the event is a MouseEvent, which means e.clientX and e.clientY refer to the mouse position
    const handleMouseMove = (e: MouseEvent) => {
      if (!dragging || !scrollable) return;

      //* calculate the change in mouse position from the previous position
      const deltaX = startX - e.clientX;
      const deltaY = startY - e.clientY;

      //* update the scroll position of the graph
      if (draggableContainer.current) {
        const maxScrollLeft =
          draggableContainer.current.scrollWidth -
          draggableContainer.current.clientWidth;
        const maxScrollTop =
          draggableContainer.current.scrollHeight -
          draggableContainer.current.clientHeight;
        //* Limit scrolling to the visible content
        const newScrollLeft = Math.max(
          0,
          Math.min(
            draggableContainer.current.scrollLeft + deltaX,
            maxScrollLeft,
          ),
        );

        const newScrollTop = Math.max(
          0,
          Math.min(draggableContainer.current.scrollTop + deltaY, maxScrollTop),
        );

        //* update the scroll position
        draggableContainer.current.scrollLeft = newScrollLeft;
        draggableContainer.current.scrollTop = newScrollTop;
      }

      //* update the start coordinates for next mouse move event
      startX = e.clientX;
      startY = e.clientY;
    };

    //* Once user clicks, begin dragging
    const handleMouseDown = (e: MouseEvent): void => {
      if (!scrollable) return;
      e.preventDefault();
      document.body.style.cursor = 'grabbing';
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
    };

    //* Once user releases mouse, stop dragging
    const handleMouseUp = (): void => {
      if (!scrollable) return;
      dragging = false;

      if (document.body.style.cursor !== 'grabbing') return;
      document.body.style.cursor = 'grab';
    };

    const handleSpaceDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        setGridScrollable(true);
      }

      if (document.body.style.cursor === 'grabbing') return;
      document.body.style.cursor = 'grab';
    };

    const handleSpaceUp = (e: KeyboardEvent) => {
      document.body.style.cursor = 'default';

      if (e.code === 'Space') {
        setGridScrollable(false);
      }
    };

    //* initialize the graph
    if (draggableContainer.current) {
      //* add event listeners for dragging with mouse
      draggableContainer.current.addEventListener('mouseup', handleMouseUp);
      draggableContainer.current.addEventListener('mousedown', handleMouseDown);
      draggableContainer.current.addEventListener('mousemove', handleMouseMove);

      //* only allow scrolling when space is pressed
      window.addEventListener('keydown', handleSpaceDown);
      window.addEventListener('keyup', handleSpaceUp);
    }

    if (draggableInner.current) {
      //* add event listener for scrolling with mouse wheel for scaling
      draggableInner.current.addEventListener('wheel', handleWheel);
    }

    //* set the most significant child of graph to the draggableContent
    if (draggableContent.current) {
      setMostSignificantChild(draggableContent.current);
    }

    //* Clean up event listeners when component unmounts
    return () => {
      if (draggableContainer.current) {
        draggableContainer.current.removeEventListener(
          'mousemove',
          handleMouseMove,
        );
        draggableContainer.current.removeEventListener(
          'mouseup',
          handleMouseUp,
        );
        draggableContainer.current.removeEventListener(
          'mousedown',
          handleMouseDown,
        );
      }
      if (draggableInner.current) {
        draggableInner.current?.removeEventListener('wheel', handleWheel);
      }

      window.removeEventListener('keydown', handleSpaceDown);
      window.removeEventListener('keyup', handleSpaceUp);
    };
  }, [scrollable]);

  useEffect(() => {
    if (!draggableContainer.current || !draggableContent.current) return;
    const content = draggableContent.current as HTMLDivElement;

    //* Apply the scale to draggableContent
    setScale(content, nodesScale);
    if (nodesScale > 1) {
      setTimeout(() => {
        //* scroll into view discovered, scroll to no longer needed for now
        scrollToSignificantChild();
      }, 400);
    }
  }, [nodesScale]);

  //* Display toast message when scrolling is enabled/disabled
  useEffect(() => {
    if (!scrollable) {
      toast({
        title: 'Scrolling disabled',
        description: 'Hold space to enable scrolling.',
        status: 'warning',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    } else {
      toast({
        title: 'Scrolling enabled',
        description: 'Release space to disable scrolling.',
        status: 'success',
        duration: 4000,
        isClosable: true,
        position: 'top-right',
      });
    }
  }, [scrollable]);
};
