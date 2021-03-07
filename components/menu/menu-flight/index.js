import { Menu } from 'antd';
import React from 'react';

const MenuFlight = () => {
  return (
    <Menu className="tab" mode="inline">
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Địa điểm</span>
      </Menu.Item>
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Ngày đi</span>
      </Menu.Item>
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Ngày về</span>
      </Menu.Item>
      <Menu.Item className="tab__item">
        <span className="main-content-tab">Số lượng vé</span>
      </Menu.Item>
    </Menu>
  );
};

export default MenuFlight;
