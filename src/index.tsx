import * as React from 'react';
import * as ReactDOM from 'react-dom';

import 'modern-normalize';

import * as serviceWorker from './utils/serviceWorker';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
