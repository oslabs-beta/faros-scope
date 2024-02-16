"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setArrayScal = exports.setScale = exports.formatLettersAsSpans = exports.setArrayAnimationDelay = exports.setAnimationDelay = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const setAnimationDelay = (element, delay) => {
    element.style.animationDelay = `${delay}s`;
};
exports.setAnimationDelay = setAnimationDelay;
/**
 * Sets the animation delay for an array of elements.
 * @param elements The array of elements to set the animation delay for.
 * @param origin The origin of the animation. Can be 'center', 'left', or 'right'.
 * @returns void
 */
const setArrayAnimationDelay = (elements, origin) => {
    let seconds = 0;
    if (origin === 'center') {
        const center = Math.floor(elements.length / 2);
        let i = center, j = center + 1;
        while (i >= 0 || j < elements.length) {
            if (i >= 0) {
                (0, exports.setAnimationDelay)(elements[i], ++seconds);
                i--;
            }
            if (j < elements.length) {
                (0, exports.setAnimationDelay)(elements[j], ++seconds);
                j++;
            }
        }
    }
    else if (origin === 'left') {
        for (let i = 0; i < elements.length; i++) {
            (0, exports.setAnimationDelay)(elements[i], ++seconds);
        }
    }
    else if (origin === 'right') {
        for (let i = elements.length - 1; i >= 0; i--) {
            (0, exports.setAnimationDelay)(elements[i], ++seconds);
        }
    }
};
exports.setArrayAnimationDelay = setArrayAnimationDelay;
/**
 * Formats a string as an array of spans, each span containing a single letter.
 * @param text The text to format.
 * @returns An array of spans, each span containing a single letter.
 */
const formatLettersAsSpans = (text) => {
    const letters = text.split('');
    const spans = letters.map((letter, index) => {
        return ((0, jsx_runtime_1.jsx)("span", { className: "letter", children: letter }, index));
    });
    return spans;
};
exports.formatLettersAsSpans = formatLettersAsSpans;
/**
 * Sets the scale of an element.
 * @param element The element to set the scale for.
 * @param scale The scale to set.
 * @returns void
 */
const setScale = (element, scale) => {
    element.style.transform = `scale(${scale})`;
};
exports.setScale = setScale;
/**
 * Sets the scale of an array of elements.
 * @param elements The array of elements to set the scale for.
 * @param scale The scale to set.
 * @returns void
 */
const setArrayScal = (elements, scale) => {
    elements.forEach((element) => {
        (0, exports.setScale)(element, scale);
    });
};
exports.setArrayScal = setArrayScal;
