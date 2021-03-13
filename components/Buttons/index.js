/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
// nodejs library that concatenates classes
import classNames from 'classnames';
// styled
import StyledButton from './styled';

const propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  height: PropTypes.any,
  width: PropTypes.any
};

function Button(props) {
  const { className, children, height, width, ...other } = props;
  const btnClasses = classNames({
    'nonanimating-btn': true,
    'custom-ant-button': true,
    [className]: className
  });

  return (
    <StyledButton
      {...other}
      className={btnClasses}
      height={height}
      width={width}
    >
      {children}
    </StyledButton>
  );
}

Button.propTypes = propTypes;

Button.defaultProps = {
  size: 'large'
};

export default Button;
