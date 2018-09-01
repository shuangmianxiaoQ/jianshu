import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style';
import './statics/iconfont/iconfont';
import './statics/iconfont/style';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
