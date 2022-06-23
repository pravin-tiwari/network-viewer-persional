import React from 'react';
import { stringify } from 'qs';
import Styles from './InputHAR.styles.scss.js';
import URLInput from './URLInput.js';

var SAMPLE_HAR_URL = 'https://raw.githubusercontent.com/saucelabs/network-viewer/main/examples/src/data/network.har';

var InputHAR = function InputHAR() {
  var handleURLSubmit = function handleURLSubmit(fetchInfo) {
    var _document$location = document.location,
        origin = _document$location.origin,
        pathname = _document$location.pathname;
    var newURL = "".concat(origin).concat(pathname, "?").concat(stringify(fetchInfo));
    document.location.href = newURL;
  };

  return /*#__PURE__*/React.createElement("div", {
    className: Styles['input-har-container']
  }, /*#__PURE__*/React.createElement("h4", {
    className: Styles['input-har-text']
  }, "OR add HAR file URL in the below input box"), /*#__PURE__*/React.createElement(URLInput, {
    onSubmit: handleURLSubmit
  }), /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("span", null, "For Example use this har file"), /*#__PURE__*/React.createElement("a", {
    className: Styles['example-url'],
    href: SAMPLE_HAR_URL,
    rel: "noopener noreferrer",
    target: "_blank"
  }, SAMPLE_HAR_URL)));
};

export default InputHAR;
//# sourceMappingURL=InputHAR.js.map
