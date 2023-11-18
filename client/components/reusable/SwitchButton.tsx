import React from 'react';
import '../../css/switchbutton.scss';
import { useTheme } from '../../Theme';

interface SwitchButtonProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

// ! LOCATION! LOCATION! LOCATION! where is this button located
// it's the button that toggles the theme
const SwitchButton = ({ checked, onChange }: SwitchButtonProps) => {
  const { theme } = useTheme();
  const sun = '../../assets/sun.png';
  const moon = '../../assets/moon.png';

  return (
    <div className="switchContainer">
      <div className="switchButton">
        <input
          type="checkbox"
          className="switchBar"
          checked={checked}
          onChange={onChange}
        />
        <span className="slider">
          <img className='themeIcon' src={theme === 'dark' ? moon : sun} />
        </span>
      </div>
    </div>
  );
};

export default SwitchButton;
