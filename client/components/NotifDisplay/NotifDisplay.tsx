import React from 'react'
import '../../css/NotifDisplay.scss';
import Notification from './Notification';
import formatNotifications from '../../util/formatNotifications';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const NotifDisplay = () => {
    const logHistory = useSelector((state: RootState) => state.clusterEvents.entities);
    const eventsSTATE = useSelector((state: RootState) => state.clusterEvents);
    let filteredLogHistory;
    console.log('REDUX STATE NICK > EDWIN ---->', eventsSTATE)
 
    if(logHistory){
        filteredLogHistory = formatNotifications(logHistory);
    }

    const showNotifications = (): void => {
      const notificationDiv = document.getElementsByClassName('notificationContainer')
      
    }

  return (
    <div className="outerNotifContainer" onClick={():void=>console.log('hi')}>
        <h2 className="notificationTitle">Notifications</h2>
      <div className="notificationContainer">
        {filteredLogHistory}
      </div>
    </div>
  )
}

export default NotifDisplay