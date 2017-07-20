import React, { Component } from 'react';
import axios from 'axios';
import auth from '../helpers/auth.js';
import '../assets/styles/app.css';


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
    axios.get('http://localhost:8080/tarot.json')
    .then(res => {
      this.setState({ items: res.data }, () => {
        console.log(this.state.items);
      });
    });
  }


  render() {
    return (
      <div>
        <p> olá </p>
      </div>
    );
  }
}
