import React from 'react';
import { useNetwork } from '../state/network/Context.js';
import Styles from './ReqDetailContainer.styles.scss.js';
import Tabs from '../Components/Common/Tabs.js';
import Tab from '../Components/Common/Tab.js';
import Headers from '../Components/ReqDetail/Headers.js';
import IconCloseSign from '../icons/IconCloseSign.js';
import Response from '../Components/ReqDetail/Response.js';

var ReqDetailContainer = function ReqDetailContainer() {
  var _useNetwork = useNetwork(),
      actions = _useNetwork.actions,
      state = _useNetwork.state;

  var reqDetail = state.get('reqDetail');

  var handleCloseClick = function handleCloseClick() {
    actions.selectRequest(null);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: Styles['req-detail-container']
  }, /*#__PURE__*/React.createElement("button", {
    className: Styles['close-button'],
    onClick: handleCloseClick,
    type: "button"
  }, /*#__PURE__*/React.createElement(IconCloseSign, {
    className: Styles['close-icon']
  })), /*#__PURE__*/React.createElement(Tabs, {
    activeClassName: Styles.active,
    defaultSelectedKey: "headers",
    navLinkClassName: Styles['tab-link'],
    navTabsClassName: Styles['nav-tabs'],
    tabsContainerClassName: Styles['tabs-container']
  }, /*#__PURE__*/React.createElement(Tab, {
    eventKey: "headers",
    name: "Headers"
  }, /*#__PURE__*/React.createElement(Headers, {
    data: reqDetail
  })), /*#__PURE__*/React.createElement(Tab, {
    eventKey: "response",
    name: "Response"
  }, /*#__PURE__*/React.createElement(Response, {
    data: reqDetail
  }))));
};

export default ReqDetailContainer;
//# sourceMappingURL=ReqDetailContainer.js.map
