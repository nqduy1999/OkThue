import styled from 'styled-components';
import { Tag } from 'antd';
import variableStyles from '../../styles/variable-styles';

const StyledTags = styled(Tag)`
  display: inline-flex;
  align-items: center;
  font-size: ${variableStyles.fontSize_12};
  border-radius: 8px;
  padding: 6px;
  margin: 4px;
  min-width: ${props => props.width && '80px !important'};
  text-align: ${props => props.center && `center !important`};
  color: ${props => {
    switch (props.color) {
      case 'grey':
        return '#454F5B';
      case 'purple':
        return '#5656D8';
      case 'green':
        return '#50B83C';
      case 'orange':
        return '#FFAB00';
      case 'blue':
        return '#002395';
      case 'red':
        return '#DE3618';
      case 'teal':
        return '#009FDA';
      case 'simple':
        return '#414552';
      default:
        return '';
    }
  }};
  border-color: ${props => {
    switch (props.color) {
      case 'grey':
        return '#C4CDD5';
      case 'purple':
        return '#9696FA';
      case 'green':
        return '#93D982';
      case 'orange':
        return '#FFD659';
      case 'blue':
        return '#5584E5';
      case 'red':
        return '#FF9980';
      case 'teal':
        return '#8AD6E6';
      case 'simple':
        return 'transparent';
      default:
        return '';
    }
  }};
  background: ${props => {
    switch (props.color) {
      case 'grey':
        return '#F4F6F8 !important';
      case 'purple':
        return '#E0E3FF';
      case 'green':
        return '#EBFAE7';
      case 'orange':
        return '#FFFAE5';
      case 'blue':
        return '#E3EDFF';
      case 'red':
        return '#FBEAE5';
      case 'teal':
        return '#E0FAFF !important';
      case 'simple':
        return '#EFF0F3 !important';
      default:
        return '';
    }
  }};

  /* Color Icon */
  .anticon-close {
    color: ${props => props.color === 'grey' && '#637381'};
    color: ${props => props.color === 'purple' && '#5656D8'};
    color: ${props => props.color === 'green' && '#50B83C'};
    color: ${props => props.color === 'orange' && '#FFAB00'};
    color: ${props => props.color === 'blue' && '#002395'};
    color: ${props => props.color === 'red' && '#DE3618'};
    color: ${props => props.color === 'teal' && '#009FDA'};
    :hover {
      color: ${props => props.color === 'grey' && '#637381'};
      color: ${props => props.color === 'purple' && '#5656D8'};
      color: ${props => props.color === 'green' && '#50B83C'};
      color: ${props => props.color === 'orange' && '#FFAB00'};
      color: ${props => props.color === 'blue' && '#002395'};
      color: ${props => props.color === 'red' && '#DE3618'};
      color: ${props => props.color === 'teal' && '#009FDA'};
    }
  }
`;
export { StyledTags };
