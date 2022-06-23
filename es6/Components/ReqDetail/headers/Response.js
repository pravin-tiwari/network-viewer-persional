import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Headers.styles.scss.js';

var Response = function Response(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['header-detail']
  }, data.headers.response.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React.createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles['info-row']
    }, /*#__PURE__*/React.createElement("span", {
      className: Styles['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React.createElement("span", {
      className: Styles['info-value']
    }, value));
  }));
};

Response.propTypes = {
  data: PropTypes.object
};
Response.defaultProps = {
  data: null
};

export default Response;
//# sourceMappingURL=Response.js.map
