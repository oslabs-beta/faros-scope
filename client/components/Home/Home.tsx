import React from 'react';
import { ThemeContainer } from '../index';
import '../../css/Home.scss';
import { Graph } from '../index';

import styles from './Home.module.css';
import classNames from 'classNames';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
export const Home = () => {
  return (
    <ThemeContainer>
      <Graph />
    </ThemeContainer>
  );
};
