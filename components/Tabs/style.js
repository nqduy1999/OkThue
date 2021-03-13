import styled from 'styled-components';
import { Tabs } from 'antd';
import variableStyles from '../../styles/variable-styles';
import { images } from '../../variables/images';

const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)`
  flex: 1;
  max-width: 576px;
  display: flex;
  .ant-tabs-nav {
    height: 56px;
    margin-top: ${props => (props.marginBottom ? props.marginBottom : '0px')};
    .ant-tabs-nav-wrap {
      display: flex;
      position: fixed;
      justify-content: center;
      width: 100%;
      background: ${variableStyles.primaryWhite};
      box-shadow: 0px 4px 4px rgba(180, 184, 188, 0.12);
      border-radius: ${props =>
        props?.borderRadius ? props.borderRadius : '0px 0px 16px 16px'};
      max-width: 576px;
      padding-top: ${props => props.isSearch && '50px'};
    }

    @media screen and (max-width: 576px) {
      .ant-tabs-nav-wrap {
        width: 100%;
      }
    }

    @media screen and (max-width: 576px) {
      .ant-tabs-nav-wrap {
      }
    }

    @media screen and (max-width: 576px) {
      .ant-tabs-nav-wrap {
      }
    }

    .ant-tabs-nav-list {
      background-image: url(${images.banner_bxh});
      background-size: cover;
      transform: translate(0px, 0px) !important;
    }

    .ant-tabs-tab-active {
      .ant-tabs-tab-btn {
        color: ${variableStyles.backGroudColorNewInfo2} !important;
      }
    }
    .ant-tabs-tab {
      height: 40px;
      padding: 26px 50px;
      text-align: center;
      margin: 0 16px;
      span {
        color: #6a6c74;
        font-size: ${variableStyles.fontSize_16};
        font-weight: ${variableStyles.fwBold};
      }
      &:hover {
        color: ${variableStyles.backGroudColorNewInfo2};
      }
      &:focus {
        color: ${variableStyles.primaryDark};
      }
      .ant-tabs-tab-btn {
        .tab-title {
          font-weight: ${variableStyles.fwBold};
        }
      }
    }

    .ant-tabs-ink-bar-animated {
      border-radius: 16px;
    }

    .ant-tabs-tab-disabled {
      color: ${variableStyles.inkLightest} !important;
    }

    .ant-tabs-ink-bar {
      background: ${variableStyles.primaryBasic};
      width: 100%;
    }
  }

  .ant-tabs-content-holder > .ant-tabs-content {
    height: 100%;
  }
`;

const StyledTabPane = styled(TabPane)`
  margin-top: ${props => props.isSearch && '50px'};
  background: #f4f5f6 !important;
`;

export { StyledTabs, StyledTabPane };
