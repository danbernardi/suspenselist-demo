import React, {  useState, Suspense, lazy } from 'react';
// import LazyComponent from '../../components/LazyComponent';
const LazyComponent = lazy(() => import('../../components/LazyComponent'));

const Routes = () => {
  const [showSuspended, setShowSuspended] = useState(false);

  return ( 
    <div>
      <h1>Home</h1>
      <button type="button" onClick={ () => setShowSuspended(!showSuspended) }>Toggle Lazy Component</button>

      { showSuspended && (
        <Suspense fallback={ <div>Loading...</div> }>
          <LazyComponent />
        </Suspense>
      ) }

      {/* { showSuspended && (
        <LazyComponent />
      ) } */}
    </div>
  )
}

export default Routes;
