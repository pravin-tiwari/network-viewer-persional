import { slicedToArray as _slicedToArray } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../Headers.styles.scss.js';
import { GENERAL_HEADERS } from '../../../constants.js';

var General = function General(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['header-detail']
  }, Object.entries(GENERAL_HEADERS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        dataKey = _ref3[0],
        _ref3$ = _ref3[1],
        key = _ref3$.key,
        name = _ref3$.name;

    return /*#__PURE__*/React.createElement("p", {
      key: dataKey,
      className: Styles['info-row']
    }, /*#__PURE__*/React.createElement("span", {
      className: Styles['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React.createElement("span", {
      className: Styles['info-value']
    }, key === 'status' && data.error ? data.error : data[key]));
  }));
};

General.propTypes = {
  data: PropTypes.object
};
General.defaultProps = {
  data: null
};

export default General;
//# sourceMappingURL=General.js.map
