/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState } from 'react';
const AccountContext = createContext(null);
const { Provider } = AccountContext;
import PropTypes from 'prop-types';

const AccountContextProvider = ({ ...props }) => {
  const [modal, setModal] = useState(false);
  const [typeModal, setTypeModal] = useState();

  const store = {
    setModal,
    modal,
    typeModal,
    setTypeModal
  };
  return <Provider value={{ ...store }}>{props.children}</Provider>;
};

export { AccountContextProvider, AccountContext };
AccountContextProvider.propTypes = {
  children: PropTypes.any
};
AccountContextProvider.defaultProps = {
  children: {}
};
