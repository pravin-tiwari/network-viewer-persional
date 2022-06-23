import React from 'react';
import PropTypes from 'prop-types';
import General from './headers/General.js';
import Response from './headers/Response.js';
import Request from './headers/Request.js';
import QueryString from './headers/QueryString.js';
import FormData from './headers/FormData.js';
import HeaderInfo from './headers/HeaderInfo.js';
import Styles from './Headers.styles.scss.js';
import RequestPayload from './headers/RequestPayload.js';

var Headers = function Headers(_ref) {
  var data = _ref.data;
  return !data ? null : /*#__PURE__*/React.createElement("section", {
    className: Styles['headers-container']
  }, /*#__PURE__*/React.createElement(HeaderInfo, {
    component: General,
    data: data,
    eventKey: "general"
  }), /*#__PURE__*/React.createElement(HeaderInfo, {
    component: Response,
    data: data,
    eventKey: "response"
  }), /*#__PURE__*/React.createElement(HeaderInfo, {
    component: Request,
    data: data,
    eventKey: "request"
  }), data.headers.queryString && data.headers.queryString.length ? /*#__PURE__*/React.createElement(HeaderInfo, {
    component: QueryString,
    data: data,
    eventKey: "queryString",
    isEncodeEnabled: true
  }) : null, data.headers.postData && data.headers.postData.params && /*#__PURE__*/React.createElement(HeaderInfo, {
    component: FormData,
    data: data,
    eventKey: "formData",
    isEncodeEnabled: true
  }), data.headers.postData && data.headers.postData.text && /*#__PURE__*/React.createElement(HeaderInfo, {
    component: RequestPayload,
    data: data,
    eventKey: "requestPayload",
    isParseEnabled: true
  }));
};

Headers.propTypes = {
  data: PropTypes.object
};
Headers.defaultProps = {
  data: null
};

export default Headers;
//# sourceMappingURL=Headers.js.map
