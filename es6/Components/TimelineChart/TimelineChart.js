import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, ScatterChart, XAxis, YAxis, Tooltip, Scatter } from 'recharts';
import Styles from './TimelineChart.styles.scss.js';
import TimelineDatapoint from './TimelineDatapoint.js';
import { formatTime } from '../../utils.js';
import TimelineTooltip from './TimelineTooltip.js';

var TimelineChart = function TimelineChart(_ref) {
  var chartData = _ref.chartData,
      totalNetworkTime = _ref.totalNetworkTime;
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['chart-container']
  }, /*#__PURE__*/React.createElement(ResponsiveContainer, {
    height: 100,
    width: "100%"
  }, /*#__PURE__*/React.createElement(ScatterChart, {
    className: Styles['scatter-chart']
  }, /*#__PURE__*/React.createElement(XAxis, {
    axisLine: false,
    dataKey: "timings.startTime",
    domain: [0, totalNetworkTime],
    interval: "preserveStartEnd",
    orientation: "top",
    tickCount: 10,
    tickFormatter: formatTime,
    tickLine: false,
    type: "number"
  }), /*#__PURE__*/React.createElement(YAxis, {
    dataKey: "index",
    domain: ['min', 'max'],
    hide: true,
    reversed: true
  }), /*#__PURE__*/React.createElement(Tooltip, {
    content: /*#__PURE__*/React.createElement(TimelineTooltip, null)
  }), /*#__PURE__*/React.createElement(Scatter, {
    data: chartData,
    shape: /*#__PURE__*/React.createElement(TimelineDatapoint, {
      maxTime: totalNetworkTime
    })
  }))));
};

TimelineChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  totalNetworkTime: PropTypes.number.isRequired
};

export default TimelineChart;
//# sourceMappingURL=TimelineChart.js.map
