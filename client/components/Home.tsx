import React, { useEffect } from 'react';
import '../css/home.scss';
import { useTheme } from '../Theme';

const Home = () => {
  const { theme } = useTheme();

  return (
    <div className={`outerContainer ${theme}`}>
      <div className={`innerContainer ${theme}`}>
        <div className={`outerView${theme}`}>
          <h1>Nodes View</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
