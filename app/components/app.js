import React, { Component } from 'react';
import axios from 'axios';
import auth from '../helpers/auth.js';
import '../assets/styles/app.css';
import Header from './header/header.js';
import Container from './container/container.js';


export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loaded: false,
    };
    axios.get('http://localhost:8080/tarot.json')
    .then(res => {
      this.setState({ items: res.data, loaded: true });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
          <Header />
          {
          this.state.loaded &&
            <Container
              cards={this.state.items.cards}
              basePath={this.state.items.imagesUrl}
              backCard={this.state.items.imageBackCard}
            />
          }
        </div>
      </div>
    );
  }
}
