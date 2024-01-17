import { Hexagon } from '../components/testPods/testPod';

export function hexagonChain(
  startX: number,
  startY: number,
  size: number,
  count: number,
) {
  const hexagons = [];
  for (let col = 0; col < count; col++) {
    if (col % 2 == 0) {
      const xPos = startX + col * size;
      const yPos = startY;
      hexagons.push(
        <Hexagon
          x={xPos}
          y={yPos}
          r={size}
          fill={Math.random() > 0.5 ? 'red' : 'blue'}
        />,
      );
    } else {
      const xPos = startX + col * size;
      const yPos = startY - size * Math.sqrt(3);
      hexagons.push(
        <Hexagon
          x={xPos}
          y={yPos}
          r={size}
          fill={Math.random() > 0.5 ? 'red' : 'blue'}
        />,
      );
    }
  }
  return hexagons;
}
