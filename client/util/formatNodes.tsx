import React from 'react';
import Node from '../components/reusable/Node';

//* example arr input:
//* [
//*   { name: '1'},
//*   { name: '2'},
//* ]

/**
 * Formats the nodes of a cluster into a list of JSX elements.
 * @param arr - The nodes of a cluster.
 * @returns A list of JSX elements.
 */
function formatNodes(arr: any[] = [], interval: number = 4) {
  const result: any = [];

  let i = 0;
  while (i < arr.length) {
    const elements = arr.slice(i, i + interval);

    const row = elements.map((element: any) => {
      return <Node key={element.name} content={element} />;
    });

    result.push(
      <div key={i} className='row'>{row}</div>,
    );

    i += interval; // Increment by interval
  }
  return result;
}

export default formatNodes;
