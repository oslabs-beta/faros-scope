import '../../css/NotifDisplay.scss';
import { useCustomTheme } from '../../hooks/useCustomTheme';

interface Props {
    data: any;
}

export const Notification = ( { data }: Props) => {
  const { theme } = useCustomTheme();
  return (
    <div className={`notificationMessage ${theme}`}>
    <div>{data.name}</div>
    <div className="logText">{data.logText}</div>
    </div>)
  
}
