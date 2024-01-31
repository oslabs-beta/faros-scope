import { Graph, ThemeContainer } from '../../components';
import { NotificationDisplay } from '../../components';
import './Home.scss';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
export const HomePage = () => {
  return (
    <ThemeContainer style={{display: 'flex'}}>
      <NotificationDisplay />
      <Graph />
    </ThemeContainer>
  );
};
