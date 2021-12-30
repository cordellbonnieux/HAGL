import React from 'react';
import one from './images/ass.jpg';
import two from './images/rosa.jpg';
import three from './images/tom.jpg';
import four from './images/whip-its.jpg';
import five from './images/infa.jpg';

export default function Right() {
  return (
    <div className="content_right_inner">
      <img src={one} className="content_right_img content_right_img_1" alt="Alf House" />
      <img src={three} className="content_right_img content_right_img_3" alt="Napalm Raid" />
      <img src={two} className="content_right_img content_right_img_2" alt="Bubbles at the Astoria" />
      <img src={four} className="content_right_img content_right_img_4" alt="whip-its" />
      <img src={five} className="content_right_img content_right_img_5" alt="infa riot" />
    </div>
  );
}
