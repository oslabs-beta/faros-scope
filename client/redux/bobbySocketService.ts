import { useState, useEffect } from "react";
import{ io, Socket} from "socket.io-client";
import { addClusterEvent } from "./metricsSlice";
import store from './store'

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
            store.dispatch(addClusterEvent(data))
        })
        
        newSocket.on('podModified', (data) => {
            console.log('Pod Modified: ', data)
            store.dispatch(addClusterEvent(data))
        })
        
        newSocket.on('podDeleted', (data) => {
            console.log('Pod Deleted: ', data)
            store.dispatch(addClusterEvent(data))
        })

        // return () =>{ newSocket.close(); }

        return () =>{ newSocket.disconnect();}
        
    }, [url]);

    return socket;
};