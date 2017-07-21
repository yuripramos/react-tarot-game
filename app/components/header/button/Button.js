import React from 'react';
import style from './style.scss';

const Button = ({ start }) => {
  return (
    <div className={style.buttonWrapper}>
      <a className={style.button1} onClick={start}>Iniciar</a>
    </div>
  );
};


export default Button;
