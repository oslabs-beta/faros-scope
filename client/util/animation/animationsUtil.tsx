import { ReactNode } from 'react';

export const setAnimationDelay = (element: HTMLElement, delay: number): void => {
  element.style.animationDelay = `${delay}s`;
}

/**
 * Sets the animation delay for an array of elements.
 * @param elements The array of elements to set the animation delay for.
 * @param origin The origin of the animation. Can be 'center', 'left', or 'right'.
 * @returns void
 */
export const setArrayAnimationDelay = (
  elements: HTMLElement[],
  origin: string,
): void =>  {
  let seconds = 0;
  if (origin === 'center') {
    const center = Math.floor(elements.length / 2);
    let i = center,
      j = center + 1;
    while (i >= 0 || j < elements.length) {
      if (i >= 0) {
        setAnimationDelay(elements[i], ++seconds);
        i--;
      }
      if (j < elements.length) {
        setAnimationDelay(elements[j], ++seconds);
        j++;
      }
    }
  } else if (origin === 'left') {
    for (let i = 0; i < elements.length; i++) {
      setAnimationDelay(elements[i], ++seconds);
    }
  } else if (origin === 'right') {
    for (let i = elements.length - 1; i >= 0; i--) {
      setAnimationDelay(elements[i], ++seconds);
    }
  }
}

/**
 * Formats a string as an array of spans, each span containing a single letter.
 * @param text The text to format.
 * @returns An array of spans, each span containing a single letter.
 */
export const formatLettersAsSpans = (text: string): ReactNode[] => {
  const letters = text.split('');
  const spans = letters.map((letter, index) => {
    return (
      <span key={index} className="letter">
        {letter}
      </span>
    );
  });
  return spans;
}

/**
 * Sets the scale of an element.
 * @param element The element to set the scale for.
 * @param scale The scale to set.
 * @returns void
 */
export const setScale=(element: HTMLElement, scale: number): void =>{
  element.style.transform = `scale(${scale})`;
}

/**
 * Sets the scale of an array of elements.
 * @param elements The array of elements to set the scale for.
 * @param scale The scale to set.
 * @returns void
 */
export const setArrayScal = (elements: HTMLElement[], scale: number): void=> {
  elements.forEach((element) => {
    setScale(element, scale);
  });
}
