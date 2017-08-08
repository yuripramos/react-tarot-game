import React, { Component, PropTypes } from 'react';
import ReactCardFlip from 'react-card-flip';
import ReactTooltip from 'react-tooltip';
import style from './style.scss';

class Card extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isFlipped: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.checkOneOpened = this.checkOneOpened.bind(this);
	}
	componentWillReceiveProps(nextprops) {
		if (nextprops.cardsState) {
			this.setState({ isFlipped: false });
		}
	}

	handleClick(e) {
		const { keyId, historyToggleStates } = this.props;
		if (e) {
			e.preventDefault();
		}

		this.setState({ isFlipped: !this.state.isFlipped }, () => {
			historyToggleStates();
		});
	}

	checkOneOpened(e) {
		if (!this.props.isShowing) {
			this.handleClick(e);
		}
	}

	render() {
		const { item, basePath, backCard, isShowing } = this.props;
		return (
			<div className={`col-lg-2 col-md-3 col-sm-6 ${style.card}`}>
				<ReactCardFlip
					isFlipped={this.state.isFlipped}
					flipSpeedBackToFront={0.9}
					flipSpeedFrontToBack={0.9}
				>
					<div
						key="front"
						data-tip={isShowing ?
						`${item.name} <br/> <br/> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum` :
						'clique para descobrir'}
						data-multiline
					>
						<button
							onClick={() => this.checkOneOpened()}
						>
							<img src={isShowing ? `${basePath}${item.image}` : backCard} alt={item.name} className={`${style.img}`} />
						</button>
					</div>
					<div
						key="back"
						data-tip={isShowing ? '' :
						`${item.name} <br/> <br/> lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum`}
						data-multiline
					>
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
	checkOneOpened: PropTypes.func,
	item: PropTypes.object,
};
