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
  console.log('Selector State Pods', useSelectorState)
  const { cpuUsagePct, memUsagePct } = useSelectorState.metricsMap.metrics[podName] || { cpuUsage: 0, memUsage: 0 };

  return (
    <div
      style={{ animationDelay: animationDelay }}
      onClick={clickFunc}
      key={podName}
      className="podContainer" >
      <div className="pod">
        <div className="podName">{podName}</div>
        <div className="podMetrics">
          <div className="podCpu">Cpu: {cpuUsagePct.toFixed(2)}%</div>
          <div className="podMemory">Memory: {memUsagePct.toFixed(2)}%</div>
        </div>
          {podData.containers && (
            podData.containers.map((container)=>{
              const key = `${container.name}/${podName}`;
              const { cpuUsage, memUsage } = useSelectorState.metricsMap.metrics[key] || { cpuUsage: 0, memUsage: 0 }
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
