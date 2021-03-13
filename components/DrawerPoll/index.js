/* eslint-disable react/jsx-key */
import React from 'react';
import PropTypes from 'prop-types';
// styles
import { DrawerOpinionStyled } from './styled';
// images
import { images } from '../../variables/images';
function DrawerOpinion(props) {
  //props
  const { onClose, visible, data } = props;

  function renderHeader() {
    return (
      <>
        <img src={images.icon_arrow_back} onClick={onClose} />
        <div className="ant-drawer-title">Sự kiện</div>
      </>
    );
  }

  return (
    <DrawerOpinionStyled
      title={renderHeader()}
      placement={'right'}
      closable={false}
      onClose={onClose}
      visible={visible}
      key={'placement'}
      width="100%"
      className="Myqr-Drawer"
    >
      <iframe
        src={data && data.poll}
        height="100%"
        width="100%"
        frameBorder="0"
        style={{
          minHeight: '560px'
        }}
      >
        <p>
          <a href="/en-US/docs/Glossary">
            Fallback link for browsers that don support iframes
          </a>
        </p>
      </iframe>
    </DrawerOpinionStyled>
  );
}

DrawerOpinion.propTypes = {
  onClose: PropTypes.any,
  visible: PropTypes.any,
  data: PropTypes.object
};

export default DrawerOpinion;
