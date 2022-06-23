import { extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { calcChartAttributes } from '../../utils.js';
import { TIMELINE_DATA_POINT_HEIGHT } from '../../constants.js';

var TimelineDatapoint = function TimelineDatapoint(_ref) {
  var payload = _ref.payload,
      maxTime = _ref.maxTime,
      cx = _ref.cx,
      cy = _ref.cy,
      index = _ref.index;
  var timings = payload.timings;
  var chartAttributes = useMemo(function () {
    return calcChartAttributes(timings, maxTime, cx, index, cy);
  }, [timings, maxTime]);

  if (!payload) {
    return null;
  }

  return /*#__PURE__*/React.createElement("g", null, chartAttributes.map(function (chartProps) {
    return /*#__PURE__*/React.createElement("rect", _extends({
      key: chartProps.key
    }, chartProps, {
      height: TIMELINE_DATA_POINT_HEIGHT
    }));
  }));
};

TimelineDatapoint.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  index: PropTypes.number,
  maxTime: PropTypes.number.isRequired,
  payload: PropTypes.object
};
TimelineDatapoint.defaultProps = {
  cx: 0,
  cy: 0,
  index: 0,
  payload: null
};

export default TimelineDatapoint;
//# sourceMappingURL=TimelineDatapoint.js.map
