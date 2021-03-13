import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { StyledDatePicker, StyledDatePickerDropdown } from './styled';

function DatePicker(props) {
  const { label, value, disabled, readOnly, ...other } = props;
  const format = 'DD/MM/YYYY';

  return (
    <>
      <StyledDatePickerDropdown />
      {label && <label className="caption-1 subdued">{label}</label>}
      <StyledDatePicker
        {...other}
        disabled={disabled || readOnly}
        showToday={false}
        suffixIcon={
          <i
            className="icon icon-contact-calendar"
            style={{ color: '#6B778C', fontSize: '16px' }}
          />
        }
        style={{ width: '100%' }}
        value={value ? moment(value) : null}
        format={format}
        dropdownClassName="custom-ant-dropdown-match-datepicker"
        // getPopupContainer={trigger => trigger.parentNode}
        dateRender={current => {
          if (
            current.format('DD/MM/YYYY') ===
            moment(new Date()).format('DD/MM/YYYY')
          ) {
            return (
              <div className="ant-calendar-date current-date">
                <span className="current-date-round" />
                {current.date()}
              </div>
            );
          }
          return (
            <div className="ant-calendar-date">
              <div className="">{current.date()}</div>
            </div>
          );
        }}
      />
    </>
  );
}
DatePicker.propTypes = {
  placeholder: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  showToday: PropTypes.bool,
  size: PropTypes.string
};

DatePicker.defaultProps = {
  size: 'large',
  placeholder: 'Chọn ngày'
};

export default DatePicker;
