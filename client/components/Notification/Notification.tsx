import '../../css/NotifDisplay.scss';
import { useTheme } from '@mui/material';

interface Props {
    data: any;
}

export const Notification = ( { data }: Props) => {
  const muiTheme = useTheme();
  return (
    <div className={`notificationMessage ${muiTheme.palette.mode}`}>
      <div>{data.name}</div>
      <div className="logText">{data.logText}</div>
    </div>
  );
  
}
