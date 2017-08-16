import React, { PropTypes } from 'react';
import Button from './button/Button.js';
import style from './style.scss';

const Header = ({ start, isShowing }) => {
	return (
		<div>
			<h1>O Destino</h1>
			<p className={style.mainInstructions}>
				Clique no botão Iniciar e selecione uma carta por vez.<br />
				O jogo termina quando não houverem mais cartas para selecionar, boa sorte!
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
