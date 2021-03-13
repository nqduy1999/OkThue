import styled from 'styled-components';
import { Input } from 'antd';
import { styledCommonInput } from '../style-common';
import variableStyles from '../../../styles/variable-styles';

const { TextArea } = Input;

const StyledTextArea = styled(styledCommonInput(TextArea))`
  padding-right: 24px;
  .ant-input-textarea-clear-icon {
    font-size: 16px;
    color: ${variableStyles.inkLighter};
  }
`;

const StyledTitleLimit = styled.div`
  text-align: right;
  position: absolute;
  right: 0;
  label {
    color: ${variableStyles.inkLighter};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`;

export { StyledTextArea, StyledTitleLimit };
