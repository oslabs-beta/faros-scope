// import { Notification } from '../../components';

// interface Props {
//     logs: {
//         [key: string]: { name:  string ,  logText: string }
//     }
// } 
// interface Notif {
//   name: string;
//   logText: string;
// }

// /**
//  * Converts the clusterEvent object in redux in notification JSX elements
//  * @param logs
//  * @returns A list of JSX elements
//  *
//  */

// export const formatNotifications = (logs: Props): JSX.Element[] => {
// const result: Notif[] = [];

// for (const obj in logs) {
//     const newLog: Notif = {
//         name: logs[obj].metadata.name,
//         logText: logs[obj].eventType,
//     };

//     result.push(newLog);
// }
// const notifsArr = result.map((elm) => {
//     return <Notification data={elm} />;
// });
//   return notifsArr;
// };
