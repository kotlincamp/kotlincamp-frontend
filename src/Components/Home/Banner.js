import React from 'react';
import Carousel from './Banner';

const Banner = () => (
  <div id="banner">
  <div className="container">
    <section>
      <Carousel />

      <header>
        <h2>Kotlin Camp</h2>
        <span className="byline">Become a proficient Kotlin / Android Developer</span>
      </header>
    </section>
  </div>
</div>
);

export default Banner;
