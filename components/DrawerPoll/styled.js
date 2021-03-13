import { Drawer } from 'antd';
import styled from 'styled-components';
import variableStyles from '../../styles/variable-styles';

export const DrawerOpinionStyled = styled(Drawer)`
  z-index: 99999;
  .ant-drawer-title {
    position: relative;
    display: flex;
    justify-content: center;
    font-size: ${variableStyles.fontSize_20};
    font-weight: ${variableStyles.fwBold};
    color: ${variableStyles.inkBasic};
    img {
      position: absolute;
      left: 0;
    }
  }
  .ant-drawer-body {
    padding: 16px;
    text-align: center;
    .qr-avatar {
      margin-bottom: 8px;
    }
    .qr-name {
      margin-bottom: 4px;
      font-size: ${variableStyles.fontSize_14};
      font-weight: ${variableStyles.fwSemiBold};
      line-height: ${variableStyles.lineHeight_20};
    }
    .qr-mnv {
      margin-bottom: 40px;
      font-size: ${variableStyles.fontSize_12};
      color: #6a6c74;
      line-height: ${variableStyles.lineHeight_16};
    }
  }
`;
