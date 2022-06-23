import axios from 'axios';
import { UPDATE_DATA, FETCH_FILE, UPDATE_SCROLL_TO_INDEX, UPDATE_SEARCH, UPDATE_SORT, UPDATE_FILTER, UPDATE_ERROR_FILTER, UPDATE_ERROR_MESSAGE, SELECT_REQUEST, RESET } from './types.js';

var updateData = function updateData(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_DATA,
      payload: payload
    });
  };
};
var updateSearch = function updateSearch(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_SEARCH,
      payload: payload
    });
  };
};
var updateSort = function updateSort(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_SORT,
      payload: payload
    });
  };
};
var updateFilter = function updateFilter(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_FILTER,
      payload: payload
    });
  };
};
var updateErrorFilter = function updateErrorFilter(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_ERROR_FILTER,
      payload: payload
    });
  };
};
var fetchFileRequest = function fetchFileRequest(dispatch) {
  return function (payload) {
    return dispatch({
      type: FETCH_FILE.REQUEST,
      payload: payload
    });
  };
};
var fetchFileSuccess = function fetchFileSuccess(dispatch) {
  return function (payload) {
    return dispatch({
      type: FETCH_FILE.SUCCESS,
      payload: payload
    });
  };
};
var fetchFileFailure = function fetchFileFailure(dispatch) {
  return function (payload) {
    return dispatch({
      type: FETCH_FILE.FAILURE,
      payload: payload
    });
  };
};
var updateErrorMessage = function updateErrorMessage(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_ERROR_MESSAGE,
      payload: payload
    });
  };
};
var updateScrollToIndex = function updateScrollToIndex(dispatch) {
  return function (payload) {
    return dispatch({
      type: UPDATE_SCROLL_TO_INDEX,
      payload: payload
    });
  };
};
var selectRequest = function selectRequest(dispatch) {
  return function (payload) {
    return dispatch({
      type: SELECT_REQUEST,
      payload: payload
    });
  };
};
var resetState = function resetState(dispatch) {
  return function (payload) {
    return dispatch({
      type: RESET,
      payload: payload
    });
  };
};
var fetchFile = function fetchFile(dispatch) {
  return function (file) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      withCredentials: true
    };
    fetchFileRequest(dispatch)();
    axios.get(file, options).then(function (_ref) {
      var data = _ref.data;

      if (data && data.log) {
        updateData(dispatch)(data.log);
      }

      fetchFileSuccess(dispatch)();
    })["catch"](function (error) {
      return fetchFileFailure(dispatch)({
        title: 'Error while fetching file',
        description: error.message
      });
    });
  };
};

export { fetchFile, fetchFileFailure, fetchFileRequest, fetchFileSuccess, resetState, selectRequest, updateData, updateErrorFilter, updateErrorMessage, updateFilter, updateScrollToIndex, updateSearch, updateSort };
//# sourceMappingURL=actions.js.map
