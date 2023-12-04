import { useState, useEffect } from "react";
import io from "socket.io-client";

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
        })
        
        newSocket.on('podModified', (data) => {
          console.log('Pod Modified: ', data)
        })
        
        newSocket.on('podDeleted', (data) => {
          console.log('Pod Deleted: ', data)
        })

        return () => newSocket.close();
    }, [url]);

    return socket;
};