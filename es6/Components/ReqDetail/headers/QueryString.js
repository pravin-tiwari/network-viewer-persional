import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Headers.styles.scss.js';

var QueryString = function QueryString(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['header-detail']
  }, data.headers.queryString.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles['info-row']
    }, /*#__PURE__*/React.createElement("span", {
      className: Styles['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React.createElement("span", {
      className: Styles['info-value']
    }, isPayloadTransformed ? decodeURIComponent(value) : value));
  }));
};

QueryString.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired
};
QueryString.defaultProps = {
  data: null
};

export default QueryString;
//# sourceMappingURL=QueryString.js.map
