import React, { Component } from 'react';
import style from './style.scss';

class card extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { item, basePath, backCard, isShowing } = this.props;
    return (
      <div className={`col-lg-2 col-md-3 col-sm-6 ${style.card}`}>
        <img src={isShowing ? `${basePath}${item.image}` : backCard} alt={item.name} className={style.img} />
      </div>
    );
  }
}

export default card;
