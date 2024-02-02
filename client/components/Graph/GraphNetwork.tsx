import { useEffect } from 'react';
import { ResponsiveNetwork, ResponsiveNetworkCanvas } from '@nivo/network';
import { useTheme } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const GraphResponsiveNetwork = ({
  data,
  lengthOfData,
  draggableContainer,
}: any) => {
  const muiTheme = useTheme();
  const containerRef = draggableContainer;

  // Calculate the height dynamically based on the length of data
  const calculatedHeight = lengthOfData * 10;
  const calculatedWidth = lengthOfData * 10;

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
    <TransformWrapper
      initialScale={1}
      initialPositionX={0}
      initialPositionY={0}
      wheel={{ step: 100 }}
      centerOnInit={true}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <TransformComponent
          wrapperStyle={{
            width: '100%',
            height: '100%',
          }}
        >
          <div
            style={{
              height: `calc(100vh + ${calculatedHeight}px)`,
              width: `calc(100vw + ${calculatedWidth}px)`,
              position: 'relative',
              zIndex: 999,
            }}
          >
            <ResponsiveNetworkCanvas
              data={data}
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              linkDistance={(e) => e.distance}
              centeringStrength={0.5}
              repulsivity={80}
              nodeSize={(n) => n.size}
              activeNodeSize={(n) => n.size * 2}
              nodeColor={(e) => e.color}
              nodeBorderWidth={5}
              nodeBorderColor={{
                from: 'color',
                modifiers: [['darker', 0.8]],
              }}
              distanceMin={20}
              linkThickness={(n) => 2 + 2 * n.target.data.height}
              pixelRatio={2}
              // linkBlendMode="multiply"
              linkColor={() =>
                muiTheme.palette.mode === 'dark' ? 'white' : 'black'
              }
              motionConfig="wobbly"
              nodeTooltip={(e) => (
                <div style={{ color: 'black', backgroundColor: 'white' }}>
                  {e.node.data.label || e.node.id}
                </div>
              )}
            />
          </div>
        </TransformComponent>
      )}
    </TransformWrapper>
  );
};

export default GraphResponsiveNetwork;
