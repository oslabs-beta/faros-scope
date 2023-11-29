import React from 'react';
import Droppable from './Droppable';
import '../../../css/Reactdnd.scss';
import DraggableNavbar from './DraggableNavbar';

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
        outlineClass="outlineTop"
      >
        <div id="topNavPosition">
          {parent === 'topNavPosition' && (
            <DraggableNavbar orientation="horizontal" />
          )}
        </div>
      </Droppable>
      <Droppable
        id="leftNavPosition"
        orientation="vertical"
        classOverride="styleLeft"
        outlineClass="outlineLeft"
      >
        <div id="leftNavPosition">
          {parent === 'leftNavPosition' && (
            <DraggableNavbar orientation="vertical" />
          )}
        </div>
      </Droppable>
      <Droppable
        id="bottomNavPosition"
        classOverride="styleBottom"
        orientation="horizontal"
        outlineClass="outlineBottom"
      >
        <div id="bottomNavPosition">
          {parent === 'bottomNavPosition' && (
            <DraggableNavbar orientation="horizontal" />
          )}
        </div>
      </Droppable>
      <Droppable
        id="rightNavPosition"
        classOverride="styleRight"
        orientation="vertical"
        outlineClass="outlineRight"
      >
        <div id="rightNavPosition">
          {parent === 'rightNavPosition' && (
            <DraggableNavbar orientation="vertical" />
          )}
        </div>
      </Droppable>
    </div>
  );
};

export default DropPositions;
