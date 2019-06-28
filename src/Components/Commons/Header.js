import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  componentDidMount(){
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  render(){
    let { width } = this.state
    return width > 840 ? (
      <div id="header">
        <div className="container">
          <div id="logo">
            <h1><Link to="/">Kotlin Camp</Link></h1>
          </div>
          <nav id="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    ) : width > 332 ? (
      <div id="header">
        <div className="container">
          <nav id="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>
                <div id="logo">
                  <h1><Link to="/">Kotlin Camp</Link></h1>
                </div>
              </li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    ) : (
      <div id="header">
        <div className="container">
          <nav id="nav">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contact/">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}
