import { useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { addClusterEventWithCustomId } from "./metricsSlice";
import store from './store';

// Custom Hook for Socket.IO
export const useSocket = (url: string): Socket | null  => {
    const [socket, setSocket] = useState< Socket | null >(null);

    useEffect(() => {
        // Connect to Socket.IO server
        const newSocket: Socket  = io(url);

        setSocket(newSocket);

        newSocket.on("connect", () => {
            console.log("Connected to Socket.IO server");
        });

        newSocket.on("disconnect", () => {
            console.log("Disconnected from Socket.IO server");
        });

        newSocket.on('podAdded', (data) => {
            console.log('Pod Added: ', data)
            data.eventType = 'Pod Added';
            store.dispatch(addClusterEventWithCustomId(data,'PodAdded'))
        })
        
        newSocket.on('podModified', (data) => {
            data.eventType = 'Pod Modified';
            console.log('Pod Modified: ', data)
            store.dispatch(addClusterEventWithCustomId(data,'PodModified'))
        })
        
        newSocket.on('podDeleted', (data) => {
            data.eventType = 'Pod Deleted';
            console.log('Pod Deleted: ', data)
            store.dispatch(addClusterEventWithCustomId(data,'PodDeleted'))
        })

        return () =>{ newSocket.disconnect();}
        
    }, [url]);

    return socket;
};