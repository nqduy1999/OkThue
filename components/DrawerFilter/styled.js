import styled from 'styled-components';
import variableStyles from '../../styles/variable-styles';
import { Drawer } from 'antd';
const DrawerStyled = styled.div`
  .news-Drawer {
    .ant-drawer-header {
      background: #f5f6f7;
      box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.13);
      .ant-drawer-close {
        right: unset;
        top: -5px;
        left: 0;
      }
    }
    .news-title {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      text-align: center;
      color: #172b4d;
    }
    .ant-drawer-footer {
      padding: 16px;
      background: #ffffff;
      .news-Drawer__footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .btn-reset,
        .btn-search {
          min-width: 154px;
        }
      }
    }
    .news-collapse {
      .date-picker {
        margin-bottom: 4px;
      }
      .collapse-arrow {
        right: 31px;
        position: absolute;
        font-size: 20px;
        color: #6b778c;
        top: 16px;
      }
      .ant-collapse-item {
        background: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.03);
        border-bottom: 0;
        .ant-collapse-header {
          font-weight: 600;
          font-size: 14px;
          line-height: 20px !important;
          color: #42526e !important;
          padding: 16px;
          i {
            width: 20px;
            height: 20px;
          }
        }
        .ant-collapse-content {
          border-top: 0;
          background: #f5f6f7;
          padding: 22px 32px;
          .ant-collapse-content-box {
            padding: 0;
          }
        }
      }
      .option-fields {
        margin-left: -6px;
        .option-field {
          margin: 6px;
          padding: 10px 12px;
          background: #e6e8eb;
          border-radius: 12px;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 20px;
          color: #42526e;
          display: inline-block;

          &.option-field__active {
            position: relative;
            padding-left: 36px;
            .icon {
              margin-right: 8px;
              font-size: 18px;
              left: 12px;
              position: absolute;
              cursor: pointer;
              width: 20px;
              height: 20px;
            }
            background: #45a4e6;
            color: #ffffff;
          }
        }
      }
      .ant-collapse-content-box {
        .radio-group {
          &:last-child {
            margin-bottom: 0;
          }
          margin-bottom: 26px;
        }
      }
    }
  }
`;
export const StyledDrawerFilter = styled(Drawer)`
  display: flex;
  justify-content: center;
  .ant-drawer-mask {
    max-width: 576px;
    left: unset;
  }
  .ant-drawer-content-wrapper {
    max-width: 576px;
    right: unset;
    width: 100% !important;
  }
  .ant-drawer-header {
    .ant-drawer-title {
      display: flex;
      .filter-title {
        position: absolute;
        left: 50%;
        font-size: ${variableStyles.fontSize_20};
        font-weight: ${variableStyles.fwBold};
        color: ${variableStyles.inkBasic};
      }
      img {
        cursor: pointer;
      }
    }
  }
  .dash {
    height: 1px;
    background-color: #eff0f3;
  }
  .ant-drawer-body {
    padding: 0px 16px 24px 16px !important;
    .ant-collapse-item {
      margin-bottom: 8px;
      .ant-collapse-header {
        padding-left: 0 !important;
        padding: 0 !important;
        align-items: flex-end;
        display: flex;
        i {
          position: absolute;
          right: 0;
          display: flex;
          font-size: ${variableStyles.fontSize_24};
        }
        .title-filter {
          margin-top: 23px;
          color: ${variableStyles.inkLight};
          font-size: ${variableStyles.fontSize_16};
          line-height: ${variableStyles.lineHeight_24};
          font-weight: ${variableStyles.fwBold};
        }
        .ant-checkbox-group {
          .type-session {
            padding-bottom: 20px;
          }
        }
      }
      .ant-collapse-content-box {
        padding: 0px;
        margin-top: 26px;
        padding-left: 11px;
        .ant-col {
          span {
            line-height: 24px;
            font-size: 14px;
            font-weight: 400;
            color: #414552;
          }
          margin-bottom: 20px;
          .ant-checkbox + span {
            padding-left: 9px;
          }
        }
        .filter-tag {
          .ant-tag-checkable {
            background: ${variableStyles.skyLighter};
            border-radius: 12px;
            padding: 10px 12px;
            font-size: ${variableStyles.fontSize_14};
            color: ${variableStyles.inkBasic};
            margin: 0px 10px 10px 0px;
          }
          .ant-tag-checkable-checked {
            color: ${variableStyles.primaryWhiteBasic};
            img {
              width: 15px;
              height: 18px;
              margin-right: 4px;
            }
            background-color: #3d63dc;
          }
        }
      }
    }
  }
  .news-Drawer__footer {
    display: flex;
    width: 100%;
    .button-footer {
      width: 50%;
      padding-left: 8px;
      padding-right: 8px;
      button {
        width: 100%;
      }
    }
  }
  .ant-drawer-footer {
    padding: 8px;
  }
`;

const StyledTypeSession = styled.div`
  margin-bottom: 20px;
  :last-child {
    margin-bottom: 0px;
  }
`;

export { DrawerStyled, StyledTypeSession };
