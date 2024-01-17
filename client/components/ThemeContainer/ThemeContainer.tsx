import { ReactNode } from 'react';
import { useTheme } from '../../hooks';

/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */

export const ThemeContainer = ({
  children,
  IDOverride,
}: {
  children: ReactNode;
  IDOverride?: string;
}) => {
  const { theme } = useTheme();
  return (
    <div id={IDOverride || ''} className={`outerContainer ${theme}`}>
      <div id={IDOverride || ''} className={`innerContainer ${theme}`}>
        {children}
      </div>
    </div>
  );
};
