import { useState } from 'react';
import '../../css/Node.scss';
import NodeModal from './NodeModal';
import { createPortal } from 'react-dom';

interface NodeInterface {
  node: any;
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
const Node = ({ node, dimensions }: NodeInterface) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (e: any) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const nodeStyle = { width: '8em', height: '8em', ...dimensions };

  console.log(node);
  //* Add onclick that adds a class to the node that makes send out a pulse engulfing the app
  return (
    <div className="borderNode">
      <div className="Node" style={nodeStyle} onClick={openModal}>
        <span className="nodeOverlay"></span>
        <div className="outerNode">
          <div className="innerNode">
            <div className="nodeContent">{node.name}</div>
          </div>
        </div>
        {/* pass node's name or similar relationship info to indetify,
          
          exactly which node to access from global state to create bond */}
        {modalOpen &&
          createPortal(
            <NodeModal Node={node} setModalOpen={setModalOpen} />,
            document.body,
          )}
      </div>
    </div>
  );
};

export default Node;
