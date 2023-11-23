import React from 'react';
import Pod from './Pod';
import Draggable from './Draggable';
import '../../css/Graph.scss';

interface PodContainerProps {
  nodePods: any[];
  podsViewRef?: any;
}

/**
  * PodContainer is a container that displays the pods of a node when a node is clicked on.
  * @param nodePods - The pods of the node that was clicked on.
  * @param podsViewRef - A reference to the nodePodsView div.
  */
const PodContainer = ({ nodePods, podsViewRef }: PodContainerProps) => {
  return (
    <div ref={podsViewRef} className="podsView">
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
