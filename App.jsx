import { hot } from 'react-hot-loader';
import React from 'react';
import './fonts/glashou.ttf';
import './App.css';
import Menu from './Menu';
import Header from './Header';

function App() {
  let info = <Content page={infoPage}/>;
  return (
    <div id="container">
      <Header />
      <Menu />
      {content}
      <Bottom />
      <Footer />
    </div>
  );
}

function Content(props) {
  return (
    <div id="content">
      <div id="content_left">
        <div className="content_left_inner">
          {page}
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
function infoPage() {
  return (
    <div id="info">
      <div id="info_inner">
        <div id="info_inner_what">
          <h2>What is Have A Good Laugh?</h2>
          <p>
            Have A Good Laugh is a punk festival in Vancouver, BC, Canada. 
            Hosted over various venues, featuring punk (and related genres) 
            bands from around the world for 3 days every June, since 2016.
          </p>
          <h3>Flyers/line-ups from previous years:</h3>
          <p>All flyer art (except 2016) by &nbsp; 
          <a href="https://www.instagram.com/rev.battfink/" target="_blank" className="art_cred" rel="noreferrer">@rev.battfink</a>
          </p>
          <img src="./images/flyers/hagl1.jpg" alt="Have A Good Laugh 2016"/>
        </div>
        <div id="info_inner_can">
          <h2>Can my band play Have A Good Laugh?</h2>
          <p>
            Planning for Have A Good Laugh usually starts in August the year prior, and the bill is usually filled by October or November.
            If you are interested in playing we encourage you to send us your music during this period.
          </p>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div id="bottom">
      <div className="bottom_img"></div>
    </div>
  );
}

function Footer() {
  return (
    <div id="footer">
      <div id="footer_inner">
        <p id="footer_cred">
          All Photos by &nbsp; 
          <a href="https://misviephoto.myportfolio.com/work" target="_blank" className="footer_link" rel="noreferrer">Misvie Photography</a>
        </p>
      </div>
    </div>
  );
}

export default hot(module)(App);
