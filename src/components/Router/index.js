import React from 'react';
import {Route} from 'react-router-dom';
import SignUp from '../SignUp';
import SignIn from '../SignIn';

const Router = () => (
  <main>
    <div>
      <Route path='/signup' component={SignUp}/>
      <Route path='/signin' component={SignIn}/>
    </div>
  </main>
);


export default Router;