import '../../css/NotifDisplay.scss';
import { formatNotifications } from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState) => state.clusterEvents.entities,
  );
  let filteredLogHistory;

  if (logHistory) {
    filteredLogHistory = formatNotifications(logHistory);
  }

  return (
    <div className="outerNotifContainer">
      <div className="notificationContainer">
        <h2 className="notificationTitle">Notifications</h2>
        {filteredLogHistory}
      </div>
    </div>
  );
};
