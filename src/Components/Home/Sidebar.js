import React, { Component } from 'react'
import { getSiteInfo } from '../../db'

export default class Sidebar extends Component {
  constructor(props) {
    super();
    this.state = {
      image: "",
      title: "",
      mission: ""
    }
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
    let { image, title, mission } = this.state
    return (
      <section>
        <header>
          <h2>{title}</h2>
        </header>
        <img id="featured-image" src={image} alt={title} className="image featured"/>
        <p>{mission}</p>
      </section>
    )
  }
}
