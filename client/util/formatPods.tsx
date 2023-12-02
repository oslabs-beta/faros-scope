import { Pod } from '../components/Pod/index';
import { useGetPodStatsQuery } from '../redux/metricsApi';

//* example arr input:
//* [
//*   { name: '1', containers: [{ name: '1' }, { name: '2' }] },
//*   { name: '2'},
//* ]

/**
 * Formats the pods of a node into a list of JSX elements.
 * @param pods - The pods of a node.
 * @returns A list of JSX elements.
 */
// const { refetch } = metricsApi.endpoints.getPodStats.useQuerySubscription(undefined)

const formatPods = (
  // Pods polling query
  
  pods: any[] = [],
  interval: number = 7,
  clickFunc?: (...args: any) => any,
  ) => {

    const { data } = useGetPodStatsQuery(undefined, {pollingInterval: 5000})
    if(data) pods = data;
  
  // const state = useSelector(metricsApi.endpoints.getClusterInfo.select());
  // console.log('STATE: ', state);
  const result: any = [];

  let i = 0;
  while (i < pods.length) {
    const elements = pods.slice(i, i + interval); // Get interval elements

    const row = elements.map((element: any, indx) => {
      const animationDelay = `${2 + indx / 4 + i / 4}s`;
      return (
        <Pod
          podName={element.name}
          podData={element}
          animationDelay={animationDelay}
          clickFunc={clickFunc}
        />
      );
    });

    result.push(
      <div key={i} className="podRow">
        {row}
      </div>,
    );

    i += interval; // Increment by interval
  }
  return result;
};

export default formatPods;
