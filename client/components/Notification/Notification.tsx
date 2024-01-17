import '../../css/NotifDisplay.scss';

export const Notification = ({ data }) => {
  return (
    <div className="notificationMessage">
      <div>{data.name}</div>
      <div className="logText">{data.logText}</div>
    </div>
  );
};
