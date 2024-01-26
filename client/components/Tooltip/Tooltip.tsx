import { useState, ReactNode } from 'react';
import { useTheme } from '@mui/material';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [show, setShow] = useState(false);
  const muiTheme = useTheme();

  const hideTooltip = () => {
    setShow(false);
  };

  const showTooltip = () => {
    setShow(true);
  };

  return (
    <div className="tooltip" onMouseLeave={hideTooltip}>
      {show && (
        <span className={`tooltip-text ${muiTheme.palette.mode}`}>{text}</span>
      )}
      <div className="tooltip-trigger" onMouseOver={showTooltip}>
        {children}
      </div>
    </div>
  );
};
