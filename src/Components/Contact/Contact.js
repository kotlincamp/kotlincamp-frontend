import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { addContact } from '../../db';

class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      "name": "",
      "email": "",
      "message": ""
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearForm = this.clearForm.bind(this)
  }
  async handleInputChange(e){
    let { name, value } = e.target;
    await this.setState({ [name]: value })
  }
  handleSubmit(e){
    e.preventDefault();
    addContact(this.state);
    this.setState({
      "name": "",
      "email": "",
      "message": ""
    })
    this.props.history.push('/')
  }
  clearForm(e){
    e.preventDefault()
    this.setState({
      "name": "",
      "email": "",
      "message": ""
    })
  }
  render(){
    let { handleInputChange, clearForm, handleSubmit, state } = this;
    let { name, email, message } = state;
    return (
      <div id="main">
        <div className="container">
          <div className="row">
            <div id="content" className="col-8 col-12-mobile">
              <section className="col-12">
                <header>
                  <h2>Contact</h2>
                </header>
                <form onSubmit={handleSubmit}>
                  <div className="row gtr-50">
                    <div className="col-6 col-12-mobile">
                      <input type="text" onChange={handleInputChange} name="name" id="name" placeholder="Name" value={name} />
                    </div>
                    <div className="col-6 col-12-mobile">
                      <input type="text" onChange={handleInputChange} name="email" id="email" placeholder="Email" value={email} />
                    </div>
                    <div className="col-12">
                      <textarea name="message" onChange={handleInputChange} id="message" placeholder="Message" value={message} ></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="button">Send Message</button>
                      <button onClick={clearForm} className="button alt">Clear Form</button>
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
