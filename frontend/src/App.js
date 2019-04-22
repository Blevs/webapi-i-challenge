import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Route } from 'react-router-dom';
import Home from './views/Home';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route path="/edit/:id" component={Edit} />
    </div>
  );
}

export default App;
