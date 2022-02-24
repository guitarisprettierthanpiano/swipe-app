import React from 'react'
import Overlay from './Overlay'

const App = React.lazy(() =>import('./app'))

const ROUTER = () => {
  return (
    <>
    <Overlay /> 
     
    <React.Suspense fallback={<p className='loading'>Loading page...</p>}>
        <App />
    </React.Suspense>
    </>
  )
}

export default ROUTER