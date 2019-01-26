import React from 'react';
import {Route} from 'react-router-dom';
import SignUpPage from '../SignUpPage';
import SignIn from '../SignIn';

const Router = () => (
  <main>
    <div>
      <Route path='/signup' component={SignUpPage}/>
      <Route path='/signin' component={SignIn}/>
    </div>
  </main>
);


export default Router;