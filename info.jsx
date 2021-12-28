import React from 'react';

const element = document.querySelector('#page');

function infoPage() {
  return (
    <div id="info">
      <div id="info_inner">
        <div id="info_inner_what">
          <h2>What is Have A Good Laugh?</h2>
          <p>
            Have A Good Laugh is a punk festival in Vancouver, BC, Canada.
            Hosted over various venues, featuring punk (and related genres)
            bands from around the world for 3 days every June, since 2016.
          </p>
          <h3>Flyers/line-ups from previous years:</h3>
          <p>
            All flyer art (except 2016) by
            &nbsp;
            <a href="https://www.instagram.com/rev.battfink/" target="_blank" className="art_cred" rel="noreferrer">@rev.battfink</a>
          </p>
          <img src="./images/flyers/hagl1.jpg" alt="Have A Good Laugh 2016" />
        </div>
        <div id="info_inner_can">
          <h2>Can my band play Have A Good Laugh?</h2>
          <p>
            Planning for Have A Good Laugh usually starts in August the year prior,
            and the bill is usually filled by October or November.
            If you are interested in playing we encourage you to
            send us your music during this period.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function info() {
  element.innerHTML = infoPage();
}
