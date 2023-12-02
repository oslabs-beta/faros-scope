import Node from '../components/Node/Node';
import { useMemo } from 'react';
import { useSelector } from 'react-redux'; 
import { createSelector } from '@reduxjs/toolkit';
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
  const dimensions = {
    width: `${(arr.length % 2) + 5}em`,
    height: `${(arr.length % 2) + 5}em`,
    maxWidth: '8em',
    maxHeight: '8em',
  };

    const nodesName = useMemo(() => {
        return createSelector()
    })

  let i = 0;
  while (i < arr.length) {
    const nodesSlice = arr.slice(i, i + interval);

    const row = nodesSlice.map((node: any) => {
      return (
        <Node dimensions={dimensions} key={node.name} node={node} />
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
}

export default formatNodes;
