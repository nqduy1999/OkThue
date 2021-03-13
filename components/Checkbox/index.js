import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { StyledCheckbox } from './style';

function CustomCheckbox(props) {
  const { children, disabled, readOnly, ...other } = props;
  const checkBoxClasses = classNames({
    'checkbox-disabled': disabled,
    'checkbox-read-only': readOnly
  });
  return (
    <StyledCheckbox
      {...other}
      disabled={disabled || readOnly}
      className={checkBoxClasses}
    >
      {children}
    </StyledCheckbox>
  );
}

CustomCheckbox.propTypes = {
  autoFocus: PropTypes.bool,
  checked: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.any,
  readOnly: PropTypes.bool
};
export default CustomCheckbox;
