import React from "react";
import PropTypes from "prop-types";
import { StyledTextArea, StyledTitleLimit } from "./style";
import { StyledRequired, StyledLabel } from "../style-common";

function CustomInputTextArea(props) {
  const { label, required, disabled, length, maxLength, ...other } = props;
  return (
    <div>
      {label && (
        <StyledLabel className="caption-1" disabled={disabled}>
          {label} {required && <StyledRequired> *</StyledRequired>}
        </StyledLabel>
      )}
      <StyledTextArea {...other} disabled={disabled} maxLength={maxLength} />
      {length !== 0 && (
        <StyledTitleLimit>
          <label>
            {length}/{maxLength}
          </label>
        </StyledTitleLimit>
      )}
    </div>
  );
}
CustomInputTextArea.defaultProps = {
  length: 0,
  maxLength: 1000,
};
CustomInputTextArea.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func,
  onResize: PropTypes.func,
  allowClear: PropTypes.bool,
  autoSize: PropTypes.any,
  label: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  required: PropTypes.bool,
  length: PropTypes.any,
  maxLength: PropTypes.number,
};

export default CustomInputTextArea;
