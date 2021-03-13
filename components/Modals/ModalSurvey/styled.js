import { Modal } from 'antd';
import styled from 'styled-components';
import variableStyles from '../../../styles/variable-styles';

const StyledModalSurvey = styled(Modal)`
  .ant-modal-content {
    border-radius: 16px;
    box-shadow: unset;
    overflow: hidden;
    max-width: 576px;
    .ant-modal-body {
      padding: 0;
    }
  }
`;

const StyledModalContent = styled.div`
  .modal-survey {
    font-size: 14px;
    font-weight: 500;
    color: ${variableStyles?.inkBasic};
    .header-modal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 48px;
      padding: 0 16px;
      background: #f2f3f4;
    }
    .content-modal-survey {
      padding: 6px 20px 32px 20px;
      margin: auto;
      font-size: 14px;
      .icon-warning-survey {
        display: flex;
        justify-content: center;
        padding: 24px;
      }
      .info-notification {
        text-align: center;
        .content-note {
          font-weight: 400;
          color: ${variableStyles?.inkLight};
          .point-survey {
            color: ${variableStyles.primaryBlueLight};
          }
        }
      }
    }
  }
`;

export { StyledModalSurvey, StyledModalContent };
