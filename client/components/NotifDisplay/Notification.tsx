import React from 'react'
import '../../css/NotifDisplay.scss';

const Notification = ( { data }) => {

  return (
    <div className="notificationMessage">
    <div>{data.name}</div>
    <div className="logText">{data.logText}</div>
    </div>
  )
}

export default Notification