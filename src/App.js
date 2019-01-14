import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/detail" component={Detail} />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
