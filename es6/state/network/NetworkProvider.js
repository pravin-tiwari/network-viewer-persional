import { slicedToArray as _slicedToArray, extends as _extends } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useReducer, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { reducer, initialState } from './reducer.js';
import { updateData, fetchFile, updateScrollToIndex } from './actions.js';
import { NetworkContext } from './Context.js';
import { findRequestIndex } from '../../utils.js';
import { ROW_ID_PREFIX } from '../../constants.js';

var NetworkProvider = function NetworkProvider(props) {
  var data = props.data,
      file = props.file,
      fetchOptions = props.fetchOptions,
      initialState = props.initialState,
      scrollTimeStamp = props.scrollTimeStamp,
      scrollRequestPosition = props.scrollRequestPosition,
      autoHighlightChange = props.autoHighlightChange,
      onDataLoaded = props.onDataLoaded,
      onDataError = props.onDataError;

  var _useReducer = useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var value = useMemo(function () {
    return [state, dispatch];
  }, [state]);
  var selectedReqIndex = value[0].get('selectedReqIndex');
  var requestData = value[0].get('data');
  var showReqDetail = value[0].get('showReqDetail');
  var actualData = value[0].get('actualData');
  var error = value[0].get('error'); // Update data onChange of network data

  useEffect(function () {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)({
        entries: data.log.entries,
        pages: data.log.pages
      });
    }
  }, [data]); // Fetch HAR file onChange of file prop

  useEffect(function () {
    if (file) {
      fetchFile(dispatch)(file, fetchOptions);
    }
  }, [file]);
  useEffect(function () {
    if (actualData.size && onDataLoaded) {
      onDataLoaded(actualData);
    }
  }, [actualData]);
  useEffect(function () {
    if (error && onDataError) {
      onDataError(error);
    }
  }, [error]); // Find nearby request-rowId and update scrollIndex on scrollTimeStamp receive

  useEffect(function () {
    var shouldChangeHighlight = showReqDetail ? autoHighlightChange : true;

    if (scrollTimeStamp && shouldChangeHighlight) {
      var reqIndex = findRequestIndex({
        data: requestData,
        timestamp: scrollTimeStamp,
        position: scrollRequestPosition
      });

      if (reqIndex || reqIndex === 0) {
        updateScrollToIndex(dispatch)(requestData.get(reqIndex));
      }
    }
  }, [scrollTimeStamp, actualData]); // Scroll to request row onChange of scrollToIndex
  // setTimeout is required when reqDetail is visible,
  // it allows DOM to adjust before we scroll it to highlighted request

  useEffect(function () {
    if (selectedReqIndex) {
      setTimeout(function () {
        var element = document.getElementById(ROW_ID_PREFIX + selectedReqIndex);

        if (element) {
          element.scrollIntoView({
            alignToTop: true,
            behavior: 'smooth'
          });
        }
      }, 300);
    }
  }, [selectedReqIndex]);
  return /*#__PURE__*/React.createElement(NetworkContext.Provider, _extends({
    value: value
  }, props));
};

NetworkProvider.propTypes = {
  autoHighlightChange: PropTypes.bool,
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  initialState: PropTypes.object,
  onDataError: PropTypes.func,
  onDataLoaded: PropTypes.func,
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number
};
NetworkProvider.defaultProps = {
  autoHighlightChange: false,
  data: null,
  fetchOptions: {
    withCredentials: true
  },
  file: null,
  initialState: initialState,
  onDataError: null,
  onDataLoaded: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null
};

export default NetworkProvider;
//# sourceMappingURL=NetworkProvider.js.map
