import React from 'react';
import PropTypes from 'prop-types';
import StyledRadio from './styled';

function CustomRadio(props) {
  const { children, disabled, readOnly, ...other } = props;
  return (
    <StyledRadio {...other} disabled={disabled || readOnly}>
      {children}
    </StyledRadio>
  );
}

CustomRadio.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  children: PropTypes.any,
  readOnly: PropTypes.bool
};

export default CustomRadio;
