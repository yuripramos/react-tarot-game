import React, { PropTypes, Component } from 'react';
import Card from './card/card.js';
import style from './style.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFlipped: false,
      oneOpened: true,
      history: [],
      childFlipToFalse: false,
    };
    this.historyToggleStates = this.historyToggleStates.bind(this);
    this.forceFlipParent = this.forceFlipParent.bind(this);
    this.checkForceFlip = false;
  }
  historyToggleStates(bool, id, callForceFlip) {
    this.setState({
      history: this.state.history.concat([{ opened: bool, id }]),
    }, () => {
      console.log('inside historyToggleStates');
      if (callForceFlip) {
        this.forceFlipParent()
      }
    });
  }
  forceFlipParent() {
    const { history } = this.state;
    const first = history[0];
    const last = history[history.length - 1];
    const beforeLast = history[history.length - 2];
    console.log('force FLIP PARENT');
    if (history.length > 1) {
      if (JSON.stringify(last.opened) === JSON.stringify(beforeLast.opened)) {
        this.setState({ childFlipToFalse: true });
      }
    }
  }
  render() {
    const rest = {
      basePath: this.props.basePath,
      backCard: this.props.backCard,
      isShowing: this.props.isShowing,
      historyToggleStates: this.historyToggleStates,
      isFlipped: this.state.isFlipped,
      checkOneOpened: this.checkOneOpened,
      history: this.state.history,
      forceFlip: this.state.childFlipToFalse,
      flipToFalse: this.forceFlipParent,

    };
    const cardsMap = this.props.cards.map((item, key) => {
      return (
        <Card
          item={item}
          keyId={key}
          {...rest}
        />
      );
    });
    return (
      <div className="col-lg-12 text-center">
        {cardsMap}
      </div>
    );
  }
}


export default Container;

Container.propTypes = {
  cards: PropTypes.array.isRequired,
  item: PropTypes.func,
  basePath: PropTypes.string,
  backCard: PropTypes.string,
  isShowing: PropTypes.bool,
};
