import { Notification } from '../../components';

interface Props {
  logs: object;
}
interface Notif {
  name: string,
  logText: string
}

/**
 * Converts the clusterEvent object in redux in notification JSX elements
 * @param logs
 * @returns A list of JSX elements
 *
 */

export const formatNotifications = (logs : Props): JSX.Element[] => {
  const result: Notif[] = [];
  console.log('here be them logs: ', logs)

  for (const obj in logs) {
    console.log('here is da obj', obj)
    const newLog: Notif = {
      name: logs[obj].metadata.name,
      logText: logs[obj].eventType
    };

    result.push(newLog);
  }
  const notifsArr = result.map((elm) => {
    return <Notification data={elm} />;
  });
  return notifsArr;
};
