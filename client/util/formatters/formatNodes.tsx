import { Node } from '../../components/Node/Node';

interface Props {
  arr: any[];
  interval?: number;
}

/**
 * Formats the nodes of a cluster into a list of JSX elements.
 * @param arr - The nodes of a cluster.
 * @returns A list of JSX elements.
 */
export const formatNodes = (arr: any[] = [], interval: number = 4): Props => {
  const result: any = [];
  const dimensions = {
    width: `${(arr.length % 2) + 15}em`,
    height: `${(arr.length % 2) + 15}em`,
    maxWidth: '20em',
    maxHeight: '20em',
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
