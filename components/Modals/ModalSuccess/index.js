import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../../variables/images';
import {
  StyledBtnClose,
  StyledModalContent,
  StyledModalSuccess
} from './styled';

function ModalSuccess(props) {
  const { visible, onCancel, dataQRInfo, keyReponse, messenger } = props;

  function renderMessengerScan() {
    if (keyReponse === 'SUCCESS') {
      return (
        <>
          <img
            src={images.icon_success}
            alt="success"
            className="icon-success"
          />
          <div className="subtitle-2 title-success">
            Chúc mừng bạn đã hoàn thành!
          </div>
          <div className="result">
            <span>Kết quả:</span>
            {/* <p>
              &#8226; Tên event: <span>{eventName || "--"}</span>
            </p> */}
            <p>
              &#8226; Tên người tham dự:{' '}
              <span>{(dataQRInfo && dataQRInfo.name) || '--'}</span>
            </p>
            <p>
              &#8226; Email:{' '}
              <span>
                {dataQRInfo && dataQRInfo.emailAcb
                  ? dataQRInfo.emailAcb
                  : dataQRInfo.email}
              </span>
            </p>
            <p>
              &#8226; Chức danh:{' '}
              <span>{(dataQRInfo && dataQRInfo.position) || '--'}</span>
            </p>
            <p>
              &#8226; Mã tài liệu:{' '}
              <span>
                {dataQRInfo && dataQRInfo.documentCode
                  ? dataQRInfo.documentCode === 'ACB'
                    ? '--'
                    : dataQRInfo.documentCode
                  : '--'}
              </span>
            </p>
          </div>
        </>
      );
    }
    if (keyReponse === 'FAIL') {
      return (
        <div>
          <img src={images.icon_fail} alt="fail" className="icon-fail" />
          <div className="subtitle-2 title-success">{messenger}</div>
        </div>
      );
    }
  }

  return (
    <StyledModalSuccess
      title={false}
      visible={visible}
      footer={false}
      style={{ top: '20%' }}
      closable={false}
    >
      <StyledModalContent>
        {renderMessengerScan()}
        <StyledBtnClose onClick={onCancel}>Đóng</StyledBtnClose>
      </StyledModalContent>
    </StyledModalSuccess>
  );
}

ModalSuccess.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  result: PropTypes.string,
  dataQRInfo: PropTypes.object,
  eventName: PropTypes.string,
  keyReponse: PropTypes.string,
  messenger: PropTypes.string
};

export default ModalSuccess;
