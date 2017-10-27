import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/app.jsx';
import registerServiceWorker from './registerServiceWorker';

Enzyme.configure({ adapter: new Adapter() });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
