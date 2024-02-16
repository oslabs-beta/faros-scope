"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDraggable = void 0;
const react_1 = require("react");
const util_1 = require("../util");
const useDraggable = (draggableContainer, draggableContent, draggableInner, setMostSignificantChild, scrollToSignificantChild, setGridScrollable, nodesScale, setNodesScale, scrollable) => {
    //* dragging boolean and start coordinates, start coordinates update continuously as the user drags the graph
    let dragging = false;
    let startX = 0, startY = 0;
    const handleWheel = (e) => {
        e.preventDefault();
        if (e.deltaY > 0) {
            setNodesScale((prev) => {
                if (prev <= 0.5)
                    return prev;
                const newScale = Number((prev - 0.1).toFixed(1));
                return newScale;
            });
        }
        else if (e.deltaY < 0) {
            setNodesScale((prev) => {
                if (prev >= 3)
                    return prev;
                const newScale = Number((prev + 0.1).toFixed(1));
                return newScale;
            });
        }
    };
    (0, react_1.useEffect)(() => {
        //* As user moves the mouse while dragging, update the scroll position
        //* in the case of a mouse event, the event is a MouseEvent, which means e.clientX and e.clientY refer to the mouse position
        const handleMouseMove = (e) => {
            if (!dragging || !scrollable)
                return;
            //* calculate the change in mouse position from the previous position
            const deltaX = startX - e.clientX;
            const deltaY = startY - e.clientY;
            //* update the scroll position of the graph
            if (draggableContainer.current) {
                const maxScrollLeft = draggableContainer.current.scrollWidth -
                    draggableContainer.current.clientWidth;
                const maxScrollTop = draggableContainer.current.scrollHeight -
                    draggableContainer.current.clientHeight;
                //* Limit scrolling to the visible content
                const newScrollLeft = Math.max(0, Math.min(draggableContainer.current.scrollLeft + deltaX, maxScrollLeft));
                const newScrollTop = Math.max(0, Math.min(draggableContainer.current.scrollTop + deltaY, maxScrollTop));
                //* update the scroll position
                draggableContainer.current.scrollLeft = newScrollLeft;
                draggableContainer.current.scrollTop = newScrollTop;
            }
            //* update the start coordinates for next mouse move event
            startX = e.clientX;
            startY = e.clientY;
        };
        //* Once user clicks, begin dragging
        const handleMouseDown = (e) => {
            if (!scrollable)
                return;
            e.preventDefault();
            document.body.style.cursor = 'grabbing';
            dragging = true;
            startX = e.clientX;
            startY = e.clientY;
        };
        //* Once user releases mouse, stop dragging
        const handleMouseUp = () => {
            if (!scrollable)
                return;
            dragging = false;
            if (document.body.style.cursor !== 'grabbing')
                return;
            document.body.style.cursor = 'grab';
        };
        const handleSpaceDown = (e) => {
            if (e.code === 'Space') {
                setGridScrollable(true);
            }
            if (document.body.style.cursor === 'grabbing')
                return;
            document.body.style.cursor = 'grab';
        };
        const handleSpaceUp = (e) => {
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
            var _a;
            if (draggableContainer.current) {
                draggableContainer.current.removeEventListener('mousemove', handleMouseMove);
                draggableContainer.current.removeEventListener('mouseup', handleMouseUp);
                draggableContainer.current.removeEventListener('mousedown', handleMouseDown);
            }
            if (draggableInner.current) {
                (_a = draggableInner.current) === null || _a === void 0 ? void 0 : _a.removeEventListener('wheel', handleWheel);
            }
            window.removeEventListener('keydown', handleSpaceDown);
            window.removeEventListener('keyup', handleSpaceUp);
        };
    }, [scrollable]);
    (0, react_1.useEffect)(() => {
        if (!draggableContainer.current || !draggableContent.current)
            return;
        const content = draggableContent.current;
        //* Apply the scale to draggableContent
        (0, util_1.setScale)(content, nodesScale);
        if (nodesScale > 1) {
            setTimeout(() => {
                //* scroll into view discovered, scroll to no longer needed for now
                scrollToSignificantChild();
            }, 400);
        }
    }, [nodesScale]);
    //* Display toast message when scrolling is enabled/disabled
    // useEffect(() => {
    //   if (!scrollable) {
    //     toast({
    //       title: 'Scrolling disabled',
    //       description: 'Hold space to enable scrolling.',
    //       status: 'warning',
    //       duration: 4000,
    //       isClosable: true,
    //       position: 'top-right',
    //     });
    //   } else {
    //     toast({
    //       title: 'Scrolling enabled',
    //       description: 'Release space to disable scrolling.',
    //       status: 'success',
    //       duration: 4000,
    //       isClosable: true,
    //       position: 'top-right',
    //     });
    //   }
    // }, [scrollable]);
    // useEffect(() => {
    //   if (!scrollable) {
    //     toast({
    //       title: 'Scrolling disabled',
    //       description: 'Hold space to enable scrolling.',
    //       status: 'warning',
    //       duration: 4000,
    //       isClosable: true,
    //       position: 'top-right',
    //     });
    //   } else {
    //     toast({
    //       title: 'Scrolling enabled',
    //       description: 'Release space to disable scrolling.',
    //       status: 'success',
    //       duration: 4000,
    //       isClosable: true,
    //       position: 'top-right',
    //     });
    //   }
    // }, [scrollable]);
};
exports.useDraggable = useDraggable;
