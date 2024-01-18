import styles from './SwitchButton.module.scss';
import mode from '../../assets/brightness_mode.svg';
import { useTheme } from '../../hooks/useTheme';
import classNames from 'classnames';
import sun from '../../assets/sun.png';
import moon from '../../assets/moon.png';

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
        <label htmlFor="lightTheme">
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
          <img src={sun} alt="Light Theme" />
        </label>

        <label htmlFor="darkTheme">
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
          <img src={moon} alt="Dark Theme" />
        </label>
      </div>
    </div>
  );
};
