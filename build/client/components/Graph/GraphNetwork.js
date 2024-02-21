"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controls = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_dom_1 = require("react-dom");
const network_1 = require("@nivo/network");
const material_1 = require("@mui/material");
const react_zoom_pan_pinch_1 = require("react-zoom-pan-pinch");
const styles_module_css_1 = __importDefault(require("./styles.module.css"));
const Controls = ({ zoomIn, zoomOut, resetTransform, centerView, }) => ((0, jsx_runtime_1.jsxs)("div", { className: styles_module_css_1.default.controlPanel, children: [(0, jsx_runtime_1.jsx)("button", { type: "button", className: styles_module_css_1.default.controlBtn, onClick: () => zoomIn(), children: "Zoom In +" }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: styles_module_css_1.default.controlBtn, onClick: () => zoomOut(), children: "Zoom Out -" }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: styles_module_css_1.default.controlBtn, onClick: () => resetTransform(), children: "Reset" }), (0, jsx_runtime_1.jsx)("button", { type: "button", className: styles_module_css_1.default.controlBtn, onClick: () => centerView(), children: "Center" })] }));
exports.Controls = Controls;
const GraphResponsiveNetwork = ({ data, lengthOfData, draggableContainer, }) => {
    const muiTheme = (0, material_1.useTheme)();
    const containerRef = draggableContainer;
    const [open, setOpen] = (0, react_1.useState)(false);
    // Calculate the height dynamically based on the length of data
    const calculatedHeight = lengthOfData * 10;
    const calculatedWidth = lengthOfData * 10;
    (0, react_1.useEffect)(() => {
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
    return ((0, jsx_runtime_1.jsx)(react_zoom_pan_pinch_1.TransformWrapper, { initialScale: 1, minScale: 0.1, initialPositionX: 0, initialPositionY: 0, wheel: { step: 100 }, centerOnInit: true, children: () => ((0, jsx_runtime_1.jsx)(react_zoom_pan_pinch_1.TransformComponent, { wrapperStyle: {
                width: '100%',
                height: '100%',
            }, children: (0, jsx_runtime_1.jsxs)("div", { style: {
                    height: `calc(100vh + ${calculatedHeight}px)`,
                    width: `calc(100vw + ${calculatedWidth}px)`,
                    position: 'relative',
                    zIndex: 999,
                }, children: [(0, jsx_runtime_1.jsx)(network_1.ResponsiveNetworkCanvas, { data: data, margin: { top: 0, right: 0, bottom: 0, left: 0 }, linkDistance: (e) => e.distance, centeringStrength: 1, repulsivity: 100, nodeSize: (n) => n.size, activeNodeSize: (n) => n.size * 2, nodeColor: (e) => e.color, nodeBorderWidth: 5, nodeBorderColor: {
                            from: 'color',
                            modifiers: [['darker', 0.8]],
                        }, distanceMin: 20, linkThickness: (n) => 2 + 2 * n.target.data.height, pixelRatio: 2, linkColor: (n) => n.source.data.type === 'namespace'
                            ? '#9AFF99' // pastel green
                            : n.source.data.type === 'service'
                                ? '#99C2FF' // pastel blue
                                : n.source.data.type === 'pod'
                                    ? '#FFD699' // pastel orange
                                    : n.source.data.type === 'container'
                                        ? '#99FFFF' // pastel cyan
                                        : muiTheme.palette.mode === 'dark'
                                            ? '#EEEEEE' // light gray
                                            : '#CCCCCC' // pastel gray
                        , motionConfig: "wobbly", nodeTooltip: (e) => ((0, jsx_runtime_1.jsxs)("div", { style: {
                                border: `2px solid ${muiTheme.palette.primary.main}`,
                                padding: '10px',
                                borderRadius: '20px',
                                color: muiTheme.palette.typography.letters,
                                backgroundColor: muiTheme.palette.mode === 'dark'
                                    ? 'rgba(0, 0, 0, 0.5)'
                                    : 'rgba(255, 255, 255, 0.5)',
                                backdropFilter: 'blur(10px)',
                                textAlign: 'center',
                                textShadow: muiTheme.palette.mode === 'dark'
                                    ? '1px 1px 2px black'
                                    : '1px 1px 2px white',
                            }, children: ["ID: ", e.node.data.label || e.node.id, " ", (0, jsx_runtime_1.jsx)("br", {}), "Type: ", e.node.data.type.toUpperCase(), " ", (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)("span", { style: {
                                        color: muiTheme.palette.primary.main,
                                    }, children: "CLICK TO COPY ID" })] })), onClick: (n) => {
                            console.log(n);
                            navigator.clipboard.writeText(n.id || n.data.id || n.data.label || '');
                            setOpen(true);
                        } }), (0, react_dom_1.createPortal)((0, jsx_runtime_1.jsx)(material_1.Snackbar, { open: open, onClose: () => setOpen(false), autoHideDuration: 5000, children: (0, jsx_runtime_1.jsx)(material_1.Alert, { severity: "success", variant: "filled", sx: { color: 'white' }, children: "Copied to clipboard!" }) }), document.body)] }) })) }));
};
exports.default = GraphResponsiveNetwork;
