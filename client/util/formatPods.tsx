import React from 'react';


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

import formatContainers from './formatContainers';
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
            {element.containers && formatContainers(element.containers)}
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
