import { useRef } from 'react';
// import '../../css/NodeModal.scss';
import { useTheme } from '../../hooks';
import { exitAnimations } from '../../util';
// import { PodContainer, ThemeContainer } from '../index';
import { PodContainer } from '../PodContainer';
import { ThemeContainer } from '../ThemeContainer';



interface NodeModalInterface {
  Node: any;
  setModalOpen: Function;
}

/**
 * NodeModal is a modal that displays the pods of a node when a node is clicked on.
 * @param Node - The node that was clicked on.
 * @param setModalOpen - A function that sets the modal to open or closed.
 */
console.log('NodeModal.tsx');
export const NodeModal = ({ Node, setModalOpen }: NodeModalInterface) => {
  const nodeModalOverlay = useRef(null);
  const nodeModalPodsViewRef = useRef(null);
  const podsViewRef = useRef(null);
  const { theme } = useTheme();
  //* pods to format
  const nodePods = Node?.pods;

  //* Close modal when clicked outside of modal or x button is clicked
  const closeModal = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    if (
      !nodeModalPodsViewRef.current ||
      !podsViewRef.current ||
      !nodeModalOverlay.current
    ) {
      setModalOpen(false);
      return;
    } else {
      exitAnimations(
        e,
        nodeModalPodsViewRef.current,
        nodeModalOverlay.current,
        podsViewRef.current,
        setModalOpen,
      );
    }
  };

  //* Overlay is the background of the modal
  //* ClickableOverlay is the background of the modal that closes the modal when clicked
  //* PodsContainer is the container that holds the pods, we pass it a ref to give it a animation when the modal is closed
  return (
    <div ref={nodeModalOverlay} className="nodeModalOverlay Opacity-In">
      <div className="nodeClickableOverlay" onClick={closeModal}></div>
      <div className="nodeModalContainer">
        <div
          ref={nodeModalPodsViewRef}
          className={`nodeModalPodsViewOuter ${theme}`}
        >
          <span className="close">
            <button className="closeButton" onClick={closeModal}>
              X
            </button>
          </span>
          <div className={`nodeModalPodsViewInner ${theme}`}>
            <ThemeContainer IDOverride="nodeModalThemedContainer">
              <PodContainer podsViewRef={podsViewRef} nodePods={nodePods} />
            </ThemeContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
