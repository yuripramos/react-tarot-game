import React, { Component, PropTypes } from 'react';
import ReactCardFlip from 'react-card-flip';
import style from './style.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkOneOpened = this.checkOneOpened.bind(this);
    this.forceFlipParent = this.forceFlipParent.bind(this);
  }
  handleClick(e) {
    const { keyId, historyToggleStates, checkOneOpened, history } = this.props;
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped }, () => {
      historyToggleStates(this.state.isFlipped, keyId);
    });
    this.forceFlipParent();
  }
  forceFlipParent() {
    const { history, checkOneOpened, keyId } = this.props;
    const last = history[history.length - 1];
    const beforeLast = history[history.length - 2];
    if (history.length > 1) {
      if (JSON.stringify(last.opened) === JSON.stringify(beforeLast.opened)) {
        checkOneOpened(keyId);
      }
    }
  }
  checkOneOpened(e) {
    if (!this.props.isShowing) {
      this.handleClick(e);
    }
  }

  render() {
    const { item, basePath, backCard, isShowing, historyToggleStates, isFlipped, checkOneOpened } = this.props;
    return (
      <div className={`col-lg-2 col-md-3 col-sm-6 ${style.card}`}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipSpeedBackToFront={0.9}
          flipSpeedFrontToBack={0.9}
        >
          <div key="front">
            <button
              onClick={this.checkOneOpened}
            >
              <img src={isShowing ? `${basePath}${item.image}` : backCard} alt={item.name} className={`${style.img}`} />
            </button>
          </div>
          <div key="back">
            <button
              onClick={
              this.checkOneOpened}
            >
              <img src={isShowing ? backCard : `${basePath}${item.image}`} alt={item.name} className={`${style.img}`} />
            </button>
          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Card;


Card.propTypes = {
  basePath: PropTypes.string,
  backCard: PropTypes.string,
  isShowing: PropTypes.bool,
  historyToggleStates: PropTypes.func,
  isOpened: PropTypes.bool,
  isFlipped: PropTypes.bool,
  checkOneOpened: PropTypes.func,
};
