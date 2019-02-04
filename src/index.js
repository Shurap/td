import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
  (
    <Provider store={store}>
      <FirebaseContext.Provider value={new Firebase()}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </FirebaseContext.Provider>
    </Provider>
  ), document.getElementById('root'));

