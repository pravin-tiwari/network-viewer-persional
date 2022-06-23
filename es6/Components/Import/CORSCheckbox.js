import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Common/Checkbox.js';
import Styles from './CORSCheckbox.styles.scss.js';

var CORSCheckbox = function CORSCheckbox(_ref) {
  var isEnabled = _ref.isEnabled,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    onChange(!isEnabled);
  };

  return /*#__PURE__*/React.createElement(Checkbox, {
    containerClassName: Styles['cors-container'],
    isChecked: isEnabled,
    onChange: handleChange,
    title: "CORS Enable"
  }, "CORS");
};

CORSCheckbox.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CORSCheckbox;
//# sourceMappingURL=CORSCheckbox.js.map
