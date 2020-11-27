import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './pages/homepage/homepage';


const HatsPage = () => {
  return (
    <div>
      <h1>hats page</h1>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={HatsPage}  />
      </Switch>
    </div>
  );
};

export default App;