import styled from 'styled-components';
import { Layout } from 'antd';
import variableStyles from '../../styles/variable-styles';
const { Header } = Layout;

const NavigationStyled = styled(Header)`
  bottom: 0;
  @media only screen and (min-device-width: 375px) and (max-device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
    /* bottom: 51px; */
  }
  img {
    width: 24px;
    height: 24px;
  }
  z-index: 999;
  width: 100%;
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  max-width: 576px;
  padding: 0 20px !important;
  background: ${variableStyles.primaryWhiteBasic};
  box-shadow: 0px -2px 6px rgba(133, 135, 137, 0.1);
  .text {
    width: 20%;
    display: flex;
    align-items: inherit;
    justify-content: center;
    flex-direction: column;
    font-size: 12px;
    cursor: pointer;
    padding-top: 7px;
    @media (device-height: 568px) and (device-width: 320px) {
      font-size: 9px;
    }

    .icon_qr {
      background: linear-gradient(
        342deg,
        #002395 -0.65%,
        #0953da 100.66%,
        #0c3bd6 100.67%
      );
      box-shadow: 0px 2px 3px rgba(1, 22, 91, 0.2);
      border-radius: 20px;
      width: 56px;
      height: 56px;
      padding: 12px;
      margin-bottom: 50px;
    }

    span {
      color: #6a6c74;
      line-height: 20px;
    }

    .icon {
      color: #6a6c74;
      font-size: 2em;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    &:hover,
    &:active,
    &:focus,
    &.active {
      span {
        color: #002395;
        transition: 0.3s linear;
      }
      .icon {
        color: #002395;
      }
    }
  }
`;

export { NavigationStyled };
