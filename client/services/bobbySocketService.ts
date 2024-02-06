import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import { addClusterEvent } from '../store/slice';
import { store } from '../store';

// Custom Hook for Socket.IO
export const useSocket = (url: string): Socket | null => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    // Connect to Socket.IO server
    const newSocket: Socket = io(url);
    setSocket(newSocket);

    newSocket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });

    newSocket.on('disconnect', () => {
      console.log('Disconnected from Socket.IO server');
    });

    newSocket.on('podAdded', (data) => {
      console.log('added POD');

      data.eventType = 'Pod Added';
      store.dispatch(addClusterEvent(data));
    });

    newSocket.on('podModified', (data) => {
      data.eventType = 'Pod Modified';
      store.dispatch(addClusterEvent(data));
    });

    newSocket.on('podDeleted', (data) => {
      data.eventType = 'Pod Deleted';
      store.dispatch(addClusterEvent(data));
    });

    return () => {
      newSocket.disconnect();
    };
  }, [url]);

  return socket;
};
