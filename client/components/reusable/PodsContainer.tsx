import React from 'react';
import Pod from './Pod';
import Draggable from './Draggable';
import '../../css/Graph.scss';

interface PodContainerProps {
  nodePods: any[];
  nodePodsViewRef?: any;
}

const PodContainer = ({ nodePods, nodePodsViewRef }: PodContainerProps) => {
  return (
    <div ref={nodePodsViewRef} className="podsView">
      <Draggable delay={5000}>
        <div className="podsViewInner">
          <div className="podsContainer">
            {nodePods.map((pod) => (
              <Pod podName={pod.name} metrics={{}} />
            ))}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default PodContainer;
