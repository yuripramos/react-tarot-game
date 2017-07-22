import React, { PropTypes, Component } from 'react';
import Card from './card/card.js';
import style from './style.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    const rest = {
      basePath: this.props.basePath,
      backCard: this.props.backCard,
      isShowing: this.props.isShowing,
      flip: this.props.flip,
      isShowingEach: this.props.isShowingEach,
      checkBeforeFlip: this.props.checkBeforeFlip
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
};
