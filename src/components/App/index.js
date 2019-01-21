import React from 'react';
import Router from '../Router';
import Exercises from '../Exercises';
import TrainingList from '../TrainingList';
import Header from '../Header';

const App = () => (
    <div>
      <Header/>
      <h1>App</h1>
      <Router/>

      <Exercises/>
      <TrainingList/>
    </div>
);

export default App;