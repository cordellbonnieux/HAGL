import { hot } from 'react-hot-loader';
import React from 'react';
import './fonts/glashou.ttf';
import './App.css';
import Menu from './Menu';
import Header from './Header';
import Info from './Info';

function App() {
  return (
    <div id="container">
      <Header />
      <Content />
      <Bottom />
      <Footer />
    </div>
  );
}
/*
function menuBtn() {
  let menuOpen = false;
  document.getElementById('menuBtn').addEventListener('click', () => {
    if (menuOpen) {
      menuOpen = false;
      document.getElementById('menu_inner').style('display:block;');
    } else {
      menuOpen = true;
      document.getElementById('menu_inner').style('display:none;');
    }
  });
}

function menuButtons() {
  menuBtn();
}
*/
function Content() {
  return (
    <div id="content">
      <div id="content_left">
        <div className="content_left_inner">
          <Info />
        </div>
      </div>
      <div id="content_right">
        <div className="content_right_inner">
          <div className="content_left_img content_left_img_1" />
          <div className="content_left_img content_left_img_2" />
          <div className="content_left_img content_left_img_3" />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div id="bottom">
      <div className="bottom_img" />
    </div>
  );
}

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
