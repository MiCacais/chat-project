import { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          {authCtx.isLoggedIn && <HomePage />}
          {!authCtx.isLoggedIn && <AuthPage />}
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
