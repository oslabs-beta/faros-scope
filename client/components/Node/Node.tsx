import { useState } from 'react';
import '../../css/Node.scss';
import NodeModal from './NodeModal';
import { createPortal } from 'react-dom';

interface NodeInterface {
  content: any;
  dimensions?: {
    width: string;
    height: string;
    maxWidth?: string;
    maxHeight?: string;
  };
}

/**
 * A node in the graph, represents a single data point in a Kubernetes cluster
 * @param content - The content of the node, which is the data point in the cluster.
 * @param dimensions - The dimensions of the node.
 * @returns ReactNode
 */
const Node = ({ content, dimensions }: NodeInterface) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (e: any) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const nodeStyle = { width: '8em', height: '8em', ...dimensions };

  //* Add onclick that adds a class to the node that makes send out a pulse engulfing the app
  return (
    <div className="Node" style={nodeStyle} onClick={openModal}>
      <span className="nodeOverlay"></span>
      <div className="outerNode">
        <div className="innerNode">
          <div className="nodeContent">{content.name}</div>
        </div>
      </div>
      {modalOpen &&
        createPortal(
          <NodeModal Node={content} setModalOpen={setModalOpen} />,
          document.body,
        )}
    </div>
  );
};

export default Node;
