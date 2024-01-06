import { useState, createContext } from 'react';

interface GridContextProps {
  scrollToSignificantChild: () => void;
  setMostSignificantChild: (child: HTMLElement | null) => void;
  setGridScrollable: (scrollable: boolean) => void;
  scrollable: boolean;
}
export const GridContext = createContext({} as GridContextProps);

export const GridProvider = ({ children }: { children: React.ReactNode }) => {
  const [significantChild, setSignificantChild] =
    useState<HTMLElement | null>();
  const [scrollable, setScrollable] = useState(false);

  function setMostSignificantChild(child: HTMLElement | null) {
    setSignificantChild(child);
  }

  function scrollToSignificantChild() {
    if (!significantChild) return;
    significantChild?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  function setGridScrollable(scrollable: boolean) {
    setScrollable(scrollable);
  }

  return (
    <GridContext.Provider
      value={{
        scrollToSignificantChild,
        setMostSignificantChild,
        setGridScrollable,
        scrollable,
      }}
    >
      {children}
    </GridContext.Provider>
  );
};

