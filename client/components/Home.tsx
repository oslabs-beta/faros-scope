import React from 'react';
import ThemedContainer from './reusable/ThemedContainer';
import '../css/home.scss';
import Graph from './reusable/Graph';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
const Home = () => {
  return (
    <ThemedContainer>
      <Graph />
    </ThemedContainer>
  );
};

export default Home;
