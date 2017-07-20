import React, { Component } from 'react';
import Card from './card/card.js';
import style from './style.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);
  }
  render() {
    const cardsMap = this.props.cards.map((item, key) => {
      return (
        <Card
          item={item}
          key={key}
        />
      );
    });
    return (
      <div>
        {cardsMap}
      </div>
    );
  }
}


export default Container;
