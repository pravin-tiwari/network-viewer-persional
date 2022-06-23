import React from 'react';
import PropTypes from 'prop-types';
import { HEADERS_TITLES, PAYLOAD_CAPTIONS } from '../../../constants.js';
import IconCaretUp from '../../../icons/IconCaretUp.js';
import Styles from '../Headers.styles.scss.js';

var HeaderTitle = function HeaderTitle(_ref) {
  var _onClick = _ref.onClick,
      eventKey = _ref.eventKey,
      isEncodeEnabled = _ref.isEncodeEnabled,
      onPayloadTransform = _ref.onPayloadTransform,
      isPayloadTransformed = _ref.isPayloadTransformed,
      isParseEnabled = _ref.isParseEnabled;
  var payloadStatus = PAYLOAD_CAPTIONS[isParseEnabled ? 'parse' : 'encode'][isPayloadTransformed];
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['header-title']
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return _onClick(HEADERS_TITLES[eventKey].key);
    },
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React.createElement(IconCaretUp, {
    className: Styles['caret-icon']
  }), HEADERS_TITLES[eventKey].name), (isEncodeEnabled || isParseEnabled) && /*#__PURE__*/React.createElement("span", {
    className: Styles['encode-url'],
    onClick: onPayloadTransform,
    role: "button",
    tabIndex: 0
  }, "view ".concat(payloadStatus)));
};

HeaderTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isParseEnabled: PropTypes.bool,
  isPayloadTransformed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onPayloadTransform: PropTypes.func.isRequired
};
HeaderTitle.defaultProps = {
  isEncodeEnabled: false,
  isParseEnabled: false,
  isPayloadTransformed: true
};

export default HeaderTitle;
//# sourceMappingURL=HeaderTitle.js.map
