import { hot } from 'react-hot-loader';
import React from 'react';
import './fonts/glashou.ttf';
import './App.css';
import Menu from './Menu';
import Header from './Header';

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Content />
      <Footer />
      <Background />
    </div>
  );
}

function Content() {
  return (
    <div>
      <h2>content title</h2>
      <p>lorem ipsum here</p>
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

function Footer() {
  return (
    <div id="footer">
      <div id="footer_inner">
        <a href="localhost:5000" className="footer_link">footer link</a>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div id="background">
      <div>background div</div>
    </div>
  );
}

export default hot(module)(App);
