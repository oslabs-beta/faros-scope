"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const network_1 = require("@nivo/network");
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GraphResponsiveNetwork = ({ data /* see data tab */ }) => ((0, jsx_runtime_1.jsx)("div", { style: {
        height: '100%',
        width: '100%',
        minHeight: '2000px',
        minWidth: '2000px',
        zIndex: 999,
        position: 'relative',
    }, children: (0, jsx_runtime_1.jsx)(network_1.ResponsiveNetwork, { isInteractive: true, data: data, margin: { top: 0, right: 0, bottom: 0, left: 0 }, linkDistance: (e) => e.distance, centeringStrength: 0.5, repulsivity: 10, nodeSize: (n) => n.size, activeNodeSize: (n) => 1.5 * n.size, nodeColor: (e) => e.color, nodeBorderWidth: 1, nodeBorderColor: {
            from: 'color',
            modifiers: [['darker', 0.8]],
        }, linkThickness: (n) => 2 + 2 * n.target.data.height, linkBlendMode: "multiply", motionConfig: "wobbly", nodeTooltip: (e) => ((0, jsx_runtime_1.jsx)("div", { style: { color: 'black', backgroundColor: 'white' }, children: e.node.id })) }) }));
exports.default = GraphResponsiveNetwork;
