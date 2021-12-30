import React from 'react';
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

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={Admin} />
        <Route path="/detail" component={Detail} />
        <Route path="/home" component={Home} />
        <Route path="/movies" component={Movies} />
        <Route path="/series" component={Series} />
        <Route path="/users" component={Users} />
        <Route path="/login" component={Login} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/" component={Welcome} />
      </Switch>
    </Router>
  );
};

export default App;
