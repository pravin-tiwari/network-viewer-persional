import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import NetworkTableHeader from '../Components/NetworkTable/NetworkTableHeader.js';
import NetworkTableRow from '../Components/NetworkTable/NetworkTableRow.js';
import { useNetwork } from '../state/network/Context.js';
import ImportHar from '../Components/Import/ImportHAR.js';
import Styles from './NetworkTableContainer.styles.scss.js';
import ErrorMessage from '../Components/ErrorMessage.js';
import { useTheme } from '../state/theme/Context.js';
import InputHAR from '../Components/Import/InputHAR.js';

var context = classNames.bind(Styles);

var NetworkTableContainer = function NetworkTableContainer(_ref) {
  var onRequestSelect = _ref.onRequestSelect;

  var _useNetwork = useNetwork(),
      state = _useNetwork.state,
      actions = _useNetwork.actions;

  var _useTheme = useTheme(),
      showImportHAR = _useTheme.showImportHAR;

  var actualData = state.get('actualData');
  var data = state.get('data');
  var totalNetworkTime = state.get('totalNetworkTime');
  var error = state.get('error');
  var selectedReqIndex = state.get('selectedReqIndex');
  var showReqDetail = state.get('showReqDetail');
  var containerClassName = context('table-container', {
    'limited-cols': showReqDetail
  });

  var handleReqSelect = function handleReqSelect(payload) {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    onRequestSelect(payload);
  };

  if (error) {
    return /*#__PURE__*/React.createElement(ErrorMessage, error);
  }

  if (!actualData.size) {
    return /*#__PURE__*/React.createElement("section", {
      className: Styles['table-container']
    }, showImportHAR && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImportHar, {
      showButton: false
    }), /*#__PURE__*/React.createElement(InputHAR, null)));
  }

  return /*#__PURE__*/React.createElement("section", {
    className: containerClassName
  }, /*#__PURE__*/React.createElement("table", {
    className: Styles.table
  }, /*#__PURE__*/React.createElement(NetworkTableHeader, null), /*#__PURE__*/React.createElement("tbody", {
    className: Styles['table-content']
  }, Array.from(data).map(function (rowInfo) {
    return /*#__PURE__*/React.createElement(NetworkTableRow, {
      key: rowInfo.index,
      maxTime: totalNetworkTime,
      onSelect: handleReqSelect,
      payload: rowInfo,
      scrollHighlight: selectedReqIndex === rowInfo.index
    });
  }))));
};

NetworkTableContainer.propTypes = {
  onRequestSelect: PropTypes.func
};
NetworkTableContainer.defaultProps = {
  onRequestSelect: function onRequestSelect() {}
};

export default NetworkTableContainer;
//# sourceMappingURL=NetworkTableContainer.js.map
