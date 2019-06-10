import React from 'react';
import Events from './Events';
import Banner from './Banner';
import Featured from './Featured';

export default () => (
  <div>
    <Banner/>
    <Featured/>
    <div className="wrapper wrapper-style1">
      <div className="container">
        <section>
          <img src="images/pic02.jpg" alt="" className="image right"/>
          <header>
            <h2>What we're about...</h2>
            <span className="byline">Creating a pathway to tech this is accessible to anyone with a computer.</span>
          </header>
          <p>We are a community-oriented coding program and pathway to careers in technology with an emphasis on underrepresented groups.</p>
        </section>
      </div>
    </div>
    <div className="wrapper wrapper-style2">
      <div className="container">
        <section>
          <img src="images/pic03.jpg" alt="" className="image left"/>
          <div className="content">
            <header>
              <h2>Commodo et sapien</h2>
              <span className="byline">Ipsum dolor sit amet nullam tincidunt lorem</span>
            </header>
            <p>Accumsan diam rutrum porta justo tincidunt cum aliquam. Consectetur malesuada iaculis scelerisque pellentesque commodo suscipit iaculis magna cras sapien eget praesent. Libero etiam etiam fringilla felis dignissim nullam ligula dolor rutrum eget.</p>
          </div>
        </section>
      </div>
    </div>
    <div id="main">
      <div className="container">
        <div className="row">
          <Events/>
          <div id="sidebar" className="col-4 col-12-mobile">
            <section>
              <header>
                <h2>Magna tempus etiam</h2>
              </header>
              <img src="images/pic04.jpg" alt="" className="image featured"/>
              <p>Lorem ipsum dolor sit amet, consecetuer adipiscing elit. Phasellus hendrerit. Lorem ipsum dolor sit amet, consecetuer adipiscing elit.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  </div>
);
