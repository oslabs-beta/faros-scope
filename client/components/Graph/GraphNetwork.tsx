import { useEffect } from 'react';
import { ResponsiveNetwork } from '@nivo/network';
import { useTheme } from '@mui/material';

const GraphResponsiveNetwork = ({
  data,
  lengthOfData,
  draggableContainer,
}: any) => {
  const muiTheme = useTheme();
  const containerRef = draggableContainer;

  // Calculate the height dynamically based on the length of data
  const calculatedHeight = lengthOfData * 10;

  useEffect(() => {
    // Scroll to the center of the container after rendering
    if (containerRef.current) {
      const containerHeight = containerRef.current.clientHeight;
      const scrollOffset = (calculatedHeight - containerHeight) / 2;
      containerRef.current.scrollTop = scrollOffset;

      const containerWidth = containerRef.current.clientWidth;
      const scrollOffsetWidth = (calculatedHeight - containerWidth) / 2;
      containerRef.current.scrollLeft = scrollOffsetWidth;
    }
  }, [calculatedHeight]);

  return (
    <div
      style={{
        height: `${calculatedHeight}px`, // Set the height dynamically
        width: '100%',
        position: 'absolute',
        zIndex: 999,
      }}
    >
      <ResponsiveNetwork
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(e) => e.distance}
        centeringStrength={0.5}
        repulsivity={75}
        nodeSize={(n) => n.size}
        activeNodeSize={(n) => 1.5 * n.size}
        nodeColor={(e) => e.color}
        nodeBorderWidth={5}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.8]],
        }}
        distanceMin={20}
        linkThickness={(n) => 2 + 2 * n.target.data.height}
        linkBlendMode="multiply"
        linkColor={() => (muiTheme.palette.mode === 'dark' ? 'white' : 'black')}
        motionConfig="wobbly"
        nodeTooltip={(e) => (
          <div style={{ color: 'black', backgroundColor: 'white' }}>
            {e.node.data.label || e.node.id}
          </div>
        )}
      />
    </div>
  );
};

export default GraphResponsiveNetwork;
