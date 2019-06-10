import React from 'react';
import { Route } from 'react-router-dom';
import Curriculum from './Curriculum';
import Contact from './Contact';
import About from './About';
import Home from './Home';


const Main = () => (
  <div>
    <main>
      <Route exact path="/" component={Home}/>
      <Route path="/contact/" component={Contact}/>
      <Route path="/curriculum/" component={Curriculum}/>
      <Route exact path="/about/" component={About}/>
    </main>
  </div>
);

export default Main;
