import { useState, useEffect } from "react";
import io from "socket.io-client";
import { useDispatch } from 'react-redux'
import { addClusterEvent } from "./metricsSlice";
import store from './store'
// Custom Hook for Socket.IO
export const useSocket = (url) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to Socket.IO server
        const newSocket = io(url);

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
            store.dispatch(addClusterEvent(data))
        })
        
        newSocket.on('podModified', (data) => {
            data.eventType = 'Pod Modified';
          console.log('Pod Modified: ', data)
        })
        
        newSocket.on('podDeleted', (data) => {
            data.eventType = 'Pod Deleted';
          console.log('Pod Deleted: ', data)
        })

        return () => newSocket.close();
        
    }, [url]);

    return socket;
};