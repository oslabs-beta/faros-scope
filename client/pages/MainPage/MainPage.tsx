import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../../components/NavBar/index';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import { ChakraProvider } from '@chakra-ui/react';
import DropPositions from '../../components/reusable/reactdnd/DropPositions';
import { GridProvider } from '../../context';
import {
  useGetClusterInfoQuery,
  useGetClusterMetricsMapQuery,
} from '../../services/api';
import { useSocket } from '../../services/bobbySocketService';
import { NotificationDisplay } from '../../components';

export const MainPage = () => {
  useSocket('http://104.154.129.231:8000/');

  // ^ see if this works w/o variable declarations
  useGetClusterInfoQuery(undefined, { pollingInterval: 25000 });
  useGetClusterMetricsMapQuery(undefined, { pollingInterval: 5000 });

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
      <GridProvider>
        <NotificationDisplay />
        <DndContext
          onDragEnd={handleDragEnd}
          collisionDetection={closestCenter}
        >
          <DragOverlay>
            <NavBar orientation={orientation} />
          </DragOverlay>
          <DropPositions parent={parent} />
        </DndContext>
        <ChakraProvider>
          <Outlet />
        </ChakraProvider>
      </GridProvider>
    </div>
  );
};
