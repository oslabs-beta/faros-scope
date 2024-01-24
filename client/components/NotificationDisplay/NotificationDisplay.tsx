import '../../css/NotifDisplay.scss';
import { formatNotifications } from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState): RootState["clusterEvents"]["entities"] => state.clusterEvents.entities,
  );
  const currentState = useSelector((state: RootState) => state.clusterEvents);
  console.log('Log history store', currentState);

  let filteredLogHistory;

  if (logHistory) {
    console.log(logHistory);
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
