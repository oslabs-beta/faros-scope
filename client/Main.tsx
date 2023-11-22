import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DndContext, closestCenter, DragOverlay } from '@dnd-kit/core';
import DropPositions from './components/reusable/reactdnd/DropPositions';
import NavBar from './components/NavBar';

// This is the main component that is rendered by the client.
const Main = () => {
  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  const [parent, setParent] = useState('topNavPosition');
  const [orientation, setOrientation] = useState('horizontal');
  function handleDragEnd({ over, active }: any) {
    console.log('The droppable element ', over);
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
    console.log('The draggable element ', active)
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
