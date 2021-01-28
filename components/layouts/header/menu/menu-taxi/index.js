import { Menu } from 'antd';
import React from 'react';

const MenuTaxi = () => {
  return (
    <Menu className="tab" mode="inline">
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Địa điểm</span>
      </Menu.Item>
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Hãng</span>
      </Menu.Item>
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Loại Taxi</span>
      </Menu.Item>
    </Menu>
  );
};

export default MenuTaxi;
