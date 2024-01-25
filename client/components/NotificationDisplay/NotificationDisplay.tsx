import '../../css/NotifDisplay.scss';
import { formatNotifications } from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { useTheme } from '@mui/material';

// import { Notification } from '../Notification/Notification';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState): RootState['clusterEvents']['entities'] =>
      state.clusterEvents.entities,
  );
  const muiTheme = useTheme();
  // const currentState = useSelector((state: RootState) => state.clusterEvents);

  let filteredLogHistory;

  if (logHistory) {
    console.log(logHistory);
    filteredLogHistory = formatNotifications(logHistory);
  }

  return (
    <div className={`outerNotifContainer ${theme}`}>
      <div className="notificationContainer">
        <h2 className="notificationTitle">Notifications</h2>
        {filteredLogHistory}
      </div>
    </div>
  );
};
