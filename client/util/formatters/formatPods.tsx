import { Pod } from '../../components/Pod/index';

/**
 * Formats the pods of a node into a list of JSX elements.
 * @param pods - The pods of a node.
 * @returns A list of JSX elements.
 */

export const formatPods = (
  pods: any[] = [],
  interval: number = 6,
  clickFunc?: (...args: any) => any,
) => {
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
          key={element.name}
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