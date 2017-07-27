import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/actions.js';
import Card from './card/card.js';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isFlipped: false,
      history: [],
    };
    this.historyToggleStates = this.historyToggleStates.bind(this);
  }
  historyToggleStates(bool, id) {
    this.setState({
      history: this.state.history.concat([{ opened: bool, id }]),
    });
  }

  render() {
    console.log(this.props);
    const rest = {
      basePath: this.props.basePath,
      backCard: this.props.backCard,
      isShowing: this.props.isShowing,
      historyToggleStates: this.historyToggleStates,
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

// const mapStateToProps = (state, ownProps) => {
//   return {
//     history: state.concat([{ opened: state.bool, id: state.id }]),
//   }
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(actions.toggleEachCard(ownProps))
    }
  };
}

const container = connect(mapDispatchToProps)(Container);

export default container;


Container.propTypes = {
  cards: PropTypes.array.isRequired,
  item: PropTypes.func,
  basePath: PropTypes.string,
  backCard: PropTypes.string,
  isShowing: PropTypes.bool,
};
