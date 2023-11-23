import React, { useRef } from 'react';
import PodsContainer from './PodsContainer';
import '../../css/NodeModal.scss';
import ThemedContainer from './ThemedContainer';
interface NodeModalInterface {
  Node: any;
  setModalOpen: Function;
}

/**
 * NodeModal is a modal that displays the pods of a node when a node is clicked on.
 * @param Node - The node that was clicked on.
 * @param setModalOpen - A function that sets the modal to open or closed.
 */
const NodeModal = ({ Node, setModalOpen }: NodeModalInterface) => {
  const nodeModalOverlay = useRef(null);
  const nodeModalPodsViewRef = useRef(null);
  const podsViewRef = useRef(null);

  // mock data
  const nodePods = Node?.pods || [{ name: 'test' }, { name: 'test' }];

  //* This function is called when the modal is closed
  //* It animates the modal out of view using css animations
  //* The modal is removed from the dom after the animation is complete
  //* If the user clicks on the clickable overlay, the modal will close immediately
  const exitAnimations = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    //* If the refs are null, return, this is here to make typescript happy
    if (
      !nodeModalPodsViewRef.current ||
      !podsViewRef.current ||
      !nodeModalOverlay.current
    ) {
      return;
    }

    if (
      e.target instanceof HTMLElement &&
      e.target.className !== 'nodeClickableOverlay'
    ) {
      //* Since typescript doesn't know that the refs are not null or not valid elements, 
      //* we have to cast them as HTMLElements to make typescript happy
      const modal = nodeModalPodsViewRef.current as HTMLElement;
      const modalOverlay = nodeModalOverlay.current as HTMLElement;
      const podsView = podsViewRef.current as HTMLElement;

      modal.classList.add('CloseModalAnimation');
      podsView.classList.add('Opacity-Out');
      modalOverlay.classList.add('Opacity-Out');

      setTimeout(() => {
        setModalOpen(false);
        modal.classList.remove('CloseModalAnimation');
        podsView.classList.remove('Opacity-Out');
        modalOverlay.classList.remove('Opacity-Out');
      }, 1450);
    } else {
      setModalOpen(false);
    }
  };

  //* Close modal when clicked outside of modal or x button is clicked
  const closeModal = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    exitAnimations(e);
  };

  //* Overlay is the background of the modal
  //* ClickableOverlay is the background of the modal that closes the modal when clicked
  //* PodsContainer is the container that holds the pods, we pass it a ref to give it a animation when the modal is closed
  return (
    <div ref={nodeModalOverlay} className="nodeModalOverlay Opacity-In">
      <div className="nodeClickableOverlay" onClick={closeModal}></div>
      <div className="nodeModalContainer">
        <div ref={nodeModalPodsViewRef} className="nodeModalPodsView">
          <span className="close">
            <button className="closeButton" onClick={closeModal}>
              X
            </button>
          </span>
          <div className="nodeModalPodsViewInner">
            <ThemedContainer>
              <PodsContainer podsViewRef={podsViewRef} nodePods={nodePods} />
            </ThemedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeModal;
