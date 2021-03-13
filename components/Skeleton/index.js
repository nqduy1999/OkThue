import React from 'react';
import PropTypes from 'prop-types';
import { StyledSkeleton } from './styled';

function Skeleton(props) {
  const { children, ...other } = props;
  return <StyledSkeleton {...other}>{children}</StyledSkeleton>;
}

Skeleton.propTypes = {
  color: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  children: PropTypes.any
};
Skeleton.defaultProps = {};

export default Skeleton;
