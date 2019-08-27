import React from 'react';
import {Route} from 'react-router-dom';
import SignUpPage from '../SignUpPage';
import SignInPage from '../SignInPage';
import SignOutPage from '../SignOutPage';
import HomePage from '../HomePage';
import styles from './indexRouter.module.css';

const Router = () => (
  <main className={styles.router}>
    {/* <div> */}
      <Route exact path='/' component={SignInPage}/>
      <Route path='/signup' component={SignUpPage}/>
      <Route path='/signin' component={SignInPage}/>
      <Route path='/signout' component={SignOutPage}/>
      <Route path='/home' component={HomePage}/>
    {/* </div> */}
  </main>
);


export default Router;