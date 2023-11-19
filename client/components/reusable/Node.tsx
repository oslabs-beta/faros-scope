import React from 'react';
import '../../css/Node.scss';

interface NodeInterface {
  content: any;
}

/**
 * A node in the graph, represents a single data point in a Kubernetes cluster
 * @returns ReactNode
 */
const Node = ({ content }: NodeInterface) => {
  return (
    <div className="Node">
      <span className='nodeOverlay'></span>
      <div className="outerNode">
        <div className="innerNode">
          <div className="nodeContent">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default Node;
