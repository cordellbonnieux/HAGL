import React from 'react';
import flyer from './images/flyers/HAGL2022_prototype.jpg';

export default function Tickets() {
    return (
      <div id="tickets">
          <div id="tickets_inner">
              <div id="countdown">
                <h1>Tickets go on sale February 5th!</h1>
              </div>
              <img src={flyer} id="flyer2022" />
          </div>
      </div>
    );
}
