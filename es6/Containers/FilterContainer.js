import { extends as _extends } from '../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import { Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames/bind';
import ImportHar from '../Components/Import/ImportHAR.js';
import Search from '../Components/Filters/Search.js';
import { useNetwork } from '../state/network/Context.js';
import { FILTERS } from '../constants.js';
import Styles from './FilterContainer.styles.scss.js';
import Button from '../Components/Common/Button.js';
import { useTheme } from '../state/theme/Context.js';
import ErrorFilter from '../Components/Filters/ErrorFilter.js';
import Reset from '../Components/Import/Reset.js';

var context = classNames.bind(Styles);

var FilterContainer = function FilterContainer() {
  var _useNetwork = useNetwork(),
      state = _useNetwork.state,
      actions = _useNetwork.actions;

  var _useTheme = useTheme(),
      showImportHAR = _useTheme.showImportHAR;

  var filter = state.get('filter');
  var filterByError = state.get('errorFilter');
  return /*#__PURE__*/React.createElement("section", {
    className: Styles['filters-container']
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(Col, {
    md: 5,
    sm: 4,
    xs: 12
  }, /*#__PURE__*/React.createElement(Search, _extends({}, state.get('search'), {
    onChange: actions.updateSearch
  }))), /*#__PURE__*/React.createElement(Col, {
    md: 7,
    sm: 8,
    xs: 12
  }, /*#__PURE__*/React.createElement("div", {
    className: Styles['filters-button-group']
  }, FILTERS.map(function (_ref) {
    var name = _ref.name,
        filterBy = _ref.filterBy;
    var selectedFilter = filterBy.value === filter.value;
    var buttonStyle = context('filter-button', {
      'selected-filter': selectedFilter
    });
    return /*#__PURE__*/React.createElement(Button, {
      key: name,
      category: "default",
      className: buttonStyle,
      material: true,
      onClick: function onClick() {
        return actions.updateFilter(filterBy);
      },
      raised: selectedFilter,
      size: "sm"
    }, name);
  }), /*#__PURE__*/React.createElement(ErrorFilter, {
    isError: filterByError,
    onChange: actions.updateErrorFilter
  }), showImportHAR && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImportHar, {
    className: Styles['addon-action-button']
  }), /*#__PURE__*/React.createElement(Reset, {
    className: Styles['addon-action-button'],
    onReset: actions.resetState
  }))))));
};

export default FilterContainer;
//# sourceMappingURL=FilterContainer.js.map
