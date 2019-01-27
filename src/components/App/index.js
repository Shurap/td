import React from 'react';
import Router from '../Router';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';
import Header from '../Header';

const App = () => (
    <div>
      <Header/>
      <h1>Application</h1>
      <Router/>
    </div>
);

export default App;