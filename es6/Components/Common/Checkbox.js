import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Styles from './Checkbox.styles.scss.js';

var context = classNames.bind(Styles);

var Checkbox = function Checkbox(_ref) {
  var containerClassName = _ref.containerClassName,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/React.createElement("div", {
    className: context('checkbox-container', containerClassName)
  }, /*#__PURE__*/React.createElement("label", {
    className: Styles['checkbox-label'],
    title: title
  }, /*#__PURE__*/React.createElement("input", {
    checked: isChecked,
    className: Styles.checkbox,
    onChange: onChange,
    type: "checkbox"
  }), children));
};

Checkbox.propTypes = {
  children: PropTypes.any.isRequired,
  containerClassName: PropTypes.string,
  isChecked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string
};
Checkbox.defaultProps = {
  containerClassName: '',
  isChecked: false,
  title: ''
};

export default Checkbox;
//# sourceMappingURL=Checkbox.js.map
