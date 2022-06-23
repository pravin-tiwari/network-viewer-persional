import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Styles from './NetworkTableFooter.styles.scss.js';
import { formatSize, formatTime } from '../../utils.js';

var context = classNames.bind(Styles);

var NetworkTableFooter = function NetworkTableFooter(_ref) {
  var dataSummary = _ref.dataSummary,
      showAllInfo = _ref.showAllInfo;
  return /*#__PURE__*/React.createElement("div", {
    className: context('footer')
  }, showAllInfo ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "".concat(dataSummary.get('totalRequests'), " requests")), /*#__PURE__*/React.createElement("span", null, "".concat(formatSize(dataSummary.get('totalTransferredSize')), " transferred")), /*#__PURE__*/React.createElement("span", null, "".concat(formatSize(dataSummary.get('totalUncompressedSize')), " resources")), /*#__PURE__*/React.createElement("span", null, "Finished: ".concat(formatTime(dataSummary.get('finish')))), /*#__PURE__*/React.createElement("span", null, "DOMContentLoaded: ".concat(formatTime(dataSummary.get('timings').DOMContentLoaded))), /*#__PURE__*/React.createElement("span", null, "Load: ".concat(formatTime(dataSummary.get('timings').onLoad)))) : /*#__PURE__*/React.createElement("span", null, "".concat(dataSummary.get('totalRequests'), " requests")));
};

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes.object.isRequired,
  showAllInfo: PropTypes.bool
};
NetworkTableFooter.defaultProps = {
  showAllInfo: true
};

export default NetworkTableFooter;
//# sourceMappingURL=NetworkTableFooter.js.map
