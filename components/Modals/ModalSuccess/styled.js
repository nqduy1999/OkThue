import { Modal } from 'antd';
import styled from 'styled-components';
import variableStyles from '../../../styles/variable-styles';

const StyledModalSuccess = styled(Modal)`
  .ant-modal-content {
    border-radius: 16px;
  }
`;

const StyledBtnClose = styled.button`
  background: linear-gradient(
    342deg,
    #002395 -0.65%,
    #0953da 100.66%,
    #0c3bd6 100.67%
  );
  border-radius: 12px;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  width: 100%;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    opacity: 0.8;
  }
  &:focus {
    opacity: 0.8;
    outline: none;
  }
`;

const StyledModalContent = styled.div`
  text-align: center;
  .icon-success {
    margin-bottom: 12px;
  }
  .title-success {
    margin-bottom: 12px;
  }
  .result {
    margin-bottom: 20px;
    display: inline-grid;
    span {
      padding-bottom: 8px;
      font-weight: ${variableStyles.fwBold};
    }
    p {
      text-align: left;
    }
  }
`;

export { StyledModalSuccess, StyledBtnClose, StyledModalContent };
