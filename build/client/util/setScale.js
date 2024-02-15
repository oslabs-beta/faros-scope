"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Sets the scale of an element.
 * @param element The element to set the scale of.
 * @param scale The scale to set.
 * @returns Nothing.
 */
function setScale(element, scale) {
    element.style.transform = `scale(${scale})`;
}
exports.default = setScale;
