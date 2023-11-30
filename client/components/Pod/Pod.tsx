import React from 'react';

import styles from './Pod.module.css';
import classNames from 'classNames';

interface PodProps {
  podName: string;
  metrics: {};
}

export const Pod = (props: PodProps) => {
  console.log('Hello from the Pod'); 
  console.log('Pod Props', props);

  return (
    <div className="outerPod">
      <div className="innerPod">
        <div className="podName">
          <span className="podNameText">{props.podName}</span>
        </div>
        <div className="podMetrics">
          <div className="podCpu">CPU: {/*metrics.cpu*/}</div>
          <div className="podMemory">Memory: {/*metrics.memory*/}</div>
        </div>
      </div>
    </div>
  );
};
