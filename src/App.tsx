import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/GlobalStyles.css';

import {
  Admin,
  Detail,
  Home,
  Login,
  Movies,
  PageNotFound,
  Series,
  SignUp,
  Users,
  Welcome,
} from './pages';
import { AuthProvider } from './context/Auth';

const App: FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/users" component={Users} />
          <Route path="/home" component={Home} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/detail/:id" component={Detail} />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
          <Route exact path="/" component={Welcome} />
          <Route path="/*" component={PageNotFound} />
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;
