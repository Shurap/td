import React from 'react';
import Router from '../Router';
import Header from '../Header';
import Footer from '../Footer';
import styles from './indexApp.module.css';
import InfoWindow from '../InfoWindow';

const App = () => (
  <div className={styles.app}>
    <Header />
    <InfoWindow />
    <Router />
    <Footer />
  </div>
);

export default App;