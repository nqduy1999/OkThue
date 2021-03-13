import styled from 'styled-components';
import { Avatar } from 'antd';
import variableStyles from '../../styles/variable-styles';

const StyledAvatar = styled(Avatar)`
  font-style: normal;
  font-weight: ${variableStyles.fwBold};
  font-size: ${variableStyles.fontSize_14};
  color: ${variableStyles.primaryBlueBasic};
  background: #f5f6f7;

  &.ant-avatar {
    width: 32px;
    height: 32px;
  }

  &.ant-avatar-lg {
    width: 40px !important;
    height: 40px !important;
  }

  &.ant-avatar-sm {
    width: 24px !important;
    height: 24px !important;
  }
`;

export default StyledAvatar;
