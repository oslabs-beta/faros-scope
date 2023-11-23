import React, { useState } from 'react';
import '../../css/Node.scss';
import NodeModal from './NodeModal';
import { createPortal } from 'react-dom';

interface NodeInterface {
  content: any;
}

/**
 * A node in the graph, represents a single data point in a Kubernetes cluster
 * @returns ReactNode
 */
const Node = ({ content }: NodeInterface) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (e: any) => {
    e.stopPropagation();
    setModalOpen(true);
  }
  //* Add onclick that adds a class to the node that makes send out a pulse engulfing the app
  return (
    <div className="Node" onClick={openModal}>
      <span className="nodeOverlay"></span>
      <div className="outerNode">
        <div className="innerNode">
          <div className="nodeContent">{content}</div>
        </div>
      </div>
      {modalOpen && createPortal(
        <NodeModal Node={content} setModalOpen={setModalOpen} />,
        document.body
      )}
    </div>
  );
};

export default Node;
