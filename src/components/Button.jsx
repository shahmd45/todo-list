import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { onClick, className, children } = props;
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired
};
