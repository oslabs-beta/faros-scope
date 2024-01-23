import { Notification } from '../../components';

interface Props {
  logs: object;
}

/**
 * Converts the clusterEvent object in redux in notification JSX elements
 * @param logs
 * @returns A list of JSX elements
 *
 */

export const formatNotifications = (logs): Props => {
  const result: [] = [];

  for (const obj in logs) {
    const newLog = {};
    newLog.name = logs[obj].metadata.name;
    newLog.logText = logs[obj].eventType;
    result.push(newLog);
  }
  const notifsArr = result.map((elm) => {
    return <Notification data={elm} />;
  });
  return notifsArr;
};
