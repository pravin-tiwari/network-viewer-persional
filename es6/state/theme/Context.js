import { objectSpread2 as _objectSpread2, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { NETWORK_VIEWER_DEFAULT_OPTIONS } from '../../constants.js';

var ThemeContext = /*#__PURE__*/React.createContext(NETWORK_VIEWER_DEFAULT_OPTIONS);
var useTheme = function useTheme() {
  var context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  return context;
};
var ThemeProvider = function ThemeProvider(props) {
  var options = props.options;

  var finalOptions = _objectSpread2(_objectSpread2({}, NETWORK_VIEWER_DEFAULT_OPTIONS), options);

  return /*#__PURE__*/React.createElement(ThemeContext.Provider, _extends({
    value: finalOptions
  }, props));
};
ThemeProvider.propTypes = {
  options: PropTypes.object
};
ThemeProvider.defaultProps = {
  options: NETWORK_VIEWER_DEFAULT_OPTIONS
};

export default ThemeProvider;
export { ThemeContext, ThemeProvider, useTheme };
//# sourceMappingURL=Context.js.map
