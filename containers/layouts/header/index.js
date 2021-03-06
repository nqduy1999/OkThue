import { Button, Dropdown, Menu } from 'antd';
import ForgotPass from 'containers/account/forgot';
import SignUp from 'containers/account/signup';
import { AccountContext } from 'containers/common/context/AccountContext';
import React, { useState } from 'react';
import { classPrefixor } from 'utils/classPrefixor';
import MenuFlight from '../../menu/menu-flight';
import MenuTaxi from '../../menu/menu-taxi';
const prefix = 'header';
const c = classPrefixor(prefix);

const Header = () => {
  const { setModal, typeModal, setTypeModal } = React.useContext(
    AccountContext
  );
  const [type, setType] = useState();
  const [typeMenu, setTypeMenu] = useState();
  const Login = () => {
    setTypeModal('login');
    setModal(true);
    setType('Bắt đầu');
  };
  const menuUser = (
    <Menu className="menu-user">
      <Menu.Item>
        <a className="btn_signup">Đăng ký</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={Login} className="btn_signin">
          Đăng nhập
        </a>
      </Menu.Item>
      <hr />
      <Menu.Item>Cho thuê nhà</Menu.Item>
    </Menu>
  );
  return (
    <div className={c`wrapper-page`}>
      <header className="header">
        <nav className="nav">
          <h1>
            <i className="fa fa-fire"></i> OkThuê
          </h1>
          <Menu className="btn__main" mode="inline">
            <Menu.Item
              icon={<i className="fa fa-taxi"></i>}
              onClick={() => setTypeMenu('car-hire')}
            >
              Thuê xe có tài xế
            </Menu.Item>
            <Menu.Item
              icon={<i className="fa fa-car"></i>}
              onClick={() => setTypeMenu('taxi')}
            >
              Thuê xe tự lái
            </Menu.Item>
          </Menu>
          <div className="nav__button">
            <div className="nav__button__rent button">Cho thuê xe ngay</div>
            <div className="nav__button__change-language button">
              <i className="fa fa-globe-asia"></i> VN
            </div>

            <Dropdown
              overlay={menuUser}
              placement="bottomRight"
              trigger={['click']}
            >
              <Button
                className="nav__button__login button"
                icon={<i className="fa fa-bars"></i>}
              >
                <i className="fa fa-user-circle"></i>
              </Button>
            </Dropdown>
          </div>
        </nav>
        {typeMenu && typeMenu == 'car-hire' ? (
          <MenuFlight />
        ) : typeMenu == 'taxi' ? (
          <MenuTaxi />
        ) : (
          ''
        )}
      </header>
      {typeModal == 'login' ? (
        <SignUp type={type} setTypeModal={setTypeModal} />
      ) : typeModal == 'login-phone' ? (
        <ForgotPass />
      ) : typeModal == 'forgot' ? (
        <ForgotPass />
      ) : (
        ''
      )}
    </div>
  );
};

export default Header;
