import styled from 'styled-components';
import { Input } from 'antd';
import variableStyles from '../../../styles/variable-styles';

import { styledCommonInput } from '../style-common';

const StyledInputPassword = styled(styledCommonInput(Input.Password))`
  &.ant-input-password-small {
    height: 24px !important;
  }

  &.ant-input-password-large {
    height: 48px !important;
  }

  .ant-input {
    font-family: 'Inter';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
  }

  /* &.ant-input-affix-wrapper-focused {
    border: 2px solid ${variableStyles.primaryBasic};
    border-right-width: 2px !important;
  } */
`;

export { StyledInputPassword };
