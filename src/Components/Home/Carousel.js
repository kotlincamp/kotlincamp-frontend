import React, { Component } from 'react'
import { getHeaderImages } from '../../db'

export default class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: []
    }
  }
  async componentDidMount(){
    try {
      let images = await getHeaderImages()
      this.setState({images: images})
    } catch (e) {
      console.error('error retrieving header images', e);
    }
  }
  render(){
    let { images } = this.state
    return (
      <div id="carouselExampleSlidesOnly" className="carousel fade image full" data-ride="carousel">
        <div className="carousel-inner">
        {images.map(image => {
          if(image === images[0]){
            return (
              <div key={image.id} className="carousel-item active">
                <img className="d-block w-100" src={image.imageUrl} alt={image.imageUrl}/>
              </div>
            )
          } else {
            return (
              <div key={image.id} className="carousel-item">
                <img className="d-block w-100" src={image.imageUrl} alt={image.imageUrl}/>
              </div>
            )
          }
        })}

          <div className="carousel-item">
            <img className="d-block w-100" src={images[1]} alt="Second slide"/>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={images[2]} alt="Third slide"/>
          </div>
        </div>
      </div>
    )
  }
}
