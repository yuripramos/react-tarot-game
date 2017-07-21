import React from 'react';
import style from './style.scss';

const Button = (props) => {
  return (
    <div className={style.buttonWrapper}>
      <a className={style.button1}>Iniciar</a>
    </div>
  );
};


export default Button;
