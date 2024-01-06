import '../../css/NotifDisplay.scss';

interface Props {
    data: any;
}

export const Notification = ( { data }: Props) => {

  return (
    <div className="notificationMessage">
    <div>{data.name}</div>
    <div className="logText">{data.logText}</div>
    </div>)
  
}
