import React from 'react';
import data from './data/lineup2022.json';

export default function LineUp() {
  const output = [];
  /*
  const [bands] = data.bands;
  */
  for (let i = 0; i < data.bands.length; i += 1) {
      /*
    const [band] = bands[i];
    const [name, location, logo, music] = band;
    */
    const name = data.bands[i].name;
    const location = data.bands[i].location;
    const music = data.bands[i].music;
    const idName = name.split(' ').join('').replace('//', '').replace('?', '').toLowerCase();
    output.push(
      <div className="band_container">
        <a href={music} target="_blank" rel="noreferrer">
          <div className="band_logo" id={idName} />
          <p>
            {name}
            |
            {location}
          </p>
        </a>
      </div>,
    );
  }
  output.sort(() => Math.random() - 0.5);
  return (
    <div id="lineUp_container">
      <h1>2022 Fest Line-up</h1>
      <p>Click on a band&apos;s logo to hear their music.</p>
      <div id="lineUp">
        {output}
      </div>
    </div>
  );
}
