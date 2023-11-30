import React, { ReactNode } from 'react';
import { useTheme } from '../../Theme';

import styles from './ThemeContainer.module.css';
import classNames from 'classNames';

/**
 * A basic container that uses the current theme for styling, and wraps its children in a centered div
 * @param children
 * @returns ReactNode
 */

export const ThemeContainer = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();
  return (
    <div className={`outerContainer ${theme}`}>
      <div className={`innerContainer ${theme}`}>{children}</div>
    </div>
  );
};
