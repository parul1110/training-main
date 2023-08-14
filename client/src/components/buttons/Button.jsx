import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss'

const Button = ({ children, className='', ...rest }) => {
  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;