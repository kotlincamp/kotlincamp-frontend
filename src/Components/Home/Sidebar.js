import React, { Component } from 'react'
import { getSiteInfo } from '../../db'

export default class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      image: "",
      title: "",
      mission: "",
      width: 0
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  async componentDidMount(){
    try {
      let { image, title, mission } = await getSiteInfo()
      this.setState({
        image: image,
        title: title,
        mission: mission
      })
    } catch (e) {
      console.error('Error getting site info: ', e);
      this.setState({
        image: "",
        title: "",
        mission: ""
      })
    }
  }
  render(){
    let { image, title, mission, width } = this.state
    return width >= 840 && width < 1280 ? (
      <section className="centered">
        <header>
          <h2>{title}</h2>
        </header>
        <img id="featured-image" src={image} alt={title} className="image-fluid mx-auto centered featured"/>
        <p>{mission}</p>
      </section>
    ) : width < 840 ? (
      <section className="centered col-8">
        <header>
          <h2>{title}</h2>
        </header>
        <img id="featured-image" src={image} alt={title} className="image-fluid mx-auto featured"/>
        <div className="caption text-center">
          <p>
          {mission}
          </p>
        </div>
      </section>
    ) : (
      <section className="mx-auto centered container col-8">
        <header>
          <h2>{title}</h2>
        </header>
        <img id="featured-image" src={image} alt={title} className="image-fluid mx-auto featured"/>
        <div className="caption text-center">
          <p>
          {mission}
          </p>
        </div>
      </section>
    )
  }
}
