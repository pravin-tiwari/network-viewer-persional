import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LoaderContainer.styles.scss.js';

var LoaderContainer = function LoaderContainer(_ref) {
  var children = _ref.children,
      show = _ref.show,
      text = _ref.text;
  var spinnerColor = Styles.brandBlue;
  var uniqueId = "Gradient-".concat(Math.round(Math.random() * 10000000));
  return !show ? children : /*#__PURE__*/React.createElement("section", {
    className: Styles['loader-container']
  }, /*#__PURE__*/React.createElement("div", {
    className: Styles.spin
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: uniqueId
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: spinnerColor
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "75%",
    stopColor: spinnerColor,
    stopOpacity: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: spinnerColor,
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "transparent",
    r: "43",
    stroke: "url(#".concat(uniqueId, ")"),
    strokeWidth: "14"
  }))), text && /*#__PURE__*/React.createElement("p", {
    className: Styles.text
  }, text));
};

LoaderContainer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
LoaderContainer.defaultProps = {
  children: null,
  show: true,
  text: null
};

export default LoaderContainer;
//# sourceMappingURL=LoaderContainer.js.map
