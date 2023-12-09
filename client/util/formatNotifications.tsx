import { setTimeout } from "timers/promises";
import Notification from "../components/NotifDisplay/Notification"

/**
 * Converts the clusterEvent object in redux in notification JSX elements
 * @param logs
 * @returns A list of JSX elements
 * 
 */
interface Log {
    apiVersion: string;
    eventType: string;
    kind: string;
    metadata: { [key: string]: any };
    spec: { [key: string]: any };
    status: { [key: string]: any };
    [key: string]: any;   
}

interface NewLog {
    name: string;
    logText: string;
}


const formatNotifications = (log : Log) => {
    const result : NewLog[] = [];
    console.log('Current Logs ----->', log)

    for(const obj in log){
        const newLog : NewLog = {
        name : log[obj].metadata.name,
        logText : log[obj].eventType
        }
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
    // Timer Typescript issues
    // const timer = () => {
    //     const cb = (arr) => {
    //         arr.pop();
    //     }
    //     setTimeout(cb, 10000);
    // }
    // serious duct tape
    return notifsArr.reverse();

}

export default formatNotifications