import React, { Component } from 'react';
import ReactCardFlip from 'react-card-flip';
import style from './style.scss';

class card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }
  render() {
    const { item, basePath, backCard, isShowing, flip, isShowingEach, keyId, checkBeforeFlip } = this.props;

    return (
      <div className={`col-lg-2 col-md-3 col-sm-6 ${style.card}`}>
        <ReactCardFlip isFlipped={this.state.isFlipped} flipSpeedBackToFront={0.9} flipSpeedFrontToBack={0.9}>
          <div key="front">
            <button onClick={this.handleClick}>
              <img src={isShowing ? `${basePath}${item.image}` : backCard} alt={item.name} className={`${style.img}`} />
            </button>
          </div>
          <div key="back">
            <button onClick={this.handleClick}>
              <img src={isShowing ? backCard : `${basePath}${item.image}`} alt={item.name} className={`${style.img}`} />
            </button>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default card;
