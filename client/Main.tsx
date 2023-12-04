import { useState,useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import DropPositions from './components/reusable/reactdnd/DropPositions';
import { NavBar } from './components/NavBar/index';

import { useGetClusterInfoQuery, useGetClusterMetricsMapQuery } from './redux/metricsApi';
import {initializeSocket} from './redux/socketService';
import {useSocket} from './redux/bobbySocketService'
import io from "socket.io-client";

    // ^ initialize socket connection
// initializeSocket();
// This is the main component that is rendered by the client.
const Main = () => {

  // const [webSocket, setSocket] = useState(null);
  // useEffect(() => {
  //   // Connect to Socket.IO server
  //   const newSocket = io("http://104.154.129.231:8000/");

  //   setSocket(newSocket);

  //   newSocket.on("connect", () => {
  //     console.log("Connected to Socket.IO server");
  //   });

  //   newSocket.on("disconnect", () => {
  //     console.log("Disconnected from Socket.IO server");
  //   });

  //   newSocket.on("podAdded", (data) => {
  //     console.log("New Pod Added:", data);
  //   });
  //   newSocket.on("error", (error) => {
  //     console.error("Socket.IO Error: ", error);
  //   });

  //   return () => newSocket.close();
  // }, []);
    useSocket('http://104.154.129.231:8000/')

    // ^ Begin polling for cluster info and metrics 
    const { data: ClusterInfo } = useGetClusterInfoQuery(undefined, {pollingInterval: 25000});
    const {data: MetricsMap} = useGetClusterMetricsMapQuery(undefined, { pollingInterval: 5000}); 

  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  const [parent, setParent] = useState(getStoredPosition());
  const [orientation, setOrientation] = useState(inferOrientation(parent));

  function inferOrientation(parent: string) {
    switch (parent) {
      case 'topNavPosition':
        return 'horizontal';
      case 'leftNavPosition':
        return 'vertical';
      case 'bottomNavPosition':
        return 'horizontal';
      case 'rightNavPosition':
        return 'vertical';
      default:
        return 'horizontal';
    }
  }

  function setStoredPosition(orientation: string) {
    localStorage.setItem('orientation', orientation);
  }

  function getStoredPosition() {
    const orientation = localStorage.getItem('orientation');
    if (orientation === null || !orientation.length) {
      setStoredPosition('topNavPosition');
    }
    return orientation || 'topNavPosition';
  }

  function handleDragEnd({ over }: any) {
    switch (over?.id) {
      case 'topNavPosition':
        setOrientation('horizontal');
        break;
      case 'leftNavPosition':
        setOrientation('vertical');
        break;
      case 'bottomNavPosition':
        setOrientation('horizontal');
        break;
      case 'rightNavPosition':
        setOrientation('vertical');
        break;
      default:
        break;
    }
    setParent(over ? over.id : parent);
    setStoredPosition(over ? over.id : parent);
  }

  return (
    <div className="Main">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <DragOverlay>
          <NavBar orientation={orientation} />
        </DragOverlay>
        <DropPositions parent={parent} />
      </DndContext>
      <Outlet />
    </div>
  );
};

export default Main;
