import React from 'react';
import PropTypes from 'prop-types';
import { StyledTags } from './styled';

const Tags = props => {
  const { children, ...other } = props;
  return <StyledTags {...other}>{children}</StyledTags>;
};

Tags.propTypes = {
  color: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  children: PropTypes.any
};
Tags.defaultProps = {};

export default Tags;
