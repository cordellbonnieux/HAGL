import React from 'react';

function Menu() {
  return (
    <div id="menu">
      <div id="menu_bar">
        <div id="menu_left_spacer" />
        <div id="menu_title_wrapper">
          <div className="menu_title font_glass">HAVE A GOOD LAUGH</div>
        </div>
        <div id="menu_mobile_button">
          <div className="menu_button font_glass" id="menuBtn">Menu</div>
        </div>
        <div id="menu_right_spacer" />
      </div>
      <div id="menu_inner">
        <div className="menu_button_wrapper">
          <a href="#tickets" className="menu_button font_glass">Tickets</a>
        </div>
        <div className="menu_button_wrapper">
          <a href="#lineUp" className="menu_button font_glass">Line-up</a>
        </div>
        <div className="menu_button_wrapper">
          <a href="#info" className="menu_button font_glass">Info</a>
        </div>
        <div className="menu_button_wrapper">
          <a href="#contact" className="menu_button font_glass">Contact</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
