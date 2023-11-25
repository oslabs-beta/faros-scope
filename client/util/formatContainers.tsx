import React from 'react';

//* example arr input:
//* [
//*   { name: '1', containers: [{ name: '1' }, { name: '2' }] },
//*   { name: '2'},
//* ]

/**
 * Formats the pods of a node into a list of JSX elements.
 * @param containers - The pods of a node.
 * @returns A list of JSX elements.
 */
const formatContainers = (containers: any[] = []) => {
  return containers.map((element: any) => {
    return (
      // Rename Class
      <div>
        <div> name: {element.name}</div>
        <div> image: {element.image}</div>
      </div>
    );
  });
};

export default formatContainers;
