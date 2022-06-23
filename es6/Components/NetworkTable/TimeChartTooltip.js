import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './TimeChartTooltip.styles.scss.js';
import { TIMINGS } from '../../constants.js';
import { prepareTooltipData } from '../../utils.js';

var context = classNames.bind(Styles);
var DETAIL = [{
  title: 'Resource Scheduling',
  category: ['queueing']
}, {
  title: 'Connection Start',
  category: ['blocked', 'dns', 'ssl', 'connect']
}, {
  title: 'Request/Response',
  category: ['send', 'wait', 'receive']
}];

var TimeChartTooltip = function TimeChartTooltip(_ref) {
  var data = _ref.data;
  var tooltipData = useMemo(function () {
    return !data ? null : prepareTooltipData(data);
  }, [data]);

  if (!tooltipData) {
    return null;
  }

  return /*#__PURE__*/React.createElement("div", {
    className: Styles.tooltip
  }, /*#__PURE__*/React.createElement("section", {
    className: Styles['tooltip-info']
  }, /*#__PURE__*/React.createElement("p", {
    className: Styles['time-info']
  }, "Queued at ".concat(tooltipData.queuedAt)), /*#__PURE__*/React.createElement("p", {
    className: Styles['time-info']
  }, "Started at ".concat(tooltipData.startedAt))), DETAIL.map(function (_ref2) {
    var title = _ref2.title,
        category = _ref2.category;
    return /*#__PURE__*/React.createElement("section", {
      key: title,
      className: Styles['tooltip-info']
    }, /*#__PURE__*/React.createElement("table", {
      className: Styles['waterfall-tooltip-table']
    }, /*#__PURE__*/React.createElement("thead", {
      className: Styles['waterfall-tooltip-thead']
    }, /*#__PURE__*/React.createElement("tr", {
      className: Styles['waterfall-tooltip-tr']
    }, /*#__PURE__*/React.createElement("th", {
      className: Styles['waterfall-tooltip-th']
    }, title), /*#__PURE__*/React.createElement("th", {
      className: Styles['waterfall-tooltip-th']
    }, "DURATION"))), /*#__PURE__*/React.createElement("tbody", {
      className: Styles['waterfall-tooltip-tbody']
    }, category.map(function (key) {
      return /*#__PURE__*/React.createElement("tr", {
        key: key,
        className: Styles['waterfall-tooltip-tr']
      }, /*#__PURE__*/React.createElement("td", {
        className: context('waterfall-tooltip-key', key)
      }, TIMINGS[key].name), /*#__PURE__*/React.createElement("td", {
        className: Styles['waterfall-tooltip-value']
      }, tooltipData[TIMINGS[key].dataKey]));
    }))));
  }), /*#__PURE__*/React.createElement("section", {
    className: Styles['tooltip-info']
  }, /*#__PURE__*/React.createElement("p", {
    className: Styles['time-info']
  }, "Total time ".concat(tooltipData.totalTime))));
};

TimeChartTooltip.propTypes = {
  data: PropTypes.object.isRequired
};

export default TimeChartTooltip;
//# sourceMappingURL=TimeChartTooltip.js.map
