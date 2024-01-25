import '../../css/NotifDisplay.scss';
import { formatNotifications } from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { useTheme } from '@mui/material';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState): RootState['clusterEvents']['entities'] =>
      state.clusterEvents.entities,
  );
  const muiTheme = useTheme();

  let filteredLogHistory;

  if (logHistory) {
    filteredLogHistory = formatNotifications(logHistory);
  }

  return (
    <div className={`outerNotifContainer ${muiTheme.palette.mode}`}>
      <div className={`notificationContainer ${muiTheme.palette.mode}`}>
        <h2 className="notificationTitle">Notifications</h2>
        {filteredLogHistory}
      </div>
    </div>
  );
};
