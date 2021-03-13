import { Modal, Button, Form, Input } from 'antd';
import { AccountContext } from 'containers/common/context/AccountContext';
import React, { useContext } from 'react';
import { classPrefixor } from 'utils/classPrefixor';
import { CloseCircleOutlined } from '@ant-design/icons';

// Hook

const prefix = 'sign-up';
const c = classPrefixor(prefix);

const LoginWithPhone = () => {
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
      <Form className="body" name="input-phone">
        <i className="fa fa-fire"></i>
        <div className="body__title-content">
          <h1>Nhập số điện thoại di động của bạn </h1>
          <Form.Item name="phone">
            <div className="input-phone">
              <div className="country">VN</div>
              <Input prefix={<>+84</>} />
            </div>
          </Form.Item>
          <div
            className="body__title-content__main-phone"
            data-nosnippet="true"
          >
            Khi bạn nhấn Tiếp tục , OkThuê sẽ gửi cho bạn một tin nhắn có chứa
            xác thực. Bạn có thể phải trả phí tin nhắn và dữ liệu. Số điện thoại
            thoại được xác thực dùng để đăng nhập.
          </div>
        </div>
        <Button type="default" htmlType="submit" className="continue-phone">
          Tiếp tục
        </Button>
      </Form>
    </Modal>
  );
};
export default LoginWithPhone;
