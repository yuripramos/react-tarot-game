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
    };
    this.historyToggleStates = this.historyToggleStates.bind(this);
    this.handleMoreThanOneFlip = this.handleMoreThanOneFlip.bind(this);
    this.checkOneOpened = this.checkOneOpened.bind(this);
  }
  historyToggleStates(bool, id) {
    if (bool !== undefined) {
      this.setState({
        history: this.state.history.concat([{ opened: bool, id }]),
      });
    }
  }
  handleMoreThanOneFlip(id) {
    console.log('handleclick parent');
    this.setState({ isFlipped: false }, () => {
      this.historyToggleStates(this.state.isFlipped, id);
    });
  }
  checkOneOpened(e, id) {
    if (!this.props.isShowing) {
      this.handleMoreThanOneFlip(id);
    }
  }
  render() {
    const rest = {
      basePath: this.props.basePath,
      backCard: this.props.backCard,
      isShowing: this.props.isShowing,
      historyToggleStates: this.historyToggleStates,
      isOpened: this.state.isOpened,
      isFlipped: this.state.isFlipped,
      checkOneOpened: this.checkOneOpened,
      history: this.state.history,
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
