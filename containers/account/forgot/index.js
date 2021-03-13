import { Modal, Button } from 'antd';
import { AccountContext } from 'containers/common/context/AccountContext';
import React, { useContext } from 'react';
import { classPrefixor } from 'utils/classPrefixor';
import { CloseCircleOutlined } from '@ant-design/icons';

// Hook

const prefix = 'sign-up';
const c = classPrefixor(prefix);

const ForgotPass = () => {
  const { modal, setModal } = useContext(AccountContext);
  return (
    <Modal
      className={c`modal`}
      visible={modal}
      footer={null}
      title={null}
      centered={true}
      closeIcon={<CloseCircleOutlined />}
      onCancel={() => setModal(false)}
    >
      <div className="body">
        <i className="fa fa-burn"></i>
        <div className="body__title-content">
          <h1>Nhập số điện thoại của bạn</h1>
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
        <Button>Tiếp tục</Button>
      </div>
    </Modal>
  );
};
export default ForgotPass;
