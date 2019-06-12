import React from 'react';

const Footer = () => (
<div id="footer">
  <div className="container">
    <div className="copyright">
      <ul className="social">
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.meetup.com/Kotlin-Camp/"><i className="fab fa-meetup"></i></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/19181085/"><i  className="fab fa-linkedin"></i></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/kotlincamp/"><i  className="fab fa-facebook"></i></a></li>
        <li><a target="_blank" rel="noopener noreferrer" href="https://kotlincamp.slack.com/"><i  className="fab fa-slack"></i></a></li>
      </ul>
      <span>&copy; KotlinCamp. All rights reserved.</span>
    </div>
  </div>
</div>
);

export default Footer;
