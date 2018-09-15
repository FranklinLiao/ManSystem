import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import MRoute from './routes/route';
import './index.css';

ReactDOM.render(<MRoute />, document.getElementById('root'));
registerServiceWorker();
