import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { ROW_ID_PREFIX, VIEWER_FIELDS } from '../../constants.js';
import Styles from './NetworkTableHeader.styles.scss.js';
import TimeChart from './TimeChart.js';
import NetworkCellValue from './NetworkCellValue.js';
import { getStatusClass } from '../../utils.js';

var context = classNames.bind(Styles);

var NetworkTableRow = function NetworkTableRow(_ref) {
  var payload = _ref.payload,
      maxTime = _ref.maxTime,
      scrollHighlight = _ref.scrollHighlight,
      onSelect = _ref.onSelect;

  var handleSelectRequest = function handleSelectRequest() {
    onSelect(payload);
  };

  var rowProps = {
    className: context('network-table-row', getStatusClass(payload), {
      highlight: scrollHighlight
    }),
    id: ROW_ID_PREFIX + payload.index,
    onClick: handleSelectRequest
  };
  return /*#__PURE__*/React.createElement("tr", rowProps, Object.entries(VIEWER_FIELDS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        datakey = _ref3[0],
        _ref3$ = _ref3[1],
        key = _ref3$.key,
        unit = _ref3$.unit;

    return /*#__PURE__*/React.createElement(NetworkCellValue, {
      key: datakey,
      datakey: key,
      payload: payload,
      unit: unit
    });
  }), /*#__PURE__*/React.createElement("td", {
    className: Styles['timeline-header']
  }, payload.time ? /*#__PURE__*/React.createElement(TimeChart, {
    maxTime: maxTime,
    timings: payload.timings
  }) : ''));
};

NetworkTableRow.propTypes = {
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired,
  scrollHighlight: PropTypes.bool.isRequired
};

export default NetworkTableRow;
//# sourceMappingURL=NetworkTableRow.js.map
