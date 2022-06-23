import React from 'react';
import { useNetwork } from '../state/network/Context.js';
import Styles from './TimelineContainer.styles.scss.js';
import TimelineChart from '../Components/TimelineChart/TimelineChart.js';

var TimelineContainer = function TimelineContainer() {
  var _useNetwork = useNetwork(),
      state = _useNetwork.state;

  var data = state.get('data');
  var actualData = state.get('actualData');
  var error = state.get('error');
  var totalNetworkTime = state.get('totalNetworkTime');

  if (error || !actualData.size) {
    return null;
  }

  return /*#__PURE__*/React.createElement("section", {
    className: Styles['timeline-container']
  }, /*#__PURE__*/React.createElement(TimelineChart, {
    chartData: data.toArray(),
    totalNetworkTime: totalNetworkTime
  }));
};

export default TimelineContainer;
//# sourceMappingURL=TimelineContainer.js.map
