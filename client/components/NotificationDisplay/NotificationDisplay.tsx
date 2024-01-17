import '../../css/NotifDisplay.scss';
import {formatNotifications} from '../../util';
import { useSelector } from 'react-redux';
import { RootState } from '../../../types/types';
import { useTheme } from '../../hooks/useTheme';

export const NotificationDisplay = () => {
  const logHistory = useSelector(
    (state: RootState) => state.clusterEvents.entities,
  );
  const { theme } = useTheme();
  let filteredLogHistory;

  if (logHistory) {
    filteredLogHistory = formatNotifications(logHistory);
  }

  return (
    <div className={`notificationContainer ${theme}`}>
      <h2 className="notificationTitle">Notifications</h2>
      {filteredLogHistory}
    </div>
  );
};
