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
  // console.log(podData.containers[0].usage.cpu)
  //* cpu% = state.nodeName.pods.podName.CPU

  //   console.log('PODDATA', podData);
  // console.log('COMBINATION', `${podData.containers[0]}/podName`);
  // console.log('Name of container', podData.containers[0].name)
  const useSelectorState = useSelector((state) => state);

  const { cpuUsage, memUsage } = useSelectorState.metricsMap.metrics[podName] || { cpuUsage: 0, memUsage: 0 };


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
          {/* <div className="podCpu">Cpu: {podData.containers[0].usage?.cpu}</div> */}
          <div className="podCpu">Cpu: {cpuUsage}</div>
          {/* <div className="podMemory">
            Memory: {podData.containers[0].usage?.memory}
          </div> */}
          <div className="podMemory">Memory: {memUsage}</div>
        </div>
        {/* {podData.containers && (
          <div className="containerBuckets">
            {formatContainers(podData.containers)}
          </div>
        )} */}

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
