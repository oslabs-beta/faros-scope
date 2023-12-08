import { ReactNode } from 'react';
import '../../../css/ColoredText.scss';

interface ColoredTextProps {
  children: ReactNode;
  color: string;
}

/** 
 * @param color - The color of the text, first letter must be capitalized
*/
export const ColoredText = ({children, color}: ColoredTextProps) => {
  return (
    <span className={`inline${color}Text`}>
      {children}
    </span>
  );
}