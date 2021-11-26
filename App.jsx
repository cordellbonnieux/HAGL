import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import Menu from './Menu';

const siteName = 'Have A Good Laugh';
const data = {
  "menu": ["Tickets","Info","Contact"],
}

const App = (data) => (
  <div className="App">
    <h1>{siteName}</h1>
    <Menu />
  </div>
);

export default hot(module)(App);
