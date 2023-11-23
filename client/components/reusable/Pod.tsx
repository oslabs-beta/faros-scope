import React from "react";

interface PodProps {
  podName: string;
  metrics: {};
}

const Pod = ({podName, metrics}: PodProps) => {
  return (
    <div className="outerPod">
      <div className="innerPod">
        <div className="podName">{podName}</div>
        <div className="podMetrics">
          <div className="podCpu">CPU: {/*metrics.cpu*/}</div>
          <div className="podMemory">Memory: {/*metrics.memory*/}</div>
        </div>
      </div>
    </div>
  );
};

export default Pod;
