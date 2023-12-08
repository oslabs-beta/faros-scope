import React from 'react'
import '../../css/NotifDisplay.scss';
import Notification from './Notification';
import formatNotifications from '../../util/formatNotifications';
import { useSelector } from 'react-redux';


const NotifDisplay = () => {
    const logHistory = useSelector((state) => state.clusterEvents.entities);
    let filteredLogHistory;
 
    if(logHistory){
        filteredLogHistory = formatNotifications(logHistory);
    }

  return (
      <div className="notificationContainer">
            <h2 className="notificationTitle">Notifications</h2>
            {filteredLogHistory}
        </div>
  )
}

export default NotifDisplay