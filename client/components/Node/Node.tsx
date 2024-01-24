import { useState } from 'react';
import './Node.module.scss';
import '../../css/NodeModal.scss';
import '../../css/node.scss';
import { NodeModal } from '../NodeModal';
import { createPortal } from 'react-dom';
import { useCustomTheme } from '../../hooks';
import podIcon from '../../assets/icons8-box-64.png';
import { CopyToClipboard } from '../reusable/copy-to-clipboard/copy-to-clipboard';

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
export const Node = ({ node, dimensions }: NodeInterface) => {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = (e: any) => {
    e.stopPropagation();
    setModalOpen(true);
  };

  const nodeStyle = { width: '8em', height: '8em', ...dimensions };
  const { theme } = useCustomTheme();
  // console.log(node);
  //* Add onclick that adds a class to the node that makes send out a pulse engulfing the app
  return (
    <div className="nodeContainer">
      <span className={`tooltip-text ${theme}`}>{node.nodeName}</span>
      <div style={dimensions} className={`borderNode ${theme}`}>
        <div className="Node" style={nodeStyle}>
          <img
            onClick={openModal}
            src={podIcon}
            id="podIcon"
            style={{ maxWidth: '80px', maxHeight: '80px' }}
            alt="pod icon"
          />
          <div className="nodeContent">
            <div className="nodeNameContainer">
              <CopyToClipboard text={node.nodeName} />
              <div className="nodeName">{node.nodeName}</div>
            </div>
            <label className="podCount">
              Pods:&nbsp;
              <span className="inlineOrangeText">{node.pods.length}</span>
            </label>
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
    </div>
  );
};
