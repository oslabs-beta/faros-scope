/**
 * Sets the scale of an element.
 * @param element The element to set the scale of.
 * @param scale The scale to set.
 * @returns Nothing.
 */
export default function setScale(element: HTMLElement, scale: number) {
  element.style.transform = `scale(${scale})`;
}
