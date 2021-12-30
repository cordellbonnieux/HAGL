import React from 'react';
import data from './data/lineup2022.json'

export default function LineUp() {
    let output = [];
    for (let i = 0; i < data.bands.length; i++) {
        const name = data.bands[i].name;
        const location = data.bands[i].location;
        const logo = './assets/logos/' + data.bands[i].logo
        const music = data.bands[i].music;
        let idName = name.split(" ").join("").replace("//", "").replace("?", "").toLowerCase();
        output.push(
            <div className="band_container">
                <a href={music} target="_blank" rel="noreferrer">
                  <div className="band_logo" id={idName} />
                  <p>{name} | {location}</p>
                </a>
            </div>
        );
    }
    output.sort(() => Math.random() - 0.5);
    return (
        <div id="lineUp">
            {output}
        </div>
    );
}