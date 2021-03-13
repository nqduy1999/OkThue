import React from 'react';
import PropTypes from 'prop-types';
import { classPrefixor } from 'utils/classPrefixor';

// Hook
const prefix = 'find-car';
const c = classPrefixor(prefix);
const FindComponent = () => {
  return (
    <div className={c`wrapper`}>
      <div className="header"></div>
    </div>
  );
};
export default FindComponent;
FindComponent.propTypes = {
  type: PropTypes.any
};
FindComponent.defaultProps = {
  type: {}
};
