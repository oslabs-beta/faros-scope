import { useEffect } from "react";

interface TestPodProps {
  x: number;
  y: number;
  r: number;
  fill?: string;
}

export const Hexagon = ({ x, y, r, fill }: TestPodProps) => {
  const points = getPoints();

  const polyStyle = {
    fill: fill || 'white',
    stroke: 'black',
    strokeWidth: '2px',
  }

  function getPoints() {
    const startAngle = (2 * Math.PI) / 12;
    const points = [];

    for (let i = 0; i < 6; i++) {
      const angle = startAngle + (i / 6) * (2 * Math.PI);
      const xPos = x + Math.cos(angle) * r;
      const yPos = y + Math.sin(angle) * r;
      points.push(`${xPos},${yPos}`);
    }

    return points.join(' ');
  }

  return (
    <polygon style={polyStyle} points={points} />
  );
};
