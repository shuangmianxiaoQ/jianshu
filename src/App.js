import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/detail" component={Detail} />
        </div>
      </Router>
    </div>
  </Provider>
);

export default App;
