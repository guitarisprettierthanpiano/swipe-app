import React from 'react';

const LandingPage = React.lazy(() => import('./components/landingPage'));
import LoadingOverlay from './components/loadingOverlay';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <>
      <LoadingOverlay />

      <React.Suspense fallback={<p className="loading">Loading page...</p>}>
        <LandingPage />
      </React.Suspense>
      <ToastContainer />
    </>
  );
};

export default App;
