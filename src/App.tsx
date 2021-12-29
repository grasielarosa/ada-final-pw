import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Login, SignUp, Welcome } from './pages';


const App = () => {
  return (
    <Router>


      <Switch>
        {/* Admin Routes */}

        {/* Private Routes */}

        {/* Public Routes */}
        <Route path='/login' component={Login} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/' component={Welcome} />



      </Switch>
    </Router>
  )
}



export default App;
