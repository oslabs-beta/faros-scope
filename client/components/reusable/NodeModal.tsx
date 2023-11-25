import React from 'react';
import ThemedContainer from './ThemedContainer';

const NodeModal = () => {
  return (
    <ThemedContainer>
      <div className="nodeModalContainer">
        <div className="nodeModalHeader">
          <div className="nodeModalTitle">Node Title</div>
          <div className="nodeModalClose">X</div>
        </div>
        <div className="nodeModalBody">
          <div className="nodeModalPodsView"></div>
        </div>
      </div>
    </ThemedContainer>
  );
};

export default NodeModal;
