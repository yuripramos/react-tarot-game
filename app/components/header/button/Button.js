import React from 'react';
import style from './style.scss';

const Button = ({ start, isShowing }) => {
  return (
    <div className={style.buttonWrapper}>
      <button disabled={!isShowing} onClick={start}>
        <a className={style.button1}>Start</a>
      </button>
    </div>
  );
};


export default Button;
