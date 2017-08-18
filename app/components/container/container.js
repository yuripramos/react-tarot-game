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
		const rest = {
			basePath: this.props.basePath,
			backCard: this.props.backCard,
			isShowing: this.props.isShowing,
			historyToggleStates: this.historyToggleStates,
			checkOneOpened: this.checkOneOpened,
			history: this.state.history,
			cardsState: this.state.cardsState,

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

const mapStateToProps = (state, ownProps) => {
	return {
		state: ownProps.cards,
	};
};


const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(actions.toggleEachCard(ownProps.cards))
		}
	};
};

const container = connect(mapStateToProps, mapDispatchToProps)(Container);

export default container;


Container.propTypes = {
	cards: PropTypes.array.isRequired,
	item: PropTypes.func,
	basePath: PropTypes.string,
	backCard: PropTypes.string,
	isShowing: PropTypes.bool,
};
