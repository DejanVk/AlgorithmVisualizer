import React from 'react';
import './App.css';

import Header from '../common/header/Header';
import Home from '../home/Home';
import Algorithm from '../algorithm/Algorithm';

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main">
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path='/algorithm/:id' component={Algorithm}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
