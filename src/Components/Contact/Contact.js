import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      "name": null,
      "email": null,
      "message": null
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleInputChange(e){
    let { name, value } = e.target;
    this.setState({ [name]: value })
  }
  handleSubmit(e){
    e.preventDefault();
    this.history.push('/')
  }
  clearForm(e){
    console.log(this);
    e.preventDefault()
    this.setState({
      "name": null,
      "email": null,
      "message": null
    })
  }
  render(){
    return (
      <div id="main">
        <div className="container">
          <div className="row">
            <div id="content" className="col-8 col-12-mobile">
              <section className="col-12">
                <header>
                  <h2>Contact</h2>
                </header>
                <form onSubmit={this.handleSubmit}>
                  <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                      <input type="text" onChange={this.handleInputChange} name="name" id="name" placeholder="Name" />
                    </div>
                    <div className="col-6 col-12-mobile">
                      <input type="text" onChange={this.handleInputChange} name="email" id="email" placeholder="Email" />
                    </div>
                    <div className="col-12">
                      <textarea name="message" onChange={this.handleInputChange} id="message" placeholder="Message"></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="button">Send Message</button>
                      <button onClick={this.clearForm} className="button alt">Clear Form</button>
                    </div>
                  </div>
                </form>
              </section>
            </div>
            <div id="sidebar" className="col-4 col-12-mobile">
              <section>
                <ul className="info">
                  <li>
                    <h3>Address</h3>
                    <p>
                      Kotlin Camp<br />
                      1011 Kearny St.,<br />
                      San Francisco, CA 94133
                    </p>
                  </li>
                  <li>
                    <h3>Mail</h3>
                    <p><a href="/">someone@untitled.tld</a></p>
                  </li>
                </ul>
              </section>
            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default withRouter(Contact)
