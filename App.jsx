import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>Have A Good Laugh Festival</h1>
      <Menu tickets="Tickets" info="Info" contact="Contact" />
      <Content />
      <Footer />
      <Background />
    </div>
  );
}

function Menu(props) {
  //const [tickets, info, contact] = props;
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

function Content() {
  return (
    <div>
      <h2>Title</h2>
      <p>body text</p>
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

function Background() {
  return (
    <div id="background">
      <div>background div</div>
    </div>
  );
}

export default hot(module)(App);
