import styled from 'styled-components';
import variableStyles from '../../styles/variable-styles';

const HeaderTabsStyled = styled.div`
  display: flex;
  margin-bottom: 10px;
  width: 100%;
  .header-item-1 {
    flex: 1;
    background: ${variableStyles.primaryWhiteBasic};
    border-radius: 16px;
    padding: 13px;
    margin-right: 5px;
    .text-total {
      font-size: ${variableStyles.fontSize_14};
      font-weight: ${variableStyles.fwSemiBold};
      color: ${variableStyles.inkBasic};
      justify-content: left;
    }
    span {
      align-items: center;
      justify-content: left;
      display: flex;
      font-size: ${variableStyles.fontSize_16};
      font-weight: ${variableStyles.fwBold};
      color: ${variableStyles.primaryBlueLight};
      .text {
        font-size: ${variableStyles.fontSize_14};
        color: ${variableStyles.inkBasic};
      }
    }
  }
  .header-item-2 {
    flex: 1;
    margin-left: 5px;
    background: ${variableStyles.primaryWhiteBasic};
    border-radius: 16px;
    padding: 13px;
    .text-total {
      font-size: ${variableStyles.fontSize_14};
      font-weight: ${variableStyles.fwSemiBold};
      color: ${variableStyles.inkBasic};
      justify-content: left;
    }
    span {
      align-items: center;
      justify-content: left;
      display: flex;
      font-size: ${variableStyles.fontSize_16};
      font-weight: ${variableStyles.fwBold};
      color: #fd6f29;
      .text {
        font-size: ${variableStyles.fontSize_14};
        color: ${variableStyles.inkBasic};
      }
    }
  }
`;

export { HeaderTabsStyled };
