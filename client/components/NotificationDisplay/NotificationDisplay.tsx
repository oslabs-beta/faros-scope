import '../../css/NotifDisplay.scss';
import { formatNotifications } from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { useCustomTheme } from '../../hooks/useCustomTheme';
// import { Notification } from '../Notification/Notification';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState) => state.clusterEvents.entities,
  );
  const { theme } = useCustomTheme();
  let filteredLogHistory;

  if (logHistory) {
    filteredLogHistory = formatNotifications(logHistory);
  }

  return (
    <div className={`notificationContainer ${theme}`}>
      <h2 className="notificationTitle">Notifications</h2>
      {/* <Notification data={{name: 'test', logText: 'test'}} /> */}
      {filteredLogHistory}
    </div>
  );
};
