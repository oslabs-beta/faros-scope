import { ResponsiveNetwork } from '@nivo/network';
import { useTheme } from '@mui/material';
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GraphResponsiveNetwork = ({ data /* see data tab */ }) => {
  const muiTheme = useTheme();
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        minHeight: '2000px',
        minWidth: '2000px',
        zIndex: 999,
        position: 'relative',
      }}
    >
      <ResponsiveNetwork
        isInteractive={true}
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        linkDistance={(e) => e.distance}
        centeringStrength={0.5}
        repulsivity={10}
        nodeSize={(n) => n.size}
        activeNodeSize={(n) => 1.5 * n.size}
        nodeColor={(e) => e.color}
        nodeBorderWidth={5}
        nodeBorderColor={{
          from: 'color',
          modifiers: [['darker', 0.8]],
        }}
        linkThickness={(n) => 2 + 2 * n.target.data.height}
        linkBlendMode="multiply"
        linkColor={(e) => muiTheme.palette.mode === 'dark' ? 'white' : 'black'} // Change this line to match your edge data property
        // linkBorderColor={{
        //   from: 'color',
        //   modifiers: [['darker', 0.8]],
        // }}
        motionConfig="wobbly"
        nodeTooltip={(e) => (
          <div style={{ color: 'black', backgroundColor: 'white' }}>
            {e.node.id}
          </div>
        )}
      />
    </div>
  );
};

export default GraphResponsiveNetwork;
