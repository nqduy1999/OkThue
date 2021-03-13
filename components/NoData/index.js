/* eslint-disable react/jsx-key */
import React from 'react';
import LazyLoad from 'react-lazyload';
import PropTypes from 'prop-types';
// styles
import StyledStyledNoData from './styled';
import { images } from '../../variables/images';

function NoData() {
  return (
    <StyledStyledNoData>
      <LazyLoad once>
        <img src={images.icon_no_data} alt="no_data" />
      </LazyLoad>
      <span>Không tìm thấy kết quả</span>
    </StyledStyledNoData>
  );
}
NoData.propTypes = {
  loading: PropTypes.bool
};
export default NoData;
