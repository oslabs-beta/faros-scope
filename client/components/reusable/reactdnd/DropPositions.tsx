import React, { useState } from 'react';
import Droppable from './Droppable';
import NavBar from '../../NavBar';
import '../../../css/Reactdnd.scss';

interface DropPositionsProps {
  parent: string | null;
}

const DropPositions = ({ parent }: DropPositionsProps) => {
  const styleTop = {
    position: 'absolute',
    top: '2%',
    transform: 'translate(50%, 0)',
    width: '50%',
    height: '50px',
    backgroundColor: 'red',
  };
  const styleLeft = {
    position: 'absolute',
    height: '100%',
    width: '50px',
    top: '0',
    bottom: '0',
    left: '0',
    transform: 'translate(0, -50%)',
    backgroundColor: 'red',
  };
  const styleBottom = {
    position: 'absolute',
    bottom: '0',
    left: '50%',
    transform: 'translate(-50%, 0)',
    backgroundColor: 'red',
  };
  const styleRight = {
    position: 'absolute',
    top: '50%',
    right: '0',
    transform: 'translate(0, -50%)',
    backgroundColor: 'red',
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
