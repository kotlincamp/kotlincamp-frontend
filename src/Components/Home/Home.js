import React from 'react';
import Events from './Events';
import Banner from './Banner';
import Featured from './Featured';
import Sidebar from './Sidebar';

export default () => (
  <div id="page-wrapper">
    <Banner/>
    <Featured/>
    <div className="wrapper wrapper-style2">
      <div className="container">
        <section>
          <img src="images/pic03.jpg" alt="" className="image left"/>
          <div className="content">
            <header>
              <h2>What we're about...</h2>
              <span className="byline">We are a community-oriented coding program and pathway to careers in technology with an emphasis on underrepresented groups.</span>
            </header>
          </div>
        </section>
      </div>
    </div>
    <div id="main">
      <div className="container">
        <div className="row">
          <Events/>
          <div id="sidebar" className="col-4 col-12-mobile">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  </div>
);
