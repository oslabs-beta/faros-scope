import { useState } from 'react';
import formatPods from '../../util/formatPods';
import { useTheme } from '../context/Theme';
import 
import '../../css/Graph.scss';
import '../../css/Pod.scss';

interface PodContainerProps {
  nodePods: any[];
  podsViewRef?: any;
}

// import styles from './PodContainer.module.css';
// import classNames from 'classNames';

/**
 * PodContainer is a container that displays the pods of a node when a node is clicked on.
 * @param nodePods - The pods of the node that was clicked on.
 * @param podsViewRef - A reference to the nodePodsView div.
 */
export const PodContainer = ({ nodePods, podsViewRef }: PodContainerProps) => {


  const [showOverlay, setShowOverlay] = useState(false);
  const { theme } = useTheme();

  const disableOverlay = () => {
    setShowOverlay(false);
    console.log('disableOverlay');
  };

  return (
    <div ref={podsViewRef} className={`podsView ${theme}`}>
      {showOverlay && (
        <span onClick={disableOverlay} className="podsViewOverlay"></span>
      )}
      <div className={`podsViewInner ${theme}`}>
        <div className="podsContainer">{formatPods(nodePods, 6)}</div>
      </div>
    </div>
  );
};
