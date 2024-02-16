"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hexagon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Hexagon = ({ x, y, r, fill }) => {
    const points = getPoints();
    const polyStyle = {
        fill: fill || 'white',
        stroke: 'black',
        strokeWidth: '2px',
    };
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
    return ((0, jsx_runtime_1.jsx)("polygon", { style: polyStyle, points: points }));
};
exports.Hexagon = Hexagon;
