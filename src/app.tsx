import React from 'react';

import RecentSearches from './components/recentSearches';
const LandingPage = React.lazy(() => import('./components/landingPage'));
import LoadingOverlay from './components/loadingOverlay';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      {/* <RecentSearches counterPassed={counter} /> */}
      <LoadingOverlay />

      <React.Suspense fallback={<p className="loading">Loading page...</p>}>
        <LandingPage />
      </React.Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
