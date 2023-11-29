import React, { useContext, useState } from 'react';

interface GridContextProps {
  updateGridScrollPosition: (x: number, y: number) => void;
  gridScrollPosition: { x: number; y: number };
  initializeGridScrollPosition: (x: number, y: number) => void;
}
const GridContext = React.createContext({} as GridContextProps);

const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [gridScrollPosition, setGridScrollPosition] = useState({ x: 0, y: 0 });

  function initializeGridScrollPosition(x: number, y: number): void {
    setGridScrollPosition({ x, y });
  }

  function updateGridScrollPosition(x: number, y: number): void {
    setGridScrollPosition((prev) => ({ x: prev.x + x, y: prev.y + y }));
  }

  return (
    <GridContext.Provider
      value={{
        updateGridScrollPosition,
        gridScrollPosition,
        initializeGridScrollPosition,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export default GridProvider;
export const useGrid = () => useContext(GridContext);
