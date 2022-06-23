import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Headers.styles.scss.js';

var Request = function Request(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['header-detail']
  }, data.headers.request.map(function (_ref2, index) {
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

Request.propTypes = {
  data: PropTypes.object
};
Request.defaultProps = {
  data: null
};

export default Request;
//# sourceMappingURL=Request.js.map
