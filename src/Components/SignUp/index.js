import React, { Component } from 'react';
import firebase from 'firebase'

export default class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: null,
      password: null,
      verifyPassword: null,
      isLoggedIn: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  async handleSubmit(e){
    let { email, password } = this.state
    e.preventDefault();
    try {
      firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      console.error('Error signing you in', e);
    } finally {

    }
  }
  handleChange(e){
    let { name, value } = e.target
    this.setState({[name]: value})
  }
}
