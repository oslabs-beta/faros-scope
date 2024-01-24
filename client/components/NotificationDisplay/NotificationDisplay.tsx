import '../../css/NotifDisplay.scss';
import { formatNotifications } from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { useCustomTheme } from '../../hooks/useCustomTheme';

// import { Notification } from '../Notification/Notification';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState): RootState['clusterEvents']['entities'] =>
      state.clusterEvents.entities,
  );
  const theme = useCustomTheme();
  // const currentState = useSelector((state: RootState) => state.clusterEvents);

  let filteredLogHistory;

  if (logHistory) {
    console.log(logHistory);
    filteredLogHistory = formatNotifications(logHistory);
  }

  return (
    <div className={`notificationContainer ${theme}`}>
      <h2 className="notificationTitle">Notifications</h2>
      {filteredLogHistory}
    </div>
  );
};
