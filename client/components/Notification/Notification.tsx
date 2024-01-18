import '../../css/NotifDisplay.scss';
import { useTheme } from '../../hooks/useTheme';

interface Props {
    data: any;
}

export const Notification = ( { data }: Props) => {
  const { theme } = useTheme();
  return (
    <div className={`notificationMessage ${theme}`}>
    <div>{data.name}</div>
    <div className="logText">{data.logText}</div>
    </div>)
  
}
