import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DndContext } from '@dnd-kit/core';
import DropPositions from './components/reusable/reactdnd/DropPositions';
import NavBar from './components/NavBar';

// This is the main component that is rendered by the client.
const Main = () => {
  // Outlet is a special component that is used to render nested routes, default is the index route, which is the home page.
  const [parent, setParent] = useState(null);
  function handleDragEnd({ over }: any) {
    console.log(over);
    setParent(over ? over.id : null);
  }
  return (
    <div className="Main">
      <DndContext onDragEnd={handleDragEnd}>
        {!parent && <NavBar />}
        <DropPositions parent={parent} />
      </DndContext>
      <Outlet />
    </div>
  );
};

export default Main;
