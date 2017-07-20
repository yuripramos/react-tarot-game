import React from 'react';
import style from './style.scss';

const Header = (props) => {
  return (
    <div>
      <h1>O Destino</h1>
      <p className={style.mainInstructions}>
        Clique no botão Iniciar e selecione uma carta por vez<br />
        Boa sorte!
      </p>
    </div>
  );
};

export default Header;
