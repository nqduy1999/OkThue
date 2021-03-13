import React from 'react';
import PropTypes from 'prop-types';
import StyledAvatar from './styled';

function CustomAvatar(props) {
  const { shape, size, src, icon, children, ...other } = props;
  return (
    <StyledAvatar {...other} shape={shape} size={size} src={src} icon={icon}>
      {children}
    </StyledAvatar>
  );
}

CustomAvatar.propTypes = {
  shape: PropTypes.string,
  size: PropTypes.any,
  src: PropTypes.any,
  icon: PropTypes.any,
  children: PropTypes.any
};

export default CustomAvatar;
