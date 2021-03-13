/* eslint-disable prettier/prettier */
import styled from 'styled-components';
import { Checkbox } from 'antd';
import variableStyles from "../../styles/variable-styles";


const StyledCheckbox = styled(Checkbox)`
  &.ant-checkbox-wrapper{
    color: ${variableStyles.ink};
  }
  .ant-checkbox {
    &:hover {
      .ant-checkbox-inner {
        border: 2px solid ${variableStyles.primaryLight};
      }
    }
    .ant-checkbox-inner {
      border: 2px solid ${variableStyles.inkLighter};
      background-color: ${variableStyles.primaryWhite};
    }
    &.ant-checkbox-indeterminate.ant-checkbox-disabled {
      .ant-checkbox-inner {
        background-color: ${variableStyles.secondaryGrayBasic};
        border-color: transparent;
        
        &::after {
          background-color: ${variableStyles.primaryWhite};
        }
      }
    }
    &.ant-checkbox-indeterminate .ant-checkbox-inner {
      background-color: ${variableStyles.primaryBlueLight};
      border-color: transparent;

      &:focus {
        border-color: ${variableStyles.primaryBlueLight};
      }

      &::after {
        background-color: ${variableStyles.primaryWhite};
        height: 3px;
        width: 10px;
        border-radius: 4px;
      }
    }
  }
  .ant-checkbox-checked {
    &::after {
      border-color: ${props =>
    props.readOnly ? variableStyles.primaryGray : variableStyles.primaryBlueLight};
    }
    &:hover {
      .ant-checkbox-inner {
        border: none;
      }
    }
    .ant-checkbox-inner {
      border: none;
      background: ${props =>
    props.readOnly ? variableStyles.primaryGray: variableStyles.primaryBlueLight};
      border-color: ${props =>
    props.readOnly ? variableStyles.primaryGray : variableStyles.primaryBlueLight};
    }
  }
  .ant-checkbox-disabled {
    .ant-checkbox-inner {
      background: ${props =>
    props.readOnly ? variableStyles.primaryWhite : variableStyles.primaryGray} !important;
      border-color: ${variableStyles.secondaryGrayLighter} !important;
      &::after {
        border-color: ${variableStyles.secondaryGrayLightest};
      }
    }
  }
  &.checkbox-disabled{
      span{
        color: ${variableStyles.inkLightest} !important;
      }
  }
  &.checkbox-read-only{
      span{
        color: ${variableStyles.ink} !important;
      }
      .ant-checkbox-disabled {
        .ant-checkbox-inner {
          background-color: ${variableStyles.primaryWhite} !important;
        }
      }
      .ant-checkbox-checked{
        .ant-checkbox-inner {
          background-color: ${variableStyles.inkLightest} !important;
          border-color: ${variableStyles.inkLightest} !important;
        }
      }
  }
`;

export { StyledCheckbox };
