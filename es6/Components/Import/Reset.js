import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Common/Button.js';

var Reset = function Reset(_ref) {
  var className = _ref.className,
      onReset = _ref.onReset;

  var handleURLReset = function handleURLReset() {
    window.history.pushState({}, document.title, '/');
  };

  var handleReset = function handleReset() {
    handleURLReset();
    onReset();
  };

  return /*#__PURE__*/React.createElement(Button, {
    category: "default",
    className: className,
    material: true,
    onClick: handleReset,
    raised: true,
    size: "sm"
  }, "Reset");
};

Reset.propTypes = {
  className: PropTypes.string,
  onReset: PropTypes.func.isRequired
};
Reset.defaultProps = {
  className: ''
};

export default Reset;
//# sourceMappingURL=Reset.js.map
