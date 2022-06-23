import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popover from 'react-popover';
import { formatValue } from '../../utils.js';
import Styles from './NetworkTableHeader.styles.scss.js';
import { VIEWER_FIELDS } from '../../constants.js';

var context = classNames.bind(Styles);

var NetworkCellValue = function NetworkCellValue(_ref) {
  var datakey = _ref.datakey,
      unit = _ref.unit,
      payload = _ref.payload;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      updateOpen = _useState2[1];

  var displayPopover = function displayPopover() {
    return updateOpen(true);
  };

  var hidePopover = function hidePopover() {
    return updateOpen(false);
  };

  var formattedValue = formatValue(datakey, payload[datakey], unit, payload);
  var shouldDisplayTooltip = datakey === VIEWER_FIELDS.file.key || payload.error;

  var getTitle = function getTitle() {
    if (datakey === VIEWER_FIELDS.file.key) {
      return payload.url;
    }

    if (payload.error) {
      return payload.error;
    }

    return formattedValue;
  };

  if (!shouldDisplayTooltip) {
    return /*#__PURE__*/React.createElement("td", {
      className: context('value-cell', datakey)
    }, /*#__PURE__*/React.createElement("span", {
      className: Styles['value-text']
    }, formattedValue));
  }

  return /*#__PURE__*/React.createElement("td", {
    className: context('value-cell', datakey)
  }, /*#__PURE__*/React.createElement(Popover, {
    body: /*#__PURE__*/React.createElement("span", {
      className: Styles['url-tooltip']
    }, getTitle()),
    isOpen: isOpen,
    preferPlace: "below"
  }, /*#__PURE__*/React.createElement("span", {
    className: Styles['value-text'],
    onMouseOut: hidePopover,
    onMouseOver: displayPopover
  }, formattedValue)));
};

NetworkCellValue.propTypes = {
  datakey: PropTypes.string.isRequired,
  payload: PropTypes.object,
  unit: PropTypes.string
};
NetworkCellValue.defaultProps = {
  payload: {},
  unit: null
};

export default NetworkCellValue;
//# sourceMappingURL=NetworkCellValue.js.map
