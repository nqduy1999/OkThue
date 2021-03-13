/* eslint-disable indent */
import styled, { createGlobalStyle } from 'styled-components';
import { Select } from 'antd';
import variableStyles from '../../styles/variable-styles';

export const StyledSelect = styled(Select)`
  &.custom-ant-select {
    width: 100%;
    font-size: 16px;

    &.ant-select-focused {
      .ant-select-selector {
        border: 1px solid ${variableStyles.NeutralsSkyDark};
        box-shadow: none;
      }
    }

    &.ant-select-single {
      color: ${variableStyles.primaryBlueBasic};
      font-weight: ${props => props.type === 'withBorder' && '600'};
      .ant-select-selector {
        border: ${props =>
          props.type === 'withBorder' && !props.value
            ? 'none'
            : `1px solid ${variableStyles.NeutralsSkyDark}`};
        border: ${props =>
          props.error && `1px solid ${variableStyles.SematicErrorBasic}`};
        &:hover {
          border: ${props =>
            props.type === 'withBorder' && !props.value
              ? 'none'
              : `1px solid ${variableStyles.NeutralsSkyDark}`};
          border: ${props =>
            props.error && `1px solid ${variableStyles.SematicErrorBasic}`};
        }
      }
      &:hover {
        .ant-select-arrow {
          color: ${props =>
            props.type === 'withBorder' && variableStyles.secondaryLimeBasic};
        }
        .ant-select-selector {
          .ant-select-selection-item {
            color: ${props =>
              props.type === 'withBorder' && variableStyles.secondaryLimeBasic};
          }
        }
        .ant-select-selection-placeholder {
          color: ${props =>
            props.type === 'withBorder' && variableStyles.secondaryLimeBasic};
        }
      }
      .ant-select-arrow {
        color: ${props =>
          props.type === 'withBorder' && variableStyles.primaryBlueBasic};
      }
    }

    &.ant-select-open {
      .ant-select-selector {
        border: ${props =>
          props.type === 'withBorder'
            ? `1px solid ${variableStyles.NeutralsSkyDark} !important`
            : `1px solid ${variableStyles.secondaryLimeBasic} !important`};
        box-shadow: none;

        .ant-select-selection-item {
          opacity: ${props => props.type === 'withBorder' && 1};
        }
      }
      &:hover {
        .ant-select-arrow {
          color: ${props =>
            props.type === 'withBorder' && variableStyles.primaryBlueBasic};
        }
        .ant-select-selector {
          .ant-select-selection-item {
            color: ${props =>
              props.type === 'withBorder' && variableStyles.primaryBlueBasic};
          }
        }
        .ant-select-selection-placeholder {
          color: ${props =>
            props.type === 'withBorder' && variableStyles.primaryBlueBasic};
        }
      }
    }

    &.ant-select-disabled {
      .ant-select-selector {
        cursor: not-allowed !important;
        background: ${variableStyles.NeutralsSkyLighter};
        color: ${variableStyles.NeutralsInkLighter};
        border: 1px solid ${variableStyles.NeutralsSkyDark} !important;

        input {
          cursor: not-allowed !important;
        }

        .ant-select-selection-item {
          color: ${props =>
            props.readOnly
              ? variableStyles.NeutralsInkBasic
              : variableStyles.NeutralsInkLighter};
        }
      }
      .ant-select-arrow {
        color: ${props =>
          props.readOnly
            ? `${variableStyles.inkLighter} !important`
            : `${variableStyles.NeutralsInkLighter} !important`};
      }
    }

    &.ant-select-show-arrow {
      .ant-select-arrow {
        color: ${props =>
          props.type === 'withBorder'
            ? variableStyles.primaryBlueBasic
            : variableStyles.inkLighter};
        font-size: 24px;
        top: ${props => (props.type === 'withBorder' ? '5px' : '9px')};
        right: 17px;
        width: auto;
        height: auto;
        margin-top: 0;
      }
      .ant-select-clear {
        font-size: 20px;
        top: 11px;
        right: 42px;
        width: auto;
        height: auto;
        margin-top: 0;
        color: ${variableStyles.inkLighter};
      }
      .ant-select-selection-placeholder {
        color: ${variableStyles.NeutralsInkDark} !important;
        opacity: ${props => props.type === 'withBorder' && 1};
      }
    }

    .ant-select-selector {
      box-shadow: none;
      &:hover {
        border-color: ${props =>
          props.type === 'withBorder'
            ? 'transparent'
            : variableStyles.inkLighter};
      }
      &:focus {
        border: 1px solid ${variableStyles.secondaryLimeBasic};
        box-shadow: none;
      }
    }
  }
`;

export const StyledDropdownOverlay = createGlobalStyle`
.custom-ant-dropdown-match-select {
    border: 1px solid ${variableStyles.NeutralsSkyLight};
    box-sizing: border-box;

    .ant-select-item.ant-select-item-option {
        background: ${variableStyles.primaryWhiteBasic};
        color: ${variableStyles.NeutralsInkBasic};
        padding: 10px 12px;
        font-size: ${variableStyles.fontSize_16};
        &:hover {
            background: ${variableStyles.NeutralsSkyLight};
        }
    }
}
`;

export const LabelStyled = styled.div`
  color: ${props => props.disabled && variableStyles.NeutralsInkLighter};
  margin-bottom: 4px;
`;

export const ErrorStyled = styled.div`
  margin-top: 4px;
`;

export const FlexContainderStyled = styled.div`
  display: flex;
  align-items: center;
`;
