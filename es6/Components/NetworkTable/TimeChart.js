import { slicedToArray as _slicedToArray, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Popover from 'react-popover';
import { calcChartAttributes } from '../../utils.js';
import { TIME_CHART_SVG_PROPS, TIME_CHART_DEFAULT_PROPS } from '../../constants.js';
import TimeChartTooltip from './TimeChartTooltip.js';

var TimeChart = function TimeChart(_ref) {
  var timings = _ref.timings,
      maxTime = _ref.maxTime;
  var chartAttributes = useMemo(function () {
    return calcChartAttributes(timings, maxTime);
  }, [timings, maxTime]);

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

  return /*#__PURE__*/React.createElement(Popover, {
    body: /*#__PURE__*/React.createElement(TimeChartTooltip, {
      data: timings
    }),
    isOpen: isOpen,
    preferPlace: "below"
  }, /*#__PURE__*/React.createElement("div", {
    onMouseOut: hidePopover,
    onMouseOver: displayPopover
  }, /*#__PURE__*/React.createElement("svg", TIME_CHART_SVG_PROPS, /*#__PURE__*/React.createElement("g", null, chartAttributes.map(function (chartProps) {
    return /*#__PURE__*/React.createElement("rect", _extends({
      key: chartProps.key
    }, chartProps, TIME_CHART_DEFAULT_PROPS));
  })))));
};

TimeChart.propTypes = {
  maxTime: PropTypes.number.isRequired,
  timings: PropTypes.object.isRequired
};

export default TimeChart;
//# sourceMappingURL=TimeChart.js.map
