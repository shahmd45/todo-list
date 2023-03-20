import React from 'react';
import PropTypes from 'prop-types';

function Input(props) {
  const { onChange, value, error, type, className } = props;
  return (
    <div className="input-fields">
      <input value={value} onChange={onChange} type={type} className={className} />
      {error.length > 0 && <p className={'error'}>{error}</p>}
    </div>
  );
}

export default Input;

Input.propTypes = {
  value: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
