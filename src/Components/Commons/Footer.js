import React from 'react';

const Footer = () => (
<div id="footer">
  <div className="container">
    <div className="copyright">
      <ul className="social">
        <li><a href="https://www.meetup.com/Kotlin-Camp/" target="_blank" rel="noopener noreferrer"><i className="fab fa-meetup"></i></a></li>
        <li><a href="https://www.linkedin.com/company/19181085/" target="_blank" rel="noopener noreferrer"><i  className="fab fa-linkedin"></i></a></li>
        <li><a href="https://www.facebook.com/kotlincamp/" target="_blank" rel="noopener noreferrer"><i  className="fab fa-facebook"></i></a></li>
        <li><a href="https://kotlincamp.slack.com/" target="_blank" rel="noopener noreferrer"><i  className="fab fa-slack"></i></a></li>
      </ul>
      <span>&copy; KotlinCamp. All rights reserved.</span>
    </div>
  </div>
</div>
);

export default Footer;
