import { Modal, Button } from 'antd';
import { AccountContext } from 'components/common/context/AccountContext';
import React, { useContext, useState } from 'react';
import { classPrefixor } from 'utils/classPrefixor';
import { CloseCircleOutlined, PhoneOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { images } from 'utils/images';

// Hook

const prefix = 'sign-up';
const c = classPrefixor(prefix);

const SignUp = ({ ...props }) => {
  const { modal, setModal, setTypeModal } = useContext(AccountContext);
  const [clickmore, setClickmore] = useState(false);
  const closeModal = () => {
    setModal(false);
    setClickmore(false);
  };
  const openPhone = () => {
    setTypeModal('login-phone');
  };
  return (
    <Modal
      className={c`modal`}
      visible={modal}
      footer={null}
      title={null}
      centered={true}
      closeIcon={<CloseCircleOutlined />}
      onCancel={closeModal}
    >
      <div className="body">
        <i className="fa fa-fire"></i>
        <div className="body__title-content">
          <h1>{props ? props.type : ''}</h1>
          <div className="body__title-content__main" data-nosnippet="true">
            Khi nhấp vào <span className="Tt(c)">Đăng nhập</span>, bạn đồng ý
            với
            <a
              href="https://policies.tinder.com/terms?lang=vi"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="open-in-new-window"
            >
              {' '}
              Điều khoản{' '}
            </a>
            của chúng tôi. Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn
            trong
            <a
              href="https://policies.tinder.com/privacy?lang=vi"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="open-in-new-window"
            >
              {' '}
              Chính sách Quyền riêng tư
            </a>{' '}
            và{' '}
            <a
              href="https://policies.tinder.com/cookie-policy?lang=vi"
              target="_blank"
              rel="noopener noreferrer"
              aria-describedby="open-in-new-window"
            >
              Chính sách Cookie
            </a>{' '}
            của chúng tôi.
          </div>
        </div>
        {clickmore ? (
          <div className="sign-in">
            <Button icon={<img src={images.icon_google} />} className="google">
              Đăng nhập bằng Google
            </Button>
            <Button
              icon={<img src={images.icon_facebook} />}
              className="facebook"
            >
              Đăng nhập bằng Facebook
            </Button>
            <Button
              icon={<PhoneOutlined />}
              className="phone"
              onClick={openPhone}
            >
              Đăng nhập bằng Số điện thoại
            </Button>
            <Button className="more">Quên mật khẩu ?</Button>
          </div>
        ) : (
          <div className="sign-in">
            <Button icon={<img src={images.icon_google} />} className="google">
              Đăng nhập bằng Google
            </Button>
            <Button className="more" onClick={() => setClickmore(true)}>
              More Option
            </Button>
          </div>
        )}
      </div>
      <div className={`footer`}>
        <h1>Tải Ngay Ứng Dụng</h1>
        <div className={`footer__down-btn`}>
          <Button>
            <img src={images.icon_appstore} />
          </Button>
          <Button>
            <img src={images.icon_chplay} />
          </Button>
        </div>
      </div>
    </Modal>
  );
};
export default SignUp;
SignUp.propTypes = {
  type: PropTypes.any
};
SignUp.defaultProps = {
  type: {}
};
