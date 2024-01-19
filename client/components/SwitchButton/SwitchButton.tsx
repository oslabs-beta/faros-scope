import styles from './SwitchButton.module.scss';
import { useTheme } from '../../hooks/useTheme';
import classNames from 'classnames';
import { FaSun, FaMoon } from 'react-icons/fa';

interface SwitchButtonProps {
  checked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

/**
 * A basic switch button that uses the current theme for styling, and toggles the current global theme between light and dark modes
 * @param checked
 * @param onChange
 * @returns ReactNode
 */
export const SwitchButton = ({ onChange }: SwitchButtonProps) => {
  const { theme } = useTheme();
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
            checked={theme === 'light'}
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
            checked={theme === 'dark'}
            onChange={onChange}
          />
          <FaMoon className={styles.moonIcon} />
        </label>
      </div>
    </div>
  );
};
