import React from 'react';
import infoClick from './info';

function Menu() {
  const info = <div className="menu_button font_glass">Info</div>;
  info.addEventListener('click', infoClick());
  return (
    <div id="menu">
      <div id="menu_bar">
        <div id="menu_left_spacer" />
        <div id="menu_title_wrapper">
          <div className="menu_title font_glass">HAGL</div>
        </div>
        <div id="menu_mobile_button">
          <div className="menu_button font_glass">Menu</div>
        </div>
        <div id="menu_right_spacer" />
      </div>
      <div id="menu_inner">
        <div className="menu_button_wrapper">
          { info }
        </div>
        <div className="menu_button_wrapper">
          <div className="menu_button font_glass">Tickets</div>
        </div>
        <div className="menu_button_wrapper">
          <div className="menu_button font_glass">Line-up</div>
        </div>
        <div className="menu_button_wrapper">
          <div className="menu_button font_glass">Contact</div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
