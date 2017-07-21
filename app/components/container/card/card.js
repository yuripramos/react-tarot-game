import React, { Component } from 'react';
import style from './style.scss';

class card extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    const { item, basePath, backCard } = this.props;
    console.log(`${basePath}${item.image}`);
    return (
      <div className={`col-lg-2 col-md-3 col-sm-6 ${style.card}`}>
        <img src={`${basePath}${item.image}`} role="presentation" className={style.img} />
      </div>
    );
  }
}

export default card;
