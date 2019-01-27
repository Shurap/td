import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App';
import Firebase, {FirebaseContext} from './components/Firebase'

ReactDOM.render(
  (
    <FirebaseContext.Provider value={new Firebase()}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </FirebaseContext.Provider>
  ), document.getElementById('root'));

