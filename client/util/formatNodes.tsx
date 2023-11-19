import React from 'react';
import Node from '../components/reusable/Node';

function formatNodes(arr: any[], interval: number = 4) {
  const result: any = [];
  let i = 0;
  let even = false;
  while (i < arr.length) {
    const elements = arr.slice(i, i + interval);
    const row = [];
    for (let j = 0; j < elements.length; j++) {
      row.push(<Node key={j} content={elements[j]} />);
    }
    result.push(
      <div className='row'>{row}</div>,
    );
    i += interval; // Increment by interval
    even = !even; // Toggle even for the next container
  }
  return result;
}

export default formatNodes;
