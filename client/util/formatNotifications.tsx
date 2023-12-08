import Notification from "../components/NotifDisplay/Notification"

/**
 * Converts the clusterEvent object in redux in notification JSX elements
 * @param logs
 * @returns A list of JSX elements
 * 
 */

const formatNotifications = (logs: object) => {
    const result :[] = [];
    console.log('Current Logs ----->', logs)

    for(const obj in logs){
        const newLog = {};
        newLog.name = logs[obj].metadata.name;
        newLog.logText = logs[obj].eventType;
        result.push(newLog);
    }
    console.log('preNotfi --->', result)
    const notifsArr = result.map((elm)=> {
        return (
            <Notification
            data = {elm}
            />
        )
    })
    return notifsArr;

}

export default formatNotifications