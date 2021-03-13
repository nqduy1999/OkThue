import React from 'react';
import PropTypes from 'prop-types';
// Style
import { HeaderTabsStyled } from './styled';

function HeaderTabs(props) {
  const { data } = props;
  return (
    <>
      <HeaderTabsStyled>
        <div className="header-item-1">
          <span className="text-total">
            Check in: {data && data.checkInGuest}/{data && data.totalGuest}
          </span>
          <span>
            {data && data.pctInTotal}%&nbsp;{' '}
            <span className="text">người tham dự</span>
          </span>
        </div>
        <div className="header-item-2">
          <span className="text-total">
            Check out: {data && data.checkOutGuest}/{data && data.checkInGuest}
          </span>
          <span>
            {data && data.pctOutIn}%&nbsp;{' '}
            <span className="text">người ra về</span>
          </span>
        </div>
      </HeaderTabsStyled>
    </>
  );
}
HeaderTabs.propTypes = {
  data: PropTypes.object
};
export default HeaderTabs;
