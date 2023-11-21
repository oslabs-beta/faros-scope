import React, { useState } from 'react';
import Droppable from './Droppable';
import NavBar from '../../NavBar';
import '../../../css/Reactdnd.scss';

interface DropPositionsProps {
  parent: string | null;
}

const DropPositions = ({ parent }: DropPositionsProps) => {
  const styleTop = {
    height: '50px',
    width: '100%',
    top: '2%',
  };

  const styleLeft = {
    height: '100%',
    width: '50px',
    top: '0%',
    bottom: '0%',
    left: '0%',
  };

  const styleBottom = {
    height: '50px',
    width: '50%',
    bottom: '0%',
    right: '0%',
    left: '0%',
  };

  const styleRight = {
    height: '50%',
    width: '50px',
    top: '50%',
    bottom: '0%',
    right: '0%',
  };
  return (
    <div className="navPositions">
      <Droppable id="topNavPosition" styleOverride={styleTop}>
        <div id="topNavPosition">
          {parent === 'topNavPosition' && <NavBar />}
        </div>
      </Droppable>
      <Droppable id="leftNavPosition" styleOverride={styleLeft}>
        <div id="leftNavPosition">
          {parent === 'leftNavPosition' && <NavBar />}
        </div>
      </Droppable>
      <Droppable id="bottomNavPosition" styleOverride={styleBottom}>
        <div id="bottomNavPosition">
          {parent === 'bottomNavPosition' && <NavBar />}
        </div>
      </Droppable>
      <Droppable id="rightNavPosition" styleOverride={styleRight}>
        <div id="rightNavPosition">
          {parent === 'rightNavPosition' && <NavBar />}
        </div>
      </Droppable>
    </div>
  );
};

export default DropPositions;
