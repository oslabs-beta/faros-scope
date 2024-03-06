import { useTheme } from '@mui/material';
import { FaSun, FaMoon } from 'react-icons/fa';
import './SwitchButton.scss';

interface SwitchButtonProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * A basic switch button that uses the current theme for styling, and toggles the current global theme between light and dark modes
 * @param checked
 * @param onChange
 * @returns ReactNode
 */
export const SwitchButton = ({ onChange }: SwitchButtonProps) => {
  const muiTheme = useTheme();
  return (
    <div className={'switchContainer'}>
      <div className={'switchButton'}>
        <label className={'modeLabel'} htmlFor="lightTheme">
          <input
            type="radio"
            id="lightTheme"
            className={'brightnessModeLight' + ' ' + 'brightnessMode'}
            value="light"
            checked={muiTheme.palette.mode === 'light'}
            onChange={onChange}
          />
          <FaSun className={'sunIcon'} />
        </label>

        <label className={'modeLabel'} htmlFor="darkTheme">
          <input
            type="radio"
            id="darkTheme"
            className={'brightnessModeLight' + ' ' + 'brightnessMode'}
            value="dark"
            checked={muiTheme.palette.mode === 'dark'}
            onChange={onChange}
          />
          <FaMoon className={'moonIcon'} />
        </label>
      </div>
    </div>
  );
};
