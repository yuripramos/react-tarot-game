import React, { PropTypes } from 'react';
import Button from './button/Button.js';
import style from './style.scss';

const Header = ({ start, isShowing }) => {
	return (
		<div>
			<h1>The Destiny</h1>
			<p className={style.mainInstructions}>
				1 - Click on the start button, the cards will be shuffled and flipped. <br />
				2 - Click in one card, you can choose only one per click. <br />
				3 - After the click your card will be flipped and you can see the infos about it. <br />
				4 - If you click in one card with another one already flipped the default action is to unflip this one.
			</p>
			<Button start={start} isShowing={isShowing} />
		</div>
	);
};

export default Header;


Header.propTypes = {
	start: PropTypes.func,
	isShowing: PropTypes.bool,
};
