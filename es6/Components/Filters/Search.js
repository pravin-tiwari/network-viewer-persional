import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Search.styles.scss.js';
import Dropdown from '../Common/Dropdown.js';

var SEARCH_CATEGORY = ['url', 'body'];

var Search = function Search(_ref) {
  var name = _ref.name,
      value = _ref.value,
      onChange = _ref.onChange;

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    onChange({
      name: name,
      value: target.value
    });
  };

  var handleDropdownChange = function handleDropdownChange(selectedKey) {
    onChange({
      name: selectedKey,
      value: value
    });
  };

  return /*#__PURE__*/React.createElement("div", {
    className: Styles['search-container']
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: Styles['prepend-dropdown'],
    items: SEARCH_CATEGORY,
    onChange: handleDropdownChange,
    selected: "url"
  }), /*#__PURE__*/React.createElement("input", {
    className: Styles.input,
    onChange: handleInputChange,
    placeholder: "Filter",
    type: "text",
    value: value
  }));
};

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};
Search.defaultProps = {
  value: ''
};

export default Search;
//# sourceMappingURL=Search.js.map
