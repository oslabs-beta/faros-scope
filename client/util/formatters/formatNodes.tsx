import { Node } from '../../components/Node/Node';



/**
 * Formats the nodes of a cluster into a list of JSX elements.
 * @param arr - The nodes of a cluster.
 * @returns A list of JSX elements.
 */
export const formatNodes = (arr: Node[] = [], interval: number = 4): JSX.Element[] => {
  const result: JSX.Element[] = [];
  const dimensions = {
    width: `${(arr.length % 2) + 9}em`,
    height: `${(arr.length % 2) + 9}em`,
    maxWidth: '15em',
    maxHeight: '15em',
  };

  let i = 0;
  while (i < arr.length) {
    const nodesSlice = arr.slice(i, i + interval);

    const row = nodesSlice.map((node: any) => {
      return <Node dimensions={dimensions} key={node.name} node={node} />;
    });

    result.push(<div className="row">{row}</div>);

    i += interval; 
  }
  return result;
};
