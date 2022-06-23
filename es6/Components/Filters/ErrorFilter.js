import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../Common/Checkbox.js';

var ErrorFilter = function ErrorFilter(_ref) {
  var isError = _ref.isError,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    onChange(!isError);
  };

  return /*#__PURE__*/React.createElement(Checkbox, {
    isChecked: isError,
    onChange: handleChange,
    title: "error"
  }, "Errors Only");
};

ErrorFilter.propTypes = {
  isError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

export default ErrorFilter;
//# sourceMappingURL=ErrorFilter.js.map
