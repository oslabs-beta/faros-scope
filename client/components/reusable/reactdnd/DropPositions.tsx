import React, { useState } from 'react';
import Droppable from './Droppable';
import NavBar from '../../NavBar';
import '../../../css/Reactdnd.scss';

interface DropPositionsProps {
  parent: string | null;
}

const DropPositions = ({ parent }: DropPositionsProps) => {
  return (
    <div className="navPositions">
      <Droppable
        id="topNavPosition"
        orientation="horizontal"
        classOverride="styleTop"
      >
        <div id="topNavPosition">
          {parent === 'topNavPosition' && <NavBar orientation="horizontal" />}
        </div>
      </Droppable>
      <Droppable
        id="leftNavPosition"
        orientation="vertical"
        classOverride="styleLeft"
      >
        <div id="leftNavPosition">
          {parent === 'leftNavPosition' && <NavBar orientation="vertical" />}
        </div>
      </Droppable>
      <Droppable
        id="bottomNavPosition"
        classOverride="styleBottom"
        orientation="horizontal"
      >
        <div id="bottomNavPosition">
          {parent === 'bottomNavPosition' && (
            <NavBar orientation="horizontal" />
          )}
        </div>
      </Droppable>
      <Droppable
        id="rightNavPosition"
        classOverride="styleRight"
        orientation="vertical"
      >
        <div id="rightNavPosition">
          {parent === 'rightNavPosition' && <NavBar orientation="vertical" />}
        </div>
      </Droppable>
    </div>
  );
};

export default DropPositions;
