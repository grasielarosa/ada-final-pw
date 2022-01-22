import React, { FC, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GlobalStyles.css';

import {
  Admin,
  Detail,
  Home,
  Login,
  Movies,
  Series,
  SignUp,
  Users,
  Welcome,
} from './pages';
import { AuthContext, AuthProvider } from './context/Auth';

const App: FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        <Switch>
          {currentUser?.role === 'admin' && (
            <Route path="/admin" component={Admin} />
          )}
          {currentUser?.role === 'admin' && (
            <Route path="/users" component={Users} />
          )}
          <Route path="/home" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/detail" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route path="/" component={Welcome} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
