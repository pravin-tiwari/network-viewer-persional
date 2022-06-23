import { objectSpread2 as _objectSpread2 } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React from 'react';
import PropTypes from 'prop-types';
import { useDropzone } from 'react-dropzone';
import { useNetwork } from '../../state/network/Context.js';
import Styles from './ImportHAR.styles.scss.js';
import Button from '../Common/Button.js';

var DROP_FILE_CONFIG = {
  accept: '.har',
  multiple: false
};

var ImportHar = function ImportHar(_ref) {
  var showButton = _ref.showButton,
      className = _ref.className;

  var _useNetwork = useNetwork(),
      actions = _useNetwork.actions;

  var updateErrorMessage = actions.updateErrorMessage;

  var prepareData = function prepareData(newNetworkData) {
    return actions.updateData({
      entries: newNetworkData.log.entries,
      pages: newNetworkData.log.pages
    });
  };

  var onDrop = function onDrop(files) {
    var reader = new FileReader();

    reader.onabort = function () {
      return updateErrorMessage({
        title: 'file reading was aborted'
      });
    };

    reader.onerror = function () {
      return updateErrorMessage({
        title: 'file reading has failed'
      });
    };

    reader.onload = function () {
      try {
        var data = JSON.parse(reader.result);
        prepareData(data);
      } catch (error) {
        updateErrorMessage({
          title: 'Error while parsing HAR file'
        });
      }
    };

    reader.readAsText(files[0]);
  };

  var _useDropzone = useDropzone(_objectSpread2(_objectSpread2({}, DROP_FILE_CONFIG), {}, {
    onDrop: onDrop
  })),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  return /*#__PURE__*/React.createElement("div", getRootProps(), /*#__PURE__*/React.createElement("input", getInputProps()), showButton ? /*#__PURE__*/React.createElement(Button, {
    category: "default",
    className: className,
    material: true,
    raised: true,
    size: "sm"
  }, "Import HAR") : /*#__PURE__*/React.createElement("p", {
    className: Styles['drag-drop']
  }, "Drag and drop HAR file here, or click to select file"));
};

ImportHar.propTypes = {
  className: PropTypes.string,
  showButton: PropTypes.bool
};
ImportHar.defaultProps = {
  className: null,
  showButton: true
};

export default ImportHar;
//# sourceMappingURL=ImportHAR.js.map
