import styled from 'styled-components';
import { Button } from 'antd';
import variableStyles from '../../styles/variable-styles';

const StyledButton = styled(Button)`
  &.nonanimating-btn {
    &[ant-click-animating-without-extra-node]:after {
      animation: 0s;
    }
  }
  &.custom-ant-button {
    font-size: ${props => (props.size === 'small' ? '12px' : '14px')};
    font-weight: 600;
    width: ${props => (props.width ? props.width : 'none')};
    padding: 0 12px;
    box-shadow: none;
    text-shadow: none;
    padding-top: ${props => props.size === 'small' && '1px'};
    border-radius: 12px;
    height: ${props => (props.height ? props.height : 'none')};
    color: ${props => {
      switch (props.type) {
        case 'primary':
          return variableStyles.primaryWhiteBasic;
        case 'outline':
          return variableStyles.NeutralsInkBasic;
        case 'light':
          return variableStyles.NeutralsInkDark;
        case 'action':
          return variableStyles.inkLight;
        case 'link':
          return variableStyles.secondaryTealBasic;
        case 'plain':
          return variableStyles.primaryBasic;
        default:
          return `transparent`;
      }
    }};
    border-color: ${props => {
      switch (props.type) {
        case 'primary':
          /* return variableStyles.secondaryLimeBasic; */
          return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%)';
        case 'outline':
          return variableStyles.NeutralsInkDark;
        case 'light':
          return variableStyles.NeutralsSkyLight;
        case 'action':
          return variableStyles.sky;
        default:
          return `transparent`;
      }
    }};
    background: ${props => {
      switch (props.type) {
        case 'primary':
          /* return variableStyles.secondaryLimeBasic; */
          return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%);';
        case 'outline':
          return variableStyles.primaryWhiteBasic;
        case 'light':
          return variableStyles.NeutralsSkyLight;
        case 'action':
          return variableStyles.primaryWhiteBasic;
        default:
          return `transparent`;
      }
    }};

    &:hover {
      span {
        text-decoration: ${props => {
          switch (props.type) {
            case 'link':
              return 'underline';
          }
        }};
      }
      color: ${props => {
        switch (props.type) {
          case 'primary':
            return variableStyles.primaryWhiteBasic;
          case 'outline':
            return variableStyles.secondaryTealBasic;
          case 'light':
            return variableStyles.NeutralsInkDark;
          case 'action':
            return variableStyles.primaryLight;
          case 'link':
            return variableStyles.secondaryTealBasic;
          case 'plain':
            return variableStyles.primaryLight;
          case 'blank':
            return variableStyles.primaryWhiteBasic;
          default:
            return `transparent`;
        }
      }};
      border-color: ${props => {
        switch (props.type) {
          case 'primary':
            /* return variableStyles.secondaryLimeLight; */
            return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%)';
          case 'outline':
            return variableStyles.secondaryTealLight;
          case 'light':
            return variableStyles.NeutralsSkyBasic;
          case 'action':
            return variableStyles.primaryLight;
          default:
            return `transparent`;
        }
      }};
      background: ${props => {
        switch (props.type) {
          case 'primary':
            /* return variableStyles.secondaryLimeLight; */
            return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%)';
          case 'outline':
            return variableStyles.primaryWhiteBasic;
          case 'light':
            return variableStyles.NeutralsSkyBasic;
          case 'action':
            return variableStyles.primaryWhiteBasic;
          default:
            return variableStyles.primaryLighter;
        }
      }};
    }

    &:focus {
      span {
        text-decoration: ${props => {
          switch (props.type) {
            default:
              return 'none';
          }
        }};
      }
      color: ${props => {
        switch (props.type) {
          case 'primary':
            return variableStyles.primaryWhiteBasic;
          case 'outline':
            return variableStyles.secondaryTealBasic;
          case 'light':
            return variableStyles.NeutralsInkDark;
          case 'link':
            return `${variableStyles.secondaryTealDark1} !important`;
          default:
            return variableStyles.secondaryTealDark;
        }
      }};
      border-color: ${props => {
        switch (props.type) {
          case 'plain':
            return `transparent`;
          case 'link':
            return `transparent`;
          case 'outline':
            return variableStyles.secondaryTealBasic;
          case 'light':
            return variableStyles.NeutralsSkyDark;
          default:
            /* return variableStyles.secondaryLimeDark; */
            return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%)';
        }
      }};
      background: ${props => {
        switch (props.type) {
          case 'primary':
            /* return variableStyles.secondaryLimeDark; */
            return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%)';
          case 'outline':
            return variableStyles.primaryWhiteBasic;
          case 'light':
            return variableStyles.NeutralsSkyDark;
          default:
            return variableStyles.primaryLighter;
        }
      }};
    }

    &:disabled {
      cursor: not-allowed !important;
      span {
        text-decoration: ${props => {
          switch (props.type) {
            default:
              return 'none';
          }
        }};
      }
      color: ${variableStyles.NeutralsInkLighter} !important;
      border-color: ${props => {
        switch (props.type) {
          case 'primary':
            /* return `${variableStyles.NeutralsSkyLight} !important`; */
            return 'linear-gradient(342deg, #002395 -0.65%, #0953DA 100.66%, #0C3BD6 100.67%) !important';
          case 'outline':
            return `${variableStyles.skyLight} !important`;
          case 'light':
            return `${variableStyles.NeutralsSkyLight} !important`;
          case 'action':
            return `${variableStyles.skyLight} !important`;
          default:
            return `transparent !important`;
        }
      }};
      background: ${props => {
        switch (props.type) {
          case 'plain':
            return `transparent !important`;
          case 'link':
            return `transparent !important`;
          default:
            return `${variableStyles.NeutralsSkyLight} !important`;
        }
      }};
    }

    &.ant-btn-loading {
      .ant-btn-loading-icon {
        .anticon.anticon-loading {
          padding-bottom: 2px;
          vertical-align: middle;
        }
      }
    }

    &.ant-btn-icon-only {
      position: relative;
      padding: 0;
      border-radius: 0;
      .icon {
        position: absolute;
        margin: auto;
        margin-top: 1px;
        transform: translate(-50%, -50%);
        font-size: 15px;
        font-size: ${props => props.size === 'small' && '12px'};
        font-size: ${props => props.size === 'large' && '18px'};
      }
    }

    &.ant-btn-icon-only.ant-btn-loading {
      .ant-btn-loading-icon {
        position: absolute;
        font-size: ${props => props.size === 'small' && '12px'};
        left: 1px;
        left: ${props =>
          (props.size === 'large' || props.size === 'small') && '0'};
        right: 0;
        bottom: 3px;
        bottom: ${props => props.size === 'large' && '5px'};
        bottom: ${props => props.size === 'small' && '1px'};
      }
    }

    .icon {
      display: inline-flex;
      vertical-align: middle;
      margin-right: 5px;
      align-items: center;
      max-height: 20px;
      font-size: ${props => {
        switch (props.size) {
          case 'small':
            return '12px';
          case 'large':
            return '20px';
          default:
            return '15px';
        }
      }};
    }
  }
`;

export default StyledButton;
