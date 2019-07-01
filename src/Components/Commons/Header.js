import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      width: 0,
      home: () => (
        <li className="current"><Link to="/">Home</Link></li>
      ),
      contact: () => (
        <li><Link to="/contact/">Contact</Link></li>
      )

    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    this.setHeaderLinks = this.setHeaderLinks.bind(this)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  setHeaderLinks(pathname){
      pathname === undefined ? this.setState({
        home: () => (
          <li className="current"><Link to="/">Home</Link></li>
        ),
        contact: () => (
          <li><Link to="/contact/">Contact</Link></li>
        )}) :
      pathname === '/' ? this.setState({
        home: () => (
          <li className="current"><Link to="/">Home</Link></li>
        ),
        contact: () => (
          <li><Link to="/contact/">Contact</Link></li>
        )}) :
        this.setState({
          home: () => (
            <li><Link to="/">Home</Link></li>
          ),
          contact: () => (
            <li className="current"><Link to="/contact/">Contact</Link></li>
          ),
        });
  }
  componentDidMount(){
    this.updateWindowDimensions();
    this.setHeaderLinks();
    this.props.history.listen((location, action) => {
      this.setHeaderLinks(location.pathname)
    })
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.updateWindowDimensions);
    window.removeEventListener('popstate', this.setHeaderLinks);
  }
  render(){
    let { width, home, contact } = this.state
    let Home = home
    let Contact = contact
    return width > 840 ? (
      <div id="header">
        <div className="container">
          <div id="logo">
            <h1><Link to="/">Kotlin Camp</Link></h1>
          </div>
          <nav id="nav">
            <ul>
              <Home/>
              <Contact/>
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
              <Home/>
              <Contact/>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
