import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DndContext, closestCenter } from '@dnd-kit/core';
import DropPositions from './components/reusable/reactdnd/DropPositions';

// This is the main component that is rendered by the client.
const Main = () => {
  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  const [parent, setParent] = useState('topNavPosition');
  function handleDragEnd({ over }: any) {
    console.log(over);
    setParent(over ? over.id : parent);
  }
  return (
    <div className="Main">
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCenter}>
        <DropPositions parent={parent} />
      </DndContext>
      <Outlet />
    </div>
  );
};

export default Main;
