import { slicedToArray as _slicedToArray } from '../../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from '../Headers.styles.scss.js';
import HeaderTitle from './HeaderTitle.js';

var context = classNames.bind(Styles);

var HeaderInfo = function HeaderInfo(_ref) {
  var eventKey = _ref.eventKey,
      data = _ref.data,
      component = _ref.component,
      isEncodeEnabled = _ref.isEncodeEnabled,
      isParseEnabled = _ref.isParseEnabled;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      updateVisibleStates = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isPayloadTransformed = _useState4[0],
      updateTransform = _useState4[1];

  var handlePayloadTransform = function handlePayloadTransform() {
    return updateTransform(!isPayloadTransformed);
  };

  var ChildComponent = function ChildComponent() {
    return component({
      data: data,
      isPayloadTransformed: isPayloadTransformed,
      onChangeEncode: handlePayloadTransform
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: context('header-info', {
      active: isVisible
    })
  }, /*#__PURE__*/React.createElement(HeaderTitle, {
    eventKey: eventKey,
    isEncodeEnabled: isEncodeEnabled,
    isParseEnabled: isParseEnabled,
    isPayloadTransformed: isPayloadTransformed,
    onClick: function onClick() {
      return updateVisibleStates(!isVisible);
    },
    onPayloadTransform: handlePayloadTransform
  }), isVisible && /*#__PURE__*/React.createElement(ChildComponent, null));
};

HeaderInfo.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.object,
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isParseEnabled: PropTypes.bool
};
HeaderInfo.defaultProps = {
  data: null,
  isEncodeEnabled: false,
  isParseEnabled: false
};

export default HeaderInfo;
//# sourceMappingURL=HeaderInfo.js.map
