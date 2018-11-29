import React from "react";
import PropTypes from "prop-types";

import Button from "./Button";

const Form = ({ value, onChange, onClick, disabled, loading }) => (
  <form className="form" onSubmit={e => e.preventDefault()}>
    <div className="form-inner">
      <input
        className="form-input"
        autoFocus={true}
        type="text"
        name="vat"
        value={value}
        onChange={onChange}
        placeholder="e.g. EE100247019"
      />
    </div>
    <Button
      title={loading ? "..." : "Search"}
      onClick={onClick}
      disabled={disabled}
    />
  </form>
);

Form.defaultProps = {
  required: false
};

Form.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired, // button prop
  disabled: PropTypes.bool.isRequired, // button prop
  required: PropTypes.bool,
  loading: PropTypes.bool.isRequired // button prop
};

export default Form;
