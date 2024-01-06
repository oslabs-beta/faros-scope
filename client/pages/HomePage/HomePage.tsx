import { Graph, ThemeContainer } from '../../components';
import './Home.module.scss';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
export const HomePage = () => {
  return (
    <ThemeContainer>
      <Graph />
    </ThemeContainer>
  );
};
