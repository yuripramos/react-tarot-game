import React, { Component, PropTypes } from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactTooltip from 'react-tooltip';
import style from './style.scss';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      update: false,
      id: 9999999,
    };
    this.handleClick = this.handleClick.bind(this);
    this.checkOneOpened = this.checkOneOpened.bind(this);
  }
  componentWillReceiveProps(nextprops) {
    const { history, isFlipped, historyToggleStates } = this.props;
    const last = nextprops.history[nextprops.history.length - 1];
    const beforeLast = nextprops.history[nextprops.history.length - 2];
    if (nextprops.forceFlip && last.id === nextprops.keyId) {
      this.setState({ isFlipped: !this.state.isFlipped, update: true, id: last.id }, () => {
        console.log('callback willreceiveprops', this.state.isFlipped);
        // historyToggleStates(this.state.isFlipped, nextprops.keyId, true);
      });
    }
    if (nextprops.forceFlip && beforeLast.id === nextprops.keyId) {
      this.setState({ isFlipped: !this.state.isFlipped, update: true, id: beforeLast.id }, () => {
      });
    }
  }

  handleClick(e, nextState, id) {
    const { keyId, historyToggleStates, forceFlip } = this.props;
    if (e) {
      e.preventDefault();
    }
    if (!nextState) {
      this.setState({ isFlipped: !this.state.isFlipped }, () => {
        historyToggleStates(this.state.isFlipped, keyId, true);
      });
    } else {
      // historyToggleStates(nextState, id, false);
      return 0;
    }
  }

  checkOneOpened(e) {
    if (!this.props.isShowing) {
      this.handleClick(e);
    }
  }

  render() {
    const { item, basePath, backCard, isShowing, isFlipped, forceFlip } = this.props;
    return (
      <div className={`col-lg-2 col-md-3 col-sm-6 ${style.card}`}>
        <ReactCardFlip
          isFlipped={this.state.isFlipped}
          flipSpeedBackToFront={0.9}
          flipSpeedFrontToBack={0.9}
        >
          <div key="front" data-tip={isShowing ? item.name : 'clique para descobrir'}>
            <button
              onClick={() => this.checkOneOpened()}
            >
              <img src={isShowing ? `${basePath}${item.image}` : backCard} alt={item.name} className={`${style.img}`} />
            </button>
          </div>
          <div key="back" data-tip={isShowing ? 'item.name' : item.name }>
            <button
              onClick={() => this.checkOneOpened()}
            >
              <img src={isShowing ? backCard : `${basePath}${item.image}`} alt={item.name} className={`${style.img}`} />
            </button>
          </div>
        </ReactCardFlip>
        <ReactTooltip />
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
  isFlipped: PropTypes.bool,
  checkOneOpened: PropTypes.func,
};
