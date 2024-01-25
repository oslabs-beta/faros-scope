import { useState } from 'react';
import { formatPods } from '../../util';
import { useTheme } from '@mui/material';

import '../../css/graph.scss';
import '../../css/Pod.scss';

interface Props {
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
export const PodContainer = ({ nodePods, podsViewRef }: Props) => {
  const [showOverlay, setShowOverlay] = useState(false);
  const muiTheme = useTheme();

  const disableOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div ref={podsViewRef} className={`podsView ${muiTheme.palette.mode}`}>
      {showOverlay && (
        <span onClick={disableOverlay} className="podsViewOverlay"></span>
      )}
      <div className={`podsViewInner ${muiTheme.palette.mode}`}>
        <div className="podsContainer">{formatPods(nodePods, 7)}</div>
      </div>
    </div>
  );
};
