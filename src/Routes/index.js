import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = lazy(() => import('./Home'));
const Heavy = lazy(() => import('./Heavy'));
const Request = lazy(() => import('./Request'));
const SuspenseListDemo = lazy(() => import('./SuspenseListDemo'));

const Routes = () => {
    return ( 
    <Router>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/heavy">Heavy</Link>
        <Link to="/request">Request</Link>
        <Link to="/suspense-list">Suspense list</Link>
      </header>

      <Suspense fallback={<div>Page is Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/heavy" component={Heavy}/>
          <Route path="/request" component={Request}/>
          <Route path="/suspense-list" component={SuspenseListDemo}/>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Routes;
