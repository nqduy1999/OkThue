import styled from 'styled-components';
import variableStyles from '../../styles/variable-styles';

const borderHover = variableStyles.primaryBlueLight;
const borderFocus = variableStyles.primaryBlueLight;
const borderDisabled = variableStyles.skyBasic;

export const styledCommonInput = control => styled(control)`
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  color: ${variableStyles.inkBasic};
  border-radius: 12px;
  height: 32px;

  filter: drop-shadow(0px 8px 16px rgba(1, 22, 91, 0.06));
  border: none;

  .ant-input-prefix {
    font-size: ${variableStyles.fontSize_24};
    color: ${variableStyles.inkLighter};
  }

  &[class*='ant-input'][class*='-sm'] {
    height: 24px !important;
  }

  &[class*='ant-input'][class*='-lg'] {
    height: 48px !important;
    font-size: 14px;
  }

  &:hover {
    /* border: 1px solid ${borderHover}; */
  }

  &:disabled {
    /* border: 1px solid ${borderDisabled}; */
    background: ${variableStyles.NeutralsSkyLightest};
  }

  &:focus {
    box-shadow: none !important;
    /* border: 1px solid ${borderFocus}; */
  }

  &[class*='ant-input-'][class*='-focused'] {
    box-shadow: none !important;
    /* border: 1px solid ${borderFocus}; */
  }
`;

export const StyledLabel = styled.div`
  margin-bottom: 8px;
  color: ${variableStyles.inkLighter} !important;
`;

export const StyledRequired = styled.span`
  color: ${variableStyles.SematicErrorDark};
`;
