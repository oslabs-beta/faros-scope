import '../../css/Switchbutton.scss';
import { useTheme } from '../context/Theme';
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
export const SwitchButton = ({ checked, onChange }: SwitchButtonProps) => {
  const { theme } = useTheme();
  //* Sun is the light theme, moon is the dark theme, image element uses a dynamic path, depending on the theme mode
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
          <img className="themeIcon" src={theme === 'dark' ? moon : sun} />
        </span>
      </div>
    </div>
  );
};
