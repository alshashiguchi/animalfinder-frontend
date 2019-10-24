import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import ErrorBoundary from '../components/ErrorBoundary';
import Layout from '../components/Layout/MainLayout';

const Home = React.lazy(() => import('../features/Home'));
const Visualizar = React.lazy(() => import('../features/Animal/'));
const Login = React.lazy(() => import('../features/Login'));

const LayoutRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    render={props => (      
      <Layout>                
        <Component {...props} />
      </Layout>
    )}
  />
);

export const Routes = () => {

  return (
    <ErrorBoundary>
      <Suspense fallback={<div />}>
        <Switch>
          <LayoutRoute exact path="/" layout={Layout} component={Home} />
          <LayoutRoute path="/visualizar/:id" layout={Layout} component={Visualizar} />
          <LayoutRoute path="/login" layout={Layout} component={Login} />
        </Switch>
      </Suspense>
    </ErrorBoundary>
  );
};

export default Routes;
