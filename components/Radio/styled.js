/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Radio } from 'antd';
import variableStyles from '../../styles/variable-styles';

const StyledRadio = styled(Radio)`
  font-style: normal;
  font-weight: normal;
  font-size: ${variableStyles.fontSize_16};
  color: ${variableStyles.primaryBlueBasic};
  .ant-radio {
    .ant-radio-inner {
      border-color: ${props =>
    props.readOnly ? variableStyles.NeutralsSkyDark : variableStyles.NeutralsInkLighter};
      border-width: 2px;
      &:hover {
        border-color: ${variableStyles.NeutralsInkBasic};
      }
      &::after {
        top: 2px;
        left: 2px;
      }
    }
  }
  .ant-radio-checked {
    .ant-radio-inner {
      border-color: ${props =>
    props.readOnly ? variableStyles.NeutralsSkyDark : variableStyles.secondaryLimeBasic};
      &::after {
        background-color: ${props =>
    props.readOnly ? variableStyles.NeutralsSkyDark : variableStyles.secondaryLimeBasic};
      }
    }
  }
  .ant-radio-disabled {
    .ant-radio-inner {
      border-color: ${variableStyles.NeutralsSkyDark} !important;
      &::after {
        background-color: ${variableStyles.NeutralsSkyDark};
      }
    }
  }
`;

export default StyledRadio;
