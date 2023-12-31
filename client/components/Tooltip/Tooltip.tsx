import { useState, ReactNode } from 'react';
import { useTheme } from '../context/Theme';

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export const Tooltip = ({ children, text }: TooltipProps) => {
  const [show, setShow] = useState(false);
  const { theme } = useTheme();

  const hideTooltip = () => {
    setShow(false);
  };

  const showTooltip = () => {
    setShow(true);
  };

  return (
    <div className="tooltip" onMouseLeave={hideTooltip}>
      {show && <span className={`tooltip-text ${theme}`}>{text}</span>}
      <div className="tooltip-trigger" onMouseOver={showTooltip}>
        {children}
      </div>
    </div>
  );
};
