import { useTheme } from '@mui/material';
import styles from './SwitchButton.module.scss';
import classNames from 'classnames';
import { FaSun, FaMoon } from 'react-icons/fa';

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
    <div className={styles.switchContainer}>
      <div className={styles.switchButton}>
        <label className={styles.modeLabel} htmlFor="lightTheme">
          <input
            type="radio"
            id="lightTheme"
            className={classNames(
              styles.brightnessModeLight,
              styles.brightnessMode,
            )}
            value="light"
            checked={muiTheme.palette.mode === 'light'}
            onChange={onChange}
          />
          <FaSun className={styles.sunIcon} />
        </label>

        <label className={styles.modeLabel} htmlFor="darkTheme">
          <input
            type="radio"
            id="darkTheme"
            className={classNames(
              styles.brightnessModeLight,
              styles.brightnessMode,
            )}
            value="dark"
            checked={muiTheme.palette.mode === 'dark'}
            onChange={onChange}
          />
          <FaMoon className={styles.moonIcon} />
        </label>
      </div>
    </div>
  );
};
