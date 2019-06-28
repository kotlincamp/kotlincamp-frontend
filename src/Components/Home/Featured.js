import React, { Component } from 'react';
import { getFeaturedItems } from '../../db/';

export default class Featured extends Component {
  constructor(props){
    super(props);
    this.state = {
      featured: [],
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  async componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
    try {
      let featured = await getFeaturedItems()
      this.setState({ featured: featured });
    } catch (e) {
      console.error('error getting featured items', e);
    }
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  render(){
    let { featured, width } = this.state;
    // console.log(this.state);
    return (width >= 840) ? (
      <div>
        <div className="wrapper wrapper-style1">
          <div className="container">
            <div className="row">
              {featured.map(feature => (
                <div key={feature.id} className="col-4">
                    <section>
                      <i className={feature['font-awesome-class'] + ' fa-2x'}></i>
                      <header>
                        <h2>{feature.title}</h2>
                      </header>
                      <p>{feature.description}</p>
                    </section>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <div className="wrapper wrapper-style1">
          <div className="container">
            <div className="row">
              {featured.map(feature => (
                <div key={feature.id} className="col-4">
                    <section>
                      <i className={feature['font-awesome-class'] + ' fa-2x'}></i>
                      <header>
                        <h2>{feature.title}</h2>
                      </header>
                      <p> </p>
                    </section>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
