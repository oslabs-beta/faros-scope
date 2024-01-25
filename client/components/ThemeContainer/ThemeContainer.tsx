import { ReactNode, useContext } from 'react';
import { useTheme } from '@mui/material';

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
  const muiTheme = useTheme();
  return (
    <div id={IDOverride || undefined} className={`outerContainer ${muiTheme}`}>
      <div
        id={IDOverride || undefined}
        className={`innerContainer ${muiTheme.palette.mode}`}
      >
        {children}
      </div>
    </div>
  );
};
