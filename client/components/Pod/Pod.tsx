import { useSelector } from 'react-redux';
import { RootState} from '../../redux/store';

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

    const useSelectorState = useSelector((state: RootState) => state.metricsMap);
    const { cpuUsagePct, memUsagePct } = useSelectorState.metricsMap[podName] || { cpuUsage: 0, memUsage: 0 };
    
  return (
    <div
      style={{ animationDelay: animationDelay }}
      onClick={clickFunc}
      key={podName}
      className="podContainer" >
      <div className="pod">
        <div className="podName">{podName}</div>
        <div className="podMetrics">
          <div className="podCpu">CPU: {cpuUsagePct.toFixed(2)}%</div>
          <div className="podMemory">Memory: {memUsagePct.toFixed(2)}%</div>
        </div>
        <label className="containersLabel">Containers</label>
          {podData.containers && (
            podData.containers.map((container: any)=>{
              const key = `${container.name}/${podName}`;
              const { cpuUsagePct, memUsagePct } = useSelectorState.metricsMap[key] || { cpuUsage: 0, memUsage: 0 };
              return (
                <div className="containerBox">
                  <label className='containerTitle'>{container.name}</label>
                  <div className="infoDiv">
                  <div>CPU: {cpuUsagePct.toFixed(2)}%</div>
                  <div>Memory: {memUsagePct.toFixed(2)}%</div>
                  <div>Image: 
                    <div className="imageBox">
                    {container.image}
                    </div>
                  </div>
                  </div>
                </div>
              )
            })
          )}
      </div>
    </div>
  );
};
