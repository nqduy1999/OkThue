import React from 'react';
import PropTypes from 'prop-types';
import { classPrefixor } from 'utils/classPrefixor';

// Hook
const c = classPrefixor(prefix);
const FilterComponent = () => {
  return <div className={c`wrapper`}></div>;
};
export default FilterComponent;
FilterComponent.propTypes = {
  type: PropTypes.any
};
FilterComponent.defaultProps = {
  type: {}
};
