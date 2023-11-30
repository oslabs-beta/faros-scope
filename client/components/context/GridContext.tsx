import React, { useContext, useState } from 'react';

interface GridContextProps {
  updateGridScrollPosition: (x: number, y: number) => void;
  gridScrollPosition: { x: number; y: number };
}
const GridContext = React.createContext({} as GridContextProps);

const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [gridScrollPosition, setGridScrollPosition] = useState({ x: 0, y: 0 });

  function updateGridScrollPosition(x: number, y: number): void {
    setGridScrollPosition((prev) => ({ x: prev.x + x, y: prev.y + y }));
  }

  return (
    <GridContext.Provider
      value={{
        updateGridScrollPosition,
        gridScrollPosition,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

export default GridProvider;
export const useGrid = () => useContext(GridContext);
