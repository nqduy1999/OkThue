import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Layout = ({ ...props }) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
Layout.propTypes = {
  children: PropTypes.any
};
Layout.defaultProps = {
  children: {}
};
