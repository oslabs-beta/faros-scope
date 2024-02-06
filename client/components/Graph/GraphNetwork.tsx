import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { ResponsiveNetworkCanvas } from '@nivo/network';
import { useTheme, Snackbar, Alert } from '@mui/material';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

declare module '@nivo/network' {
  interface InputNode {
    id: string;
    label: string;
    size: number;
    color: string;
    height: number;
    type: string;
  }
  interface InputLink {
    source: string;
    target: string;
    distance: number;
  }
}

const GraphResponsiveNetwork = ({
  data,
  lengthOfData,
  draggableContainer,
}: any) => {
  const muiTheme = useTheme();
  const containerRef = draggableContainer;
  const [open, setOpen] = useState(false);

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
      {() => (
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
              centeringStrength={1}
              repulsivity={100}
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
              linkColor={(n) =>
                n.source.data.type === 'namespace'
                  ? 'cyan'
                  : muiTheme.palette.mode === 'dark'
                  ? 'white'
                  : 'black'
              }
              motionConfig="wobbly"
              nodeTooltip={(e) => (
                <div
                  style={{
                    border: `2px solid ${muiTheme.palette.primary.main}`,
                    padding: '10px',
                    borderRadius: '20px',
                    color: muiTheme.palette.background.default,
                    backgroundColor: muiTheme.palette.background.inverted,
                    textAlign: 'center',
                  }}
                >
                  ID: {e.node.data.label || e.node.id} <br />
                  Type: {e.node.data.type.toUpperCase()} <br />
                  <span
                    style={{
                      color: muiTheme.palette.primary.main,
                    }}
                  >
                    CLICK TO COPY ID
                  </span>
                </div>
              )}
              onClick={(n) => {
                console.log(n);
                navigator.clipboard.writeText(
                  n.id || n.data.id || n.data.label || '',
                );
                setOpen(true);
              }}
            />
            {createPortal(
              <Snackbar
                open={open}
                onClose={() => setOpen(false)}
                autoHideDuration={5000}
              >
                <Alert
                  severity="success"
                  variant="filled"
                  sx={{ color: 'white' }}
                >
                  Copied to clipboard!
                </Alert>
              </Snackbar>,
              document.body,
            )}
          </div>
        </TransformComponent>
      )}
    </TransformWrapper>
  );
};

export default GraphResponsiveNetwork;
