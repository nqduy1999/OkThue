import styled from 'styled-components';
import variableStyles from '../../styles/variable-styles';

const CheckInListStyle = styled.div`
  padding: 0px 16px 0px 16px;
  .check-in {
    font-size: ${variableStyles.fontSize_16};
    line-height: ${variableStyles.lineHeight_24};
    font-weight: 600;
    margin-bottom: 12px;
    display: block;
  }
  .item {
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 12px;
    padding: 12px;
    align-items: center;
    margin-bottom: 8px;
    .title {
      display: flex;
      flex: 1;
      margin-right: 12px;
      font-size: ${variableStyles.fontSize_14};
      line-height: ${variableStyles.lineHeight_20};
      font-weight: 500;
      color: ${variableStyles.inkBasic};
    }
    .ct-session {
      display: flex;
      flex-direction: column;
      border-radius: 12px;
      background-color: ${variableStyles.inkLightest};
      justify-content: center;
      align-items: center;
      padding: 4px 8px 4px 8px;
      .txt-check-in {
        font-size: ${variableStyles.fontSize_16};
        font-weight: 600;
        line-height: ${variableStyles.lineHeight_18};
        color: white;
      }
      .txt-session {
        font-size: ${variableStyles.fontSize_10};
        font-weight: 400;
        line-height: ${variableStyles.lineHeight_14};
        color: white;
      }
    }
  }
`;

export default CheckInListStyle;
