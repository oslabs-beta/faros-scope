import {
  AppContent,
  AppSidebar,
  AppFooter,
  AppHeader,
} from '../components/index';

// ! TEMPORARY IMPORT
import {
    useGetClusterInfoQuery,
} from '../services/api';

const DefaultLayout = () => {
 // ! TEMPORARY
    useGetClusterInfoQuery(undefined, { pollingInterval: 25000 });

  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
