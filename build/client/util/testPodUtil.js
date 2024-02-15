"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hexagonChain = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const testPod_1 = require("../components/testPods/testPod");
function hexagonChain(startX, startY, size, count) {
    const hexagons = [];
    for (let col = 0; col < count; col++) {
        if (col % 2 == 0) {
            const xPos = startX + col * size;
            const yPos = startY;
            hexagons.push((0, jsx_runtime_1.jsx)(testPod_1.Hexagon, { x: xPos, y: yPos, r: size, fill: Math.random() > 0.5 ? 'red' : 'blue' }));
        }
        else {
            const xPos = startX + col * size;
            const yPos = startY - size * Math.sqrt(3);
            hexagons.push((0, jsx_runtime_1.jsx)(testPod_1.Hexagon, { x: xPos, y: yPos, r: size, fill: Math.random() > 0.5 ? 'red' : 'blue' }));
        }
    }
    return hexagons;
}
exports.hexagonChain = hexagonChain;
