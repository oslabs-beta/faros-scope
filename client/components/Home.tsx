import React, { useEffect } from 'react';
import ThemedContainer from './reusable/ThemedContainer';
import '../css/home.scss';
import Graph from './reusable/Graph';

const Home = () => {
  return (
    <ThemedContainer>
      <Graph />
    </ThemedContainer>
  );
};

export default Home;
