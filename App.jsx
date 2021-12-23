import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

function App() {
  const con = {
    hello: 'goodbye',
    poop: 'pee',
  };
  return (
    <div>
      <h1>Have A Good Laugh Festival</h1>
      <Menu tickets="Tickets" info="Info" contact="Contact" />
      <Content one={con.hello} two={con.poop} />
      <Footer />
      <Background />
    </div>
  );
}

function Menu(props) {
  return (
    <div id="menu">
      <div id="menu_inner">
        <div className="menu_button_wrapper">
          <a href="localhost:5000" className="menu_button">{ props.tickets }</a>
        </div>
        <div className="menu_button_wrapper">
          <a href="localhost:5000" className="menu_button">{ props.info }</a>
        </div>
        <div className="menu_button_wrapper">
          <a href="localhost:5000" className="menu_button">{ props.contact }</a>
        </div>
      </div>
    </div>
  );
}

function Content({ one, two }) {
  return (
    <div>
      <h2>{ one }</h2>
      <p>{ two }</p>
    </div>
  );
}

Content.propTypes = {
  one: React.propTypes.String.isRequired,
  two: React.propTypes.String.isRequired,
};

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
