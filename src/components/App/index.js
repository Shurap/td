import React from 'react';
import Router from '../Router';
import Header from '../Header';
import styles from './indexApp.module.css';

const App = () => (
    <div className={styles.app}>
      <Header/>
      {/* <h1>Application under construction</h1>
      <h3>...but general function is working</h3> */}
      <Router/>
    </div>
);

export default App;