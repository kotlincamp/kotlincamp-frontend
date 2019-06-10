import React from 'react';
import Carousel from './Banner';

const Banner = () => (
<div id="banner">
  <div className="container">
    <section>
      <img src="https://firebasestorage.googleapis.com/v0/b/kotlincamp-frontend.appspot.com/o/kotlincamp-header-1.jpg?alt=media&token=43091867-e369-47d5-8938-b1f9d10eaddb" alt="kotlincamp-header" className="image full" />

      <header>
        <h2>Kotlin Camp</h2>
        <span className="byline">Become a proficient Kotlin / Android Developer</span>
      </header>
    </section>
  </div>
</div>
);

export default Banner;
