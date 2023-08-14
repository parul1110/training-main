import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.scss';

function Input(props) {
  const { label, type, name, value, onChange, required, errorMessage, className } = props;

  return (
    <div className={styles.container}>
      <label htmlFor={name} className={styles.label}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`${styles.input} ${className}`}
      />
      <p className={styles.error}>{errorMessage}</p>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  className: PropTypes.string,

};


export default Input;
