import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Home from './pages/home';
import Login from './pages/login';
import Detail from './pages/detail/loadable';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/detail/:id" component={Detail} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
