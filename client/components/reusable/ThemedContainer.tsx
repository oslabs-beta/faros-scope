import React, { ReactNode } from 'react';
import { useTheme } from '../../Theme';

const ThemedContainer = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme();

  return (
    <div className={`outerContainer ${theme}`}>
      <div className={`innerContainer ${theme}`}>{children}</div>
    </div>
  );
};

export default ThemedContainer;
