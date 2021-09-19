import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
import SignUp from './User/SignUp';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <HomePage />
        </Route>
        <Route path='/auth'>
          <AuthPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
