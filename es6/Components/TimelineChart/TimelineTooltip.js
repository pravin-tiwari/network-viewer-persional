import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TimelineTooltip.styles.scss.js';
import { formatTime } from '../../utils.js';

var TimelineTooltip = function TimelineTooltip(_ref) {
  var payload = _ref.payload;

  if (!payload || !payload.length) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: Styles.tooltip
  }, /*#__PURE__*/React.createElement("div", {
    className: Styles.content
  }, payload[0].payload.filename), /*#__PURE__*/React.createElement("div", null, "Started at: ".concat(formatTime(payload[0].payload.timings.startTime))));
};

TimelineTooltip.propTypes = {
  payload: PropTypes.array
};
TimelineTooltip.defaultProps = {
  payload: null
};

export default TimelineTooltip;
//# sourceMappingURL=TimelineTooltip.js.map
