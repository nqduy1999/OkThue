import React, { useEffect } from 'react';
import classnames from 'classnames';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAppStore } from '../../hooks/app.store';
import LazyLoad from 'react-lazyload';
// styles
import { NavigationStyled } from './styled';
// images
import { images } from 'variables/images';
// components
function Navigation() {
  const router = useRouter();
  const [appStore] = useAppStore();
  // State

  function activeLink(slug) {
    if (router.pathname === slug) {
      return true;
    }
    return false;
  }

  function handleOpenQR() {
    router?.push('/[...a]', '/scan', { shallow: true });
  }

  useEffect(() => {}, [appStore.isNotification]);

  return (
    <>
      <NavigationStyled>
        <Link href="/">
          <a
            className={classnames('text', {
              active: activeLink('/')
            })}
          >
            <img
              src={
                router.pathname === '/'
                  ? images.icon_home_active
                  : images.icon_home
              }
            />
            <span>Trang chủ</span>
          </a>
        </Link>
        <Link href="/bxh">
          <a
            className={classnames('text', {
              active: activeLink('/bxh')
            })}
          >
            <img
              src={
                router.pathname === '/bxh'
                  ? images.icon_rank_active
                  : images.icon_rank_navigation
              }
            />
            <span>BXH</span>
          </a>
        </Link>
        <div className="text btn-qr">
          <LazyLoad once>
            <img
              className="icon_qr"
              src={images.icon_qr}
              atl="icon_qr"
              onClick={handleOpenQR}
            />
          </LazyLoad>
        </div>
        <Link href="/notification">
          <a
            className={classnames('text', {
              active: activeLink('/notification')
            })}
          >
            {!appStore.isNotification && (
              <img
                src={
                  router.pathname === '/notification'
                    ? images.icon_notification_navigation_blue
                    : images.icon_notification_navigation_white
                }
              />
            )}
            {appStore.isNotification && (
              <img
                src={
                  router.pathname === '/notification'
                    ? images.icon_notification_active
                    : images.icon_notification_navigation_dot
                }
              />
            )}
            <span>Thông báo</span>
          </a>
        </Link>
        <Link href="/personal">
          <a
            className={classnames('text', {
              active: activeLink('/personal')
            })}
          >
            <img
              src={
                router.pathname === '/personal'
                  ? images.icon_profile_active
                  : images.icon_profile_navigation
              }
            />

            <span>Cá nhân</span>
          </a>
        </Link>
      </NavigationStyled>
    </>
  );
}

export default Navigation;
