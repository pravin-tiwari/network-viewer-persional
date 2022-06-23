import React from 'react';
import PropTypes from 'prop-types';
import Styles from './ErrorMessage.styles.scss.js';

var ErrorMessage = function ErrorMessage(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['error-container']
  }, title && /*#__PURE__*/React.createElement("h4", {
    className: Styles.title
  }, title), description && /*#__PURE__*/React.createElement("p", null, description));
};

ErrorMessage.propTypes = {
  description: PropTypes.any,
  title: PropTypes.any
};
ErrorMessage.defaultProps = {
  description: null,
  title: null
};

export default ErrorMessage;
//# sourceMappingURL=ErrorMessage.js.map
