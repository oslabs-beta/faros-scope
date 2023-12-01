import { ThemedContainer } from '../Themed/Container/index';
import '../../css/Home.scss';
import { Graph } from '../Graph/index';

/**
 * The home page of the application, which contains the graph, main component of the app, landing page.
 */
export const Home = () => {
  return (
    <ThemedContainer>
      <Graph />
    </ThemedContainer>
  );
};
