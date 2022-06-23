import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Styles from './URLInput.styles.scss.js';
import Button from '../Common/Button.js';
import CORSCheckbox from './CORSCheckbox.js';

var URLInput = function URLInput(_ref) {
  var onSubmit = _ref.onSubmit;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setURL = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isCORSEnabled = _useState4[0],
      setCORS = _useState4[1];

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    setURL(target.value);
  };

  var handleSubmit = function handleSubmit() {
    onSubmit({
      file: url,
      isCORSEnabled: isCORSEnabled
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: Styles['url-input-container']
  }, /*#__PURE__*/React.createElement(CORSCheckbox, {
    isEnabled: isCORSEnabled,
    onChange: setCORS
  }), /*#__PURE__*/React.createElement("input", {
    className: Styles.input,
    onChange: handleInputChange,
    placeholder: "HAR file URL",
    type: "text",
    value: url
  }), /*#__PURE__*/React.createElement(Button, {
    category: "default",
    className: Styles['postpend-button'],
    material: true,
    onClick: handleSubmit,
    raised: true,
    size: "sm"
  }, "GO"));
};

URLInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default URLInput;
//# sourceMappingURL=URLInput.js.map
