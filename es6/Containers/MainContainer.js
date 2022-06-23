import React from 'react';
import PropTypes from 'prop-types';
import { useNetwork } from '../state/network/Context.js';
import FilterContainer from './FilterContainer.js';
import NetworkTableContainer from './NetworkTableContainer.js';
import LoaderContainer from '../Components/LoaderContainer.js';
import { FETCH_FILE_LOAD_TEXT } from '../constants.js';
import ReqDetailContainer from './ReqDetailContainer.js';
import Styles from './MainContainer.styles.scss.js';
import TimelineContainer from './TimelineContainer.js';
import { useTheme } from '../state/theme/Context.js';
import NetworkTableFooter from '../Components/NetworkTable/NetworkTableFooter.js';

var MainContainer = function MainContainer(_ref) {
  var onRequestSelect = _ref.onRequestSelect;

  var _useNetwork = useNetwork(),
      state = _useNetwork.state;

  var _useTheme = useTheme(),
      showTimeline = _useTheme.showTimeline;

  var loading = state.get('loading');
  var showReqDetail = state.get('showReqDetail');
  var dataSummary = state.get('dataSummary');
  var actualData = state.get('actualData');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LoaderContainer, {
    show: loading,
    text: FETCH_FILE_LOAD_TEXT
  }, showTimeline && /*#__PURE__*/React.createElement(TimelineContainer, null), /*#__PURE__*/React.createElement(FilterContainer, null), /*#__PURE__*/React.createElement("section", {
    className: Styles['main-container']
  }, /*#__PURE__*/React.createElement(NetworkTableContainer, {
    onRequestSelect: onRequestSelect
  }), showReqDetail && /*#__PURE__*/React.createElement(ReqDetailContainer, null)), actualData.size ? /*#__PURE__*/React.createElement(NetworkTableFooter, {
    dataSummary: dataSummary
  }) : null));
};

MainContainer.propTypes = {
  onRequestSelect: PropTypes.func
};
MainContainer.defaultProps = {
  onRequestSelect: function onRequestSelect() {}
};

export default MainContainer;
//# sourceMappingURL=MainContainer.js.map
