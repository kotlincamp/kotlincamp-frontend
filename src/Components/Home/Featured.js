import React, { Component } from 'react';
import { getFeaturedItems } from '../../db/';

export default class Featured extends Component {
  constructor(props){
    super(props);
    this.state = {
      featured: []
    }
  }
  async componentDidMount(){
    try {
      let featured = await getFeaturedItems()
      this.setState({ featured: featured });
    } catch (e) {
      console.error('error getting featured items', e);
    }
  }
  render(){
    let { featured } = this.state;
    // console.log(this.state);
    return (
      <div>
        <div className="wrapper wrapper-style1">
          <div className="container">
            <div className="row">
              {featured.map(feature => (
                <div key={feature.id} className="col-4 col-12-mobile">
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
    )
  }
}
