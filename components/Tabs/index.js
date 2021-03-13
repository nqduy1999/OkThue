import React from 'react';
import PropTypes from 'prop-types';
import { StyledTabs, StyledTabPane } from './style';

const Tabs = props => {
  const { arrTabPane, onTabChange, activeKey, marginBottom, ...other } = props;

  // Function
  return (
    <StyledTabs
      {...other}
      animated
      centered
      onChange={onTabChange}
      activeKey={activeKey}
      marginBottom={marginBottom}
      isSearch={props.isSearch}
    >
      {arrTabPane.map(item => (
        <StyledTabPane key={item.key} tab={item.name} isSearch={props.isSearch}>
          {item.content}
        </StyledTabPane>
      ))}
    </StyledTabs>
  );
};

Tabs.propTypes = {
  arrTabPane: PropTypes.array,
  onTabChange: PropTypes.func,
  activeKey: PropTypes.any,
  marginBottom: PropTypes.string,
  isSearch: PropTypes.bool
};

Tabs.defaultProps = {};

export default Tabs;
