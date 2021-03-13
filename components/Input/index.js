import React from 'react';
import PropTypes from 'prop-types';
import { StyledInput } from './style';
import { StyledLabel, StyledRequired } from './style-common';

function CustomInput(props) {
  const { label, required, value, readOnly, disabled, ...other } = props;

  return (
    <>
      {label && (
        <StyledLabel className="caption-1" disabled={disabled}>
          {label} {required && <StyledRequired> *</StyledRequired>}
        </StyledLabel>
      )}
      <StyledInput
        {...other}
        readOnly={readOnly}
        disabled={disabled}
        prefix={props.prefix}
        autoComplete="off"
        value={value}
      />
    </>
  );
}

CustomInput.propTypes = {
  autoComplete: PropTypes.string,
  placeholder: PropTypes.string,
  addonAfter: PropTypes.any,
  addonBefore: PropTypes.any,
  id: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  maxLength: PropTypes.number,
  prefix: PropTypes.any,
  suffix: PropTypes.any,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  allowClear: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  size: PropTypes.string,
  isSearch: PropTypes.bool,
  required: PropTypes.bool,
  readOnly: PropTypes.bool
};

CustomInput.defaultProps = {
  autoComplete: 'off',
  size: 'large'
};

export default CustomInput;
