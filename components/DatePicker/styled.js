/* eslint-disable prettier/prettier */
import styled, { createGlobalStyle } from "styled-components";
import { DatePicker } from "antd";
import variableStyles from "../../styles/variable-styles";

export const StyledDatePicker = styled(DatePicker)`
  border: 1px solid ${variableStyles.NeutralsSkyDark};
  box-sizing: border-box;
  margin-left: 1px;
  margin-top: 2px;
  font-size: ${variableStyles.fontSize_14};

  &.ant-picker-disabled {
    background: ${variableStyles.NeutralsSkyLighter} !important;
    .ant-picker-input {
      input {
        color: ${(props) =>
          props.readOnly
            ? variableStyles.primaryBlueBasic
            : variableStyles.inkLightest};
      }
    }
  }

  .ant-picker-suffix {
    position: absolute;
    right: -5px;
    top: 1px;
    .icon {
      font-size: ${variableStyles.fontSize_24} !important;
    }
  }

  .ant-picker-clear {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  &.ant-picker {
    &:hover {
      border-color: ${(props) =>
        !props.disabled && variableStyles.secondaryLimeBasic};
    }
  }

  &.ant-picker-focused {
    border-color: ${variableStyles.secondaryLimeBasic};
    box-shadow: none;
  }

  .ant-picker-input > input {
    font-size: ${variableStyles.fontSize_16};
    color: ${variableStyles.primaryBlueBasic};
    &:disabled {
      &::placeholder {
        color: ${(props) =>
          props.disabled && variableStyles.primaryBlueBasic} !important;
      }
    }
    &:read-only {
      cursor: initial;
      &::placeholder {
        color: ${(props) =>
          props.readOnly && variableStyles.primaryBlueBasic} !important;
      }
    }
  }
`;

export const StyledDatePickerDropdown = createGlobalStyle`
 .ant-picker-cell-disabled {
    cursor: no-drop !important;
    pointer-events: unset;
    ::before {
      opacity: 0.4;
    }
  }
  .ant-picker-large {
      height: 40px;
  }

  .ant-picker-cell {
      .ant-calendar-date {
          width: 32px;
          height: 32px;
          line-height: ${variableStyles.lineHeight_33};
      }

      &:hover {
        ${"" /* background: ${variableStyles.primaryWhiteBasic}; */}
        .ant-picker-cell-inner {
            background: ${variableStyles.primaryWhiteBasic} !important;
        }   
				color: ${variableStyles.primaryBlueBasic};
			}
			padding: 5px 0;
  }

  .ant-picker-cell-selected {
      .ant-calendar-date {
          background: ${variableStyles.secondaryLimeBasic};
          color: ${variableStyles.primaryWhiteBasic};
          border-radius: 4px;
          width: 32px;
          height: 32px;
          line-height: ${variableStyles.lineHeight_33};
      }
  }

  .current-date {
      position: relative;
      .current-date-round {
          position: absolute;
          margin-left: auto;
          margin-right: auto;
          top: 27px;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 50%;
          height: 5px;
          width: 5px;
          background: ${variableStyles.secondaryLimeBasic};
      }
  }

  .ant-picker-cell .ant-picker-cell-selected {
      .ant-picker-cell-inner {
          background: ${variableStyles.secondaryLimeBasic} !important;
          border-radius: 4px !important;
      }

      &:hover {
          .ant-picker-cell-inner {
              background: ${variableStyles.secondaryLimeBasic} !important;
          }
      }
  }

  .ant-picker-range-wrapper {
      .ant-picker-range-arrow {
          display: none;
      }
  }

  .ant-picker-panel-container {
      background: ${variableStyles.primaryWhiteBasic};
      border: 1px solid ${variableStyles.NeutralsSkyLight};
      box-sizing: border-box;
      box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.1);
      border-radius: 4px;

      .ant-picker-panel {
          .ant-picker-date-panel {
              border-right: 1px solid ${variableStyles.NeutralsSkyLight};
              .ant-picker-header {
                  border-bottom: none;
                  .ant-picker-header-view {
                      .ant-picker-month-btn {
                          color: ${variableStyles.primaryBlueBasic};
                          font-style: normal;
                          font-weight: ${variableStyles.fwBold};
                          font-size: ${variableStyles.fontSize_14};
                      }

                      .ant-picker-year-btn {
                          color: ${variableStyles.primaryBlueBasic};
                          font-style: normal;
                          font-weight: ${variableStyles.fwBold};
                          font-size: ${variableStyles.fontSize_14};
                      }
                  }

                  .ant-picker-header-super-prev-btn {
                      .ant-picker-super-prev-icon {
                          &:before {
                              color: ${
                                variableStyles.NeutralsInkLighter
                              } !important;
                          }

                          &:after {
                              color: ${
                                variableStyles.NeutralsInkLighter
                              } !important;
                          }
                      }
                  }

                  .ant-picker-header-super-next-btn {
                      .ant-picker-super-next-icon {
                          &:before {
                              color: ${
                                variableStyles.NeutralsInkLighter
                              } !important;
                          }

                          &:after {
                              color: ${
                                variableStyles.NeutralsInkLighter
                              } !important;
                          }
                      }
                  }

                  .ant-picker-header-prev-btn {
                      .ant-picker-prev-icon {
                          &:before {
                              color: ${
                                variableStyles.NeutralsInkLighter
                              } !important;
                          }
                      }
                  }

                  .ant-picker-header-next-btn {
                      .ant-picker-next-icon {
                          &:before {
                              color: ${
                                variableStyles.NeutralsInkLighter
                              } !important;
                          }
                      }
                  }
              }
          }
      }
  }

  .ant-picker-cell-in-view.ant-picker-cell-selected .ant-picker-cell-inner {
    background: ${variableStyles.secondaryLimeBasic} !important;   
  }
  
  ${"" /* .custom-ant-dropdown-match-datepicker {} */}
`;
