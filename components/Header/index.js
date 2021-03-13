import React from 'react';
import { useRouter } from 'next/router';
import { useAppStore } from '../../hooks/app.store';
// Style
import { HeaderStyled } from './styled';
// images
import { images } from 'variables/images';
// components
import { CustomInput } from 'components';

function Header() {
  const [appStore, updateAppStore] = useAppStore();

  const router = useRouter();

  function renderHeaderByPathname() {
    switch (router.pathname) {
      case '/su-kien/[id]':
        return 'Sự kiện';
      case '/thong-tin-su-kien/[id]':
        return 'Thông tin sự kiện';
      case '/tin-tuc/[id]':
        return 'Tin tức';
      case '/livestream/[id]':
        return 'Livestream';
      case '/agenda/[id]':
        return 'Lịch trình';
      case '/reward/[id]':
        return 'Thành tích';
      case '/notification':
        return 'Thông báo';
      case '/bxh':
        return 'Bảng xếp hạng';
      case '/trang-chu-staff':
        return 'Danh sách sự kiện';
      case '/danh-sach-tham-du/[id]':
        return 'Danh sách tham dự';
      case '/my-qr':
        return 'Mã QR của tôi';
      case '/document-event/[id]':
        return 'Tài liệu';
      case '/my-agenda/[id]':
        return 'Lịch của tôi';
      default:
        return null;
    }
  }

  function handleBack() {
    router.back();
    updateAppStore(draf => {
      draf.isShowDrawerFilter = false;
    });
    updateAppStore(draf => {
      draf.valueSearch = '';
    });
  }

  function openDrawerFilter() {
    updateAppStore(draf => {
      draf.isShowDrawerFilter = true;
    });
  }

  function onSearch() {
    updateAppStore(draf => {
      draf.isSearch = !draf.isSearch;
    });
    updateAppStore(draf => {
      draf.valueSearch = '';
    });
  }

  function onChange(value) {
    updateAppStore(draf => {
      draf.valueSearch = value;
    });
  }

  function renderFilter() {
    return (
      <div
        className="menu-views__filter"
        onClick={openDrawerFilter}
        aria-hidden="true"
      >
        <img src={images.icon_filter} alt="filter" />
      </div>
    );
  }

  function renderSearch() {
    return (
      <div className="menu-views__search">
        <i className="icon icon-search" onClick={onSearch} />
      </div>
    );
  }

  function renderInputSearch() {
    if (
      router.pathname === '/bxh' ||
      router.pathname === '/danh-sach-tham-du/[id]'
    ) {
      if (appStore.isSearch) {
        return (
          <div className="__input-search">
            <CustomInput
              onChange={e => onChange(e.target.value)}
              prefix={<i className="icon icon-search" />}
              placeholder="Nhập tên"
              allowClear
              backgroundGray
            />
          </div>
        );
      }
    } else {
      updateAppStore(draf => {
        draf.isSearch = false;
      });
    }
  }

  return (
    <>
      <HeaderStyled
        position={router.pathname === '/reward/[id]' ? 'relative' : 'fixed'}
      >
        <div className="sider-header">
          <i className="icon icon-chevron-left" onClick={handleBack}></i>
          <span onClick={handleBack}>{renderHeaderByPathname()}</span>
        </div>

        {router.pathname === '/livestream/[id]' ||
        router.pathname === '/agenda/[id]'
          ? renderFilter()
          : null}

        {router.pathname === '/bxh' ||
        router.pathname === '/danh-sach-tham-du/[id]'
          ? renderSearch()
          : null}
      </HeaderStyled>
      {renderInputSearch()}
    </>
  );
}

export default Header;
