import { hot } from 'react-hot-loader';
import React from 'react';
import './fonts/glashou.ttf';
import './App.css';
import Menu from './Menu';
import Header from './Header';

function App() {
  let content = <Content />;
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

function Content() {
  return (
    <div id="content">
      <div id="content_left">
        <div className="content_left_inner">
          <h1>Hello there world</h1>
          <p>ipsum lorem lorem ipsum</p>
        </div>
      </div>
      <div id="content_right">
        <div className="content_right_inner">
          <div className="content_left_img"></div>
          <div className="content_left_img"></div>
          <div className="content_left_img"></div>
        </div>
      </div>
    </div>
  );
}

/*
Content.propTypes = {
  one: React.propTypes.String.isRequired,
  two: React.propTypes.String.isRequired,
};
*/
// Since one and two are REQUIRED
// there is no need to have a default value
/*
Content.defaultProps = {
  one: 'one',
  two: 'two',
};
*/

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
        <a href="localhost:5000" className="footer_link">footer link</a>
      </div>
    </div>
  );
}

export default hot(module)(App);
