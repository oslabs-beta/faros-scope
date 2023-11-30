import formatContainers from '../../util/formatContainers';

interface PodProps {
  podName: string;
  podData: any;
  animationDelay?: string;
  clickFunc?: (...args: any) => void;
}

const Pod = ({ podName, podData, animationDelay, clickFunc }: PodProps) => {
  return (
    <div
      style={{ animationDelay: animationDelay }}
      onClick={clickFunc}
      key={podName}
      className="podContainer"
    >
      <div className="pod">
        <div className="podName">{podName}</div>
        <div className="podMetrics">
          <div className="podCpu">CPU: 0</div>
          <div className="podMemory">Memory: 0</div>
        </div>
        {podData.containers && (
          <div className="containerBuckets">
            {formatContainers(podData.containers)}
          </div>
        )}
      </div>
    </div>
  );
};

export default Pod;
