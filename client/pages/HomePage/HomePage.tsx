import { Graph, ThemeContainer } from '../../components';
import './Home.scss';
import { NotificationDisplay } from '../../components';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
export const HomePage = () => {
  return (
    <ThemeContainer>
      <NotificationDisplay />
      <Graph />
    </ThemeContainer>
  );
};
