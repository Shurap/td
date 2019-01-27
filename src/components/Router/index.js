import React from 'react';
import {Route} from 'react-router-dom';
import SignUpPage from '../SignUpPage';
import SignInPage from '../SignInPage';

const Router = () => (
  <main>
    <div>
      <Route exact path='/' component={SignInPage}/>
      <Route path='/signup' component={SignUpPage}/>
      <Route path='/signin' component={SignInPage}/>
    </div>
  </main>
);


export default Router;