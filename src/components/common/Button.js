import React from 'react';
import '../styles/button-styles.css';

const Button = ({btnLabel}) => {
  return (
      <button href='https://en.wikipedia.org/wiki/Special:Random'
        target='_blank' className="btn btn-primary">
          {btnLabel}
      </button>
  );
}

export default Button;
