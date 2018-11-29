import React from "react";
import PropTypes from "prop-types";

const Button = ({ title, onClick, disabled }) => (
  <button className="form-button" onClick={onClick} disabled={disabled}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
};

export default Button;
