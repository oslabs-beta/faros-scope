import React from 'react';
import ThemeContainer from './reusable/ThemedContainer';
import '../css/Home.scss';
import Graph from './reusable/Graph';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
const Home = () => {
  return (
    <ThemeContainer>
      <Graph />
    </ThemeContainer>
  );
};

export default Home;
