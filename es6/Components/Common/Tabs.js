import { slicedToArray as _slicedToArray, defineProperty as _defineProperty } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './Tabs.styles.scss.js';

var context = classNames.bind(Styles);

var Tabs = function Tabs(_ref) {
  var onUpdate = _ref.onUpdate,
      selectedKey = _ref.selectedKey,
      defaultSelectedKey = _ref.defaultSelectedKey,
      children = _ref.children,
      navTabsClassName = _ref.navTabsClassName,
      tabsContainerClassName = _ref.tabsContainerClassName,
      navLinkClassName = _ref.navLinkClassName,
      activeClassName = _ref.activeClassName;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      updateItems = _useState2[1];

  useEffect(function () {
    var itemsCollection = [];
    React.Children.forEach(children, function (element) {
      if ( /*#__PURE__*/React.isValidElement(element)) {
        var _element$props = element.props,
            name = _element$props.name,
            key = _element$props.eventKey,
            component = _element$props.children;
        itemsCollection.push({
          name: name,
          key: key,
          component: component
        });
      }
    });
    updateItems(itemsCollection);
  }, [children]);

  var _useState3 = useState(defaultSelectedKey || (items && items.length ? items[0].key : null)),
      _useState4 = _slicedToArray(_useState3, 2),
      activeTab = _useState4[0],
      updateTab = _useState4[1];

  var handleUpdate = function handleUpdate(key) {
    updateTab(key);

    if (onUpdate) {
      onUpdate(key);
    }
  };

  var renderItem = function renderItem() {
    var selectedTab = items.find(function (_ref2) {
      var key = _ref2.key;
      return key === (selectedKey || activeTab);
    });
    return selectedTab ? selectedTab.component : null;
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("nav", {
    className: context('nav-tabs', navTabsClassName)
  }, items.map(function (_ref3, index) {
    var item = _ref3.key,
        name = _ref3.name;
    return /*#__PURE__*/React.createElement("a", {
      key: item,
      className: context('tab-item', navLinkClassName, _defineProperty({}, activeClassName || Styles.active, activeTab === item)),
      onClick: function onClick() {
        return handleUpdate(item);
      },
      role: "tab",
      tabIndex: index
    }, name);
  })), /*#__PURE__*/React.createElement("section", {
    className: context(tabsContainerClassName)
  }, renderItem()));
};

Tabs.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  defaultSelectedKey: PropTypes.string,
  navLinkClassName: PropTypes.string,
  navTabsClassName: PropTypes.string,
  onUpdate: PropTypes.func,
  selectedKey: PropTypes.string,
  tabsContainerClassName: PropTypes.string
};
Tabs.defaultProps = {
  activeClassName: null,
  defaultSelectedKey: null,
  navLinkClassName: null,
  navTabsClassName: null,
  onUpdate: null,
  selectedKey: null,
  tabsContainerClassName: null
};

export default Tabs;
//# sourceMappingURL=Tabs.js.map
