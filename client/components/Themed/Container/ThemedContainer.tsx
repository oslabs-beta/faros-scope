import { ReactNode } from 'react';
import { useTheme } from '../../context/Theme';

/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */

export const ThemedContainer = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={`outerContainer ${theme}`}>
      <div className={`innerContainer ${theme}`}>{children}</div>
    </div>
  );
};
