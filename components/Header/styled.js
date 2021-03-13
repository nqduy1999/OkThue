import styled from 'styled-components';
import { Layout } from 'antd';
import variableStyles from '../../styles/variable-styles';

const { Header } = Layout;

const HeaderStyled = styled(Header)`
  z-index: 999;
  background: ${variableStyles.primaryWhiteBasic};
  height: 60px;
  width: 100%;
  margin: 0 auto;
  transition: translate 0.1s linear;
  position: ${props => props?.position};
  /* box-shadow: 0px 4px 4px rgba(180, 184, 188, 0.12); */
  display: flex;
  max-width: 576px;
  padding: 0 20px !important;
  .sider-header {
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    span {
      font-weight: ${variableStyles.fwBold};
      font-size: ${variableStyles.fontSize_20};
    }
    .icon {
      position: absolute;
      font-size: 32px;
      float: left;
      color: #6a6c74;
      // position: absolute;
      left: 24px;
      justify-content: center;
      display: flex;
      margin-top: 2px;
      cursor: pointer;
    }
  }

  .menu-views__filter {
    display: flex;
    img {
      cursor: pointer;
    }
  }
  .menu-views__search {
    i {
      font-size: ${variableStyles.fontSize_24};
    }
  }
`;

export { HeaderStyled };
