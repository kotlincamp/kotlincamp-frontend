import React, { Component } from 'react';
import getFeaturedItems from '../../db/';

export default class Featured extends Component {
  constructor(props){
    super(props);
    this.state = {
      featured: []
    }
  }
  async componentDidRender(){
    try {
      this.setState({ featured: await getFeaturedItems()});
    } catch (e) {
      console.error('error getting featured items', e);
    }
  }
  render(){
    let { featured } = this.state;
    return (
      <div>
      {featured.map(feature => (
        <div className="wrapper wrapper-style1">
          <div className="container">
            <section>
              <i className={feature['font-awesome-class']}></i>
              <header>
                <h2>{feature.title}</h2>
              </header>
              <p>{feature.description}</p>
            </section>
          </div>
        </div>
      ))}
      </div>
    )
  }
}
