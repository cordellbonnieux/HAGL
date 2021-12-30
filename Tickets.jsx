import React from 'react';
import flyer from './images/flyers/HAGL2022_prototype.jpg';

export default function Tickets() {
    return (
      <div id="tickets" className="section_dark">
          <div id="tickets_inner">
              <div id="countdown">
                <h1>Tickets go on sale February 5th!</h1>
              </div>
              <a href={flyer} target="_blank">
                <img src={flyer} id="flyer2022" alt="HAGL 2022 flyer" />
              </a>
          </div>
      </div>
    );
}
