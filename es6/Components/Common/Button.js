import { objectWithoutProperties as _objectWithoutProperties, defineProperty as _defineProperty, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './Button.styles.scss.js';

var context = classNames.bind(Styles);

var Button = function Button(_ref) {
  var _context;

  var category = _ref.category,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      href = _ref.href,
      material = _ref.material,
      raised = _ref.raised,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["category", "children", "className", "disabled", "href", "material", "raised", "size"]);

  var combinedClasses = context('btn', className, (_context = {}, _defineProperty(_context, "btn-".concat(size), size), _defineProperty(_context, material ? "btn-md-".concat(category) : "btn-".concat(category), true), _defineProperty(_context, "btn-md-".concat(category, "-raised"), raised), _defineProperty(_context, 'btn-md-raised', raised), _context));
  var TagName = href && !disabled ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(TagName, _extends({
    className: combinedClasses,
    disabled: disabled,
    href: href
  }, props), children);
};

Button.propTypes = {
  category: PropTypes.oneOf(['default']),
  children: PropTypes.node.isRequired,
  className: PropTypes.any,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  material: PropTypes.bool,
  raised: PropTypes.bool,
  size: PropTypes.oneOf([false, 'sm']),
  type: PropTypes.oneOf(['submit', 'reset', 'button', 'menu'])
};
Button.defaultProps = {
  category: 'default',
  className: null,
  disabled: false,
  href: null,
  material: false,
  raised: false,
  size: false,
  type: 'button'
};

export default Button;
//# sourceMappingURL=Button.js.map
