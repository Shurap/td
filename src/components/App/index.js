import React from 'react';
import Router from '../Router';
import Header from '../Header';
import styles from './indexApp.module.css';
import InfoWindow from '../InfoWindow';

const App = () => (
    <div className={styles.app}>
      <Header/>
      <InfoWindow/>
      <Router/>
    </div>
);

export default App;