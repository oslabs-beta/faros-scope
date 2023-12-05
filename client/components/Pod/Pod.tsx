import formatContainers from '../../util/formatContainers';
import { useSelector } from 'react-redux';

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

  const useSelectorState = useSelector((state) => state);
  const { cpuUsage, memUsage } = useSelectorState?.metricsMap?.metrics[podName] || { cpuUsage: 0, memUsage: 0 };

  return (
    <div
      style={{ animationDelay: animationDelay }}
      onClick={clickFunc}
      key={podName}
      className="podContainer" >
      <div className="pod">
        <div className="podName">{podName}</div>
        <div className="podMetrics">
          <div className="podCpu">Cpu: {cpuUsage}</div>
          <div className="podMemory">Memory: {memUsage}</div>
        </div>
          {podData.containers && (
            podData.containers.map((container: any)=>{
              const key = `${container.name}/${podName}`;
              const { cpuUsage, memUsage } = useSelectorState?.metricsMap?.metrics[key] || { cpuUsage: 0, memUsage: 0 }
              return (
                <div>
                  <div>{container.name}</div>
                  <div>{container.image}</div>
                  <div>{cpuUsage}</div>
                  <div>{memUsage}</div>
                </div>
              )
            })
          )}
      </div>
    </div>
  );
};
