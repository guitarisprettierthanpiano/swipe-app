import React from 'react'
import { ToastContainer } from 'react-toastify'

import Overlay from './Overlay'

import 'react-toastify/dist/ReactToastify.css'

const App = React.lazy(() =>import('./app'))

const ROUTER = () => {
  return (
    <>
    <Overlay /> 
     
    <React.Suspense fallback={<p className='loading'>Loading page...</p>}>
        <App />
    </React.Suspense>
    <ToastContainer />
    </>
  )
}

export default ROUTER