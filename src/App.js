import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Header from './common/header';

const App = () => (
  <Provider store={store}>
    <div>
      <Header />
      <div style={{ height: 500 }} />
    </div>
  </Provider>
);

export default App;
