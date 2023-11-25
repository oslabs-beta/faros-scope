import React from 'react';

/**
 * Formats the pods of a node into a list of JSX elements.
 * @param pods - The pods of a node.
 * @returns A list of JSX elements.
 */
const formatPods = (
  pods: any[] = [],
  interval: number = 4,
  clickFunc?: (...args: any) => any,
) => {
  const result: any = [];

  let i = 0;
  while (i < pods.length) {
    const elements = pods.slice(i, i + interval);

    const row = elements.map((element: any) => {
      return (
        <div onClick={clickFunc} key={element.name} className="podContainer">
          <div className="pod">
            {element.name}
          </div>
        </div>
      );
    });

    result.push(
      <div key={i} className="row">
        {row}
      </div>,
    );

    i += interval; // Increment by interval
  }
  return result;
};

export default formatPods;
