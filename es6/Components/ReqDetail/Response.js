import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Response.styles.scss.js';

var NoResponseText = function NoResponseText() {
  return /*#__PURE__*/React.createElement("h4", {
    className: Styles['no-response']
  }, "This request has no response data available.");
};

var Response = function Response(_ref) {
  var data = _ref.data;
  var content = data && data.body ? data.body : null;

  if (!content) {
    return /*#__PURE__*/React.createElement(NoResponseText, null);
  }

  return /*#__PURE__*/React.createElement("div", {
    className: Styles['response-content']
  }, /*#__PURE__*/React.createElement("pre", {
    className: Styles['log-body-colorless']
  }, content));
};

Response.propTypes = {
  data: PropTypes.object
};
Response.defaultProps = {
  data: null
};

export default Response;
//# sourceMappingURL=Response.js.map
