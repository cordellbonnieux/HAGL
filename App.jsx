import { hot } from 'react-hot-loader';
import React from 'react';
import './fonts/glashou.ttf';
import './App.css';
import Menu from './Menu';
import Info from './Info';
import Tickets from './Tickets';
import Right from './Right';
import LineUp from './LineUp';

function App() {
  return (
    <div id="container">
      <Menu />
      <Content />
      <Footer />
    </div>
  );
}

function Content() {
  return (
    <div id="content">
      <div id="content_left">
        <div className="content_left_inner">
          <Tickets />
          <LineUp />
          <Info />
        </div>
      </div>
      <div id="content_right">
        <Right />
      </div>
    </div>
  );
}
/*
function Bottom() {
  return (
    <div id="bottom">
      <div className="bottom_img" />
    </div>
  );
}
*/
function Footer() {
  return (
    <div id="footer">
      <div id="footer_inner">
        <p id="footer_cred">
          All Photos by
        </p>
        <a href="https://misviephoto.myportfolio.com/work" target="_blank" className="footer_link" rel="noreferrer">Misvie Photography</a>
      </div>
    </div>
  );
}

export default hot(module)(App);
