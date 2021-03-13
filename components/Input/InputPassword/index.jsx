import React from "react";
import PropTypes from "prop-types";
import { StyledInputPassword } from "./style";

function CustomInputPassword(props) {
  const { label, ...other } = props;

  return (
    <>
      {label && <label className="ink-body">{label}</label>}
      <StyledInputPassword {...other} />
    </>
  );
}

CustomInputPassword.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  maxLength: PropTypes.number,
  iconRender: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  allowClear: PropTypes.bool,
  size: PropTypes.string,
  label: PropTypes.string,
};

export default CustomInputPassword;
