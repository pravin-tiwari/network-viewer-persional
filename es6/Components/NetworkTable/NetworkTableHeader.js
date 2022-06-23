import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import classNames from 'classnames/bind';
import { VIEWER_FIELDS } from '../../constants.js';
import Styles from './NetworkTableHeader.styles.scss.js';

var context = classNames.bind(Styles);

var NetworkTableHeader = function NetworkTableHeader() {
  return /*#__PURE__*/React.createElement("thead", {
    className: Styles.thead
  }, /*#__PURE__*/React.createElement("tr", null, Object.entries(VIEWER_FIELDS).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        datakey = _ref2[0],
        _ref2$ = _ref2[1],
        key = _ref2$.key,
        name = _ref2$.name;

    return /*#__PURE__*/React.createElement("th", {
      key: datakey,
      className: context('value-cell', key)
    }, name);
  }), /*#__PURE__*/React.createElement("th", {
    className: Styles['timeline-header']
  }, "Waterfall")));
};

export default NetworkTableHeader;
//# sourceMappingURL=NetworkTableHeader.js.map
