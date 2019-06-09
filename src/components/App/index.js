import React from 'react';
import Router from '../Router';
import Header from '../Header';
import styles from './indexApp.module.css';
import InfoWindow from '../InfoWindow';

const App = () => (
    <div className={styles.app}>
      <Header/>
      <InfoWindow/>
      {/* <h1>Application under construction</h1>
      <h3>...but general function is working</h3> */}
      <Router/>
    </div>
);

export default App;