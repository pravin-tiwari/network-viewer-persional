import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './Dropdown.styles.scss.js';
import Button from './Button.js';

var context = classNames.bind(Styles);

var Dropdown = function Dropdown(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange,
      className = _ref.className;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpand = _useState2[0],
      setExpand = _useState2[1];

  var _useState3 = useState(selected !== null ? selected : items[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedKey = _useState4[0],
      setSelection = _useState4[1];

  var dropdownItemsRef = useRef(null);
  var isExpandRef = useRef(isExpand);

  var updateToggle = function updateToggle(toggleState) {
    setExpand(toggleState);
    isExpandRef.current = toggleState;
  };

  var handleItemSelection = function handleItemSelection(key) {
    setSelection(key);
    onChange(key);
    updateToggle(false);
  };

  var removeFocus = function removeFocus(_ref2) {
    var target = _ref2.target;

    if (isExpandRef.current && !dropdownItemsRef.current.contains(target)) {
      updateToggle(false);
    }
  };

  useEffect(function () {
    window.addEventListener('click', removeFocus);
    return function () {
      window.removeEventListener('click', removeFocus);
    };
  }, []);
  return /*#__PURE__*/React.createElement("span", {
    ref: dropdownItemsRef,
    className: context('dropdown-container', className, {
      expanded: isExpand
    })
  }, /*#__PURE__*/React.createElement(Button, {
    category: "default",
    className: context('dropdown-toggle', {
      active: isExpand
    }),
    material: true,
    onClick: function onClick() {
      return updateToggle(!isExpand);
    },
    raised: isExpand,
    size: "sm"
  }, selectedKey), isExpand && /*#__PURE__*/React.createElement("ul", {
    className: Styles.list
  }, items.map(function (text, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: text,
      className: context('list-item', {
        active: text === selectedKey
      })
    }, /*#__PURE__*/React.createElement("span", {
      className: Styles['item-text'],
      onClick: function onClick() {
        return handleItemSelection(text);
      },
      role: "button",
      tabIndex: index
    }, text));
  })));
};

Dropdown.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  selected: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Dropdown.defaultProps = {
  className: null,
  selected: null
};

export default Dropdown;
//# sourceMappingURL=Dropdown.js.map
