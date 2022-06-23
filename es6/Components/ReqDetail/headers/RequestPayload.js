import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Styles from '../Headers.styles.scss.js';
import { parseRequestPayload } from '../../../utils.js';

var RequestPayload = function RequestPayload(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  var payloadData = data.headers.postData.text;
  var parsedData = useMemo(function () {
    return parseRequestPayload(payloadData);
  }, [payloadData]);
  return /*#__PURE__*/React.createElement("div", {
    className: Styles['header-detail']
  }, isPayloadTransformed ? /*#__PURE__*/React.createElement("div", {
    className: Styles['response-content']
  }, /*#__PURE__*/React.createElement("pre", {
    className: Styles['log-body-colorless']
  }, parsedData)) : payloadData);
};

RequestPayload.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired
};
RequestPayload.defaultProps = {
  data: null
};

export default RequestPayload;
//# sourceMappingURL=RequestPayload.js.map
