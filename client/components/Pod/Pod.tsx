import formatContainers from '../../util/formatContainers';

interface PodProps {
  podName: string;
  podData: any;
  animationDelay?: string;
  clickFunc?: (...args: any) => void;
}

export const Pod = ({
  podName,
  podData,
  animationDelay,
  clickFunc,
}: PodProps) => {
  // console.log(podData.containers[0].usage.cpu)
  //* cpu% = state.nodeName.pods.podName.CPU
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
          <div className="podCpu">Cpu: {podData.containers[0].usage?.cpu}</div>
          <div className="podMemory">Memory: {podData.containers[0].usage?.memory}</div>
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
