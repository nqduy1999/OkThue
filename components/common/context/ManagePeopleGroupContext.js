import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const ManagePeopleGroupContext = createContext(null);
const { Provider } = ManagePeopleGroupContext;

const ManagePeopleGroupProvider = ({ ...props }) => {
  const [clickPeopleIcon, setClickPeopleIcon] = useState('unClickPeopleIcon');
  const [clickSideBarIcon, setClickSideBarIcon] = useState(
    'unClickSideBarIcon'
  );

  const store = {
    clickPeopleIcon,
    setClickPeopleIcon,
    clickSideBarIcon,
    setClickSideBarIcon
  };
  return <Provider value={{ ...store }}>{props.children}</Provider>;
};

export { ManagePeopleGroupProvider, ManagePeopleGroupContext };
ManagePeopleGroupProvider.propTypes = {
  children: PropTypes.any
};
ManagePeopleGroupProvider.defaultProps = {
  children: {}
};
