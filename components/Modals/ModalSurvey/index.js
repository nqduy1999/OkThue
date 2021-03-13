import React from 'react';
import PropTypes from 'prop-types';
import { StyledModalSurvey, StyledModalContent } from './styled';
import { images } from '../../../variables/images';

const ModalSurvey = props => {
  const { visible, onCancel, requiredPoint } = props;

  const renderContentSurvey = () => (
    <div className="modal-survey">
      <div className="header-modal">
        <span>{`Thông tin khảo sát`}</span>
        <img src={images.icon_close} onClick={onCancel} />
      </div>
      <div className="content-modal-survey">
        <div className="icon-warning-survey">
          <img src={images?.icon_warning_point} />
        </div>
        <div className="info-notification">
          <div>{`Rất tiếc bạn chưa đủ điểm làm khảo sát!`}</div>
          <span className="content-note">
            {`Nhanh chóng tích lũy `}
            <span className="point-survey">{requiredPoint}</span>
            {` điểm để mở khảo sát ngay nhé!`}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <StyledModalSurvey
      title={false}
      visible={visible}
      footer={false}
      closable={false}
      onCancel={onCancel}
      centered
      maskStyle={{ maxWidth: '576px', margin: 'auto' }}
      maskClosable={true}
    >
      <StyledModalContent>{renderContentSurvey()}</StyledModalContent>
    </StyledModalSurvey>
  );
};

ModalSurvey.propTypes = {
  visible: PropTypes.bool,
  onCancel: PropTypes.func,
  requiredPoint: PropTypes.any
};

export default ModalSurvey;
