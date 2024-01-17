import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import './Pod.module.scss';

interface Props {
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
}: Props) => {
  const useSelectorState = useSelector((state: RootState) => state.metricsMap);
  const { cpuUsagePct, memUsagePct } = useSelectorState?.metricsMap[
    podName
  ] || { cpuUsage: 0, memUsage: 0 };

  const podCPU = cpuUsagePct?.toFixed(2) || 0;
  const podMemory = memUsagePct?.toFixed(2) || 0;

  return (
    <div
      style={{ animationDelay: animationDelay }}
      onClick={clickFunc}
      key={podName}
      className={`podContainer ${
        podCPU >= 80
          ? 'unhealthyPod'
          : podCPU >= 50
          ? 'warningPod'
          : 'healthyPod'
      }`}
    >
      <div className="pod">
        <div className="podName">{podName}</div>
        <div className="podMetrics">
          <div className="podCpu">
            CPU:&nbsp;
            <span
              className={`${
                podCPU >= 80
                  ? 'inlineRedText'
                  : podCPU >= 50
                  ? 'inlineOrangeText'
                  : 'inlineBlueText'
              }`}
            >
              {podCPU}%
            </span>
          </div>
          <div className="podMemory">
            Memory:&nbsp;
            <span
              className={`${
                podMemory >= 80
                  ? 'inlineRedText'
                  : podMemory >= 50
                  ? 'inlineOrangeText'
                  : 'inlineBlueText'
              }`}
            >
              {podMemory}%
            </span>
          </div>
        </div>
        <label className="containersLabel">Containers</label>
        {podData.containers &&
          podData.containers.map((container: any) => {
            const key = `${container.name}/${podName}`;
            const { cpuUsagePct, memUsagePct } = useSelectorState?.metricsMap[
              key
            ] || { cpuUsage: 0, memUsage: 0 };

            const containerCPU = cpuUsagePct?.toFixed(2) || 0;
            const containerMemory = memUsagePct?.toFixed(2) || 0;

            return (
              <div className="containerBox">
                <label className="containerTitle">{container.name}</label>
                <div className="infoDiv">
                  <div>
                    CPU:&nbsp;
                    <span
                      className={`
                    ${
                      containerCPU >= 80
                        ? 'inlineRedText'
                        : containerCPU >= 50
                        ? 'inlineOrangeText'
                        : 'inlineBlueText'
                    }`}
                    >
                      {containerCPU}%
                    </span>
                  </div>
                  <div>
                    Memory: &nbsp;
                    <span
                      className={`
                    ${
                      containerMemory >= 80
                        ? 'inlineRedText'
                        : containerMemory >= 50
                        ? 'inlineOrangeText'
                        : 'inlineBlueText'
                    }`}
                    >
                      {containerMemory}%
                    </span>
                  </div>
                  <div>
                    Image:&nbsp;
                    <div className="imageBox textShadowLight">
                      {container.image}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
