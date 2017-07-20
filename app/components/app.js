import React, { Component } from 'react';
import axios from 'axios';
import auth from '../helpers/auth.js';
import '../assets/styles/app.css';
import Header from './header/header.js';


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
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <Header />
        </div>
      </div>
    );
  }
}
