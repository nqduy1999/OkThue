import React, { useState } from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
import PropTypes from 'prop-types';
// antd component
import { Select, Tag } from 'antd';
// styled
import {
  StyledSelect,
  StyledDropdownOverlay,
  ErrorStyled,
  FlexContainderStyled
} from './styled';
// components
import CustomAvatar from '../Avatar';
// import Tags from "../Tags";
const { Option } = Select;

// basic type: withSingle || withStatus || withAvatar || withThumbnail

function CustomSelect(props) {
  // Props
  const {
    data,
    readOnly,
    error,
    disabled,
    type,
    label,
    className,
    ...other
  } = props;
  // States
  const [isOpen, setIsOpen] = useState(false);

  const renderItem = () => {
    switch (type) {
      case 'withStatus':
        return data.map(item => (
          <Option key={item.value} value={item.value} label={item.label}>
            <Tag color={item.color}>{item.label}</Tag>
          </Option>
        ));
      case 'withAvatar':
        return data.map(item => (
          <Option key={item.value} value={item.value} label={item.label}>
            <FlexContainderStyled>
              <CustomAvatar
                size="small"
                shape="circle"
                style={{ marginRight: 8 }}
                src="https://www.meme-arsenal.com/memes/6b998f09ba56c4d2db0aa4b1358d6fae.jpg"
              >
                {item.label[0]}
              </CustomAvatar>
              <span>{item.label}</span>
            </FlexContainderStyled>
          </Option>
        ));
      case 'withThumbnail':
        return data.map(item => (
          <Option
            key={item.key ? item.key : item.value}
            value={item.value}
            label={item.label}
          >
            <FlexContainderStyled>
              <CustomAvatar
                size="small"
                shape="square"
                style={{ marginRight: 8 }}
                src="https://www.meme-arsenal.com/memes/6b998f09ba56c4d2db0aa4b1358d6fae.jpg"
              >
                {item.label[0]}
              </CustomAvatar>
              <span>{item.label}</span>
            </FlexContainderStyled>
          </Option>
        ));

      default:
        return data.map(item => (
          <Option key={item.value} value={item.value} label={item.label}>
            {item.label}
          </Option>
        ));
    }
  };

  const selectClasses = classNames({
    'custom-ant-select': true,
    'custom-ant-select-error': error,
    [className]: className
  });

  return (
    <>
      <StyledDropdownOverlay />
      {label && <label className="caption-1 subdued">{label}</label>}
      <StyledSelect
        {...other}
        className={selectClasses}
        disabled={readOnly || disabled}
        optionFilterProp="label"
        dropdownClassName="custom-ant-dropdown-match-select"
        onDropdownVisibleChange={open => setIsOpen(open)}
        // getPopupContainer={trigger => trigger.parentNode}
        suffixIcon={
          isOpen ? (
            <i className="icon icon-expand-less" />
          ) : (
            <i className="icon icon-expand-more" />
          )
        }
        // clearIcon={<i className="icon icon-clear" />}
      >
        {renderItem()}
      </StyledSelect>
      {error && <ErrorStyled className="error-caption2">{error}</ErrorStyled>}
    </>
  );
}

CustomSelect.propTypes = {
  size: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  data: PropTypes.array,
  readOnly: PropTypes.bool,
  error: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onSearch: PropTypes.func,
  required: PropTypes.bool
};

CustomSelect.defaultProps = {
  size: 'large',
  placeholder: 'Select an option',
  data: [],
  readOnly: false,
  error: '',
  type: 'withBorder'
};

export default CustomSelect;
