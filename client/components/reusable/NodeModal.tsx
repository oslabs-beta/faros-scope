import React, { useRef } from 'react';
import PodsContainer from './PodsContainer';
import '../../css/NodeModal.scss';
import ThemedContainer from './ThemedContainer';
interface NodeModalInterface {
  Node: any;
  setModalOpen: Function;
}

const NodeModal = ({ Node, setModalOpen }: NodeModalInterface) => {
  const nodeModalOverlay = useRef(null);
  const nodeModalPodsViewRef = useRef(null);
  const nodeModalContainerRef = useRef(null);

  // mock data
  const nodePods = Node?.pods || [{ name: 'test' }, { name: 'test' }];
  const exitAnimations = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    if (
      !nodeModalPodsViewRef.current ||
      !nodeModalContainerRef.current ||
      !nodeModalOverlay.current
    ) {
      return;
    }

    if (
      e.target instanceof HTMLElement &&
      e.target.className !== 'nodeClickableOverlay'
    ) {
      const modal = nodeModalPodsViewRef.current as HTMLElement;
      const modalOverlay = nodeModalOverlay.current as HTMLElement;
      const modalContainer = nodeModalContainerRef.current as HTMLElement;

      modal.classList.add('CloseModalAnimation');
      modalContainer.classList.add('Opacity-Out');
      modalOverlay.classList.add('Opacity-Out');

      setTimeout(() => {
        setModalOpen(false);
        modal.classList.remove('CloseModalAnimation');
        modalContainer.classList.remove('Opacity-Out');
        modalOverlay.classList.remove('Opacity-Out');
      }, 1450);
    } else {
      setModalOpen(false);
    }
  };

  const closeModal = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    exitAnimations(e);
  };

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
              <PodsContainer
                nodePodsViewRef={nodeModalContainerRef}
                nodePods={nodePods}
              />
            </ThemedContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NodeModal;
