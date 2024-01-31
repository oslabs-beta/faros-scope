import { ReactNode } from 'react';
import { useTheme } from '@mui/material';

/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */

export const ThemeContainer = ({
  children,
  IDOverride,
  style,
}: {
  children: ReactNode;
  IDOverride?: string;
  style?: any;
}) => {
  const muiTheme = useTheme();
  return (
    <div
      style={style}
      id={IDOverride || undefined}
      className={`styledContainer ${muiTheme.palette.mode}`}
    >
      {children}
    </div>
  );
};
