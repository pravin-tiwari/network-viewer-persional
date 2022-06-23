'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames/bind'));
var immutable = require('immutable');
var axios = _interopDefault(require('axios'));
var reactFlexboxGrid = require('react-flexbox-grid');
var reactDropzone = require('react-dropzone');
var Popover = _interopDefault(require('react-popover'));
var qs = require('qs');
var recharts = require('recharts');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var VIEWER_FIELDS = Object.freeze({
  file: Object.freeze({
    key: 'filename',
    name: 'File'
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status'
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Method'
  }),
  domain: Object.freeze({
    key: 'domain',
    name: 'Domain'
  }),
  type: Object.freeze({
    key: 'type',
    name: 'Type'
  }),
  size: Object.freeze({
    key: 'size',
    name: 'Size'
  }),
  time: Object.freeze({
    key: 'time',
    name: 'Time'
  })
});
var DEFAULT_FILTER = {
  name: null,
  value: null
};
var FILTERS = [{
  name: 'All',
  filterBy: DEFAULT_FILTER
}, {
  name: 'XHR',
  filterBy: {
    name: 'type',
    value: ['xhr', 'XHR', 'fetch']
  }
}, {
  name: 'JS',
  filterBy: {
    name: 'type',
    value: ['script', 'javascript', 'x-javascript', 'json']
  }
}, {
  name: 'CSS',
  filterBy: {
    name: 'type',
    value: ['stylesheet', 'css']
  }
}, {
  name: 'Img',
  filterBy: {
    name: 'type',
    value: ['image', 'png', 'jpeg', 'svg+xml', 'gif']
  }
}, {
  name: 'Media',
  filterBy: {
    name: 'type',
    value: ['media']
  }
}, {
  name: 'Font',
  filterBy: {
    name: 'type',
    value: ['font', 'woff2']
  }
}, {
  name: 'Doc',
  filterBy: {
    name: 'type',
    value: ['document', 'html']
  }
}, {
  name: 'WS',
  filterBy: {
    name: 'type',
    value: ['websocket']
  }
}, {
  name: 'Manifest',
  filterBy: {
    name: 'type',
    value: ['manifest.json']
  }
}];
var FETCH_FILE_LOAD_TEXT = 'Please wait, Fetching file is in progress.';
var TIMINGS = {
  queueing: {
    dataKey: '_blocked_queueing',
    fill: '#ccc',
    name: 'Queueing'
  },
  blocked: {
    dataKey: 'blocked',
    fill: '#A1000C',
    name: 'Stalled'
  },
  dns: {
    dataKey: 'dns',
    fill: '#DCC9E5',
    name: 'DNS Lookup'
  },
  ssl: {
    dataKey: 'ssl',
    fill: '#E78057',
    name: 'SSL'
  },
  connect: {
    dataKey: 'connect',
    fill: '#DB8553',
    name: 'Initial Connection'
  },
  send: {
    dataKey: 'send',
    fill: '#3C96C4',
    name: 'Request Sent'
  },
  wait: {
    dataKey: 'wait',
    fill: '#7CA0BF',
    name: 'Waiting (TTFB)'
  },
  receive: {
    dataKey: 'receive',
    fill: '#65B955',
    name: 'Content Downloaded'
  }
};
var TIME_CHART_SVG_PROPS = {
  width: '100%',
  height: '20',
  viewBox: '0 0 250 20',
  version: '1.1',
  preserveAspectRatio: 'xMinYMin meet'
};
var TIME_CHART_DEFAULT_PROPS = {
  height: 16,
  y: 3.5
};
var ROW_ID_PREFIX = 'network-viewer-table-row-';
var GENERAL_HEADERS = Object.freeze({
  url: Object.freeze({
    key: 'url',
    name: 'Request URL'
  }),
  method: Object.freeze({
    key: 'method',
    name: 'Request Method'
  }),
  status: Object.freeze({
    key: 'status',
    name: 'Status Code'
  }),
  serverIPAddress: Object.freeze({
    key: 'serverIPAddress',
    name: 'Remote Address'
  })
});
var HEADERS_TITLES = Object.freeze({
  general: Object.freeze({
    key: 'general',
    name: 'General'
  }),
  response: Object.freeze({
    key: 'response',
    name: 'Response Headers'
  }),
  request: Object.freeze({
    key: 'request',
    name: 'Request Headers'
  }),
  queryString: Object.freeze({
    key: 'queryString',
    name: 'Query String Parameters'
  }),
  formData: Object.freeze({
    key: 'formaData',
    name: 'Form Data'
  }),
  requestPayload: Object.freeze({
    key: 'requestPayload',
    name: 'Request Payload'
  })
});

var TIMELINE_DATA_POINT_HEIGHT = 2;
var NETWORK_VIEWER_DEFAULT_OPTIONS = {
  showImportHAR: true,
  showTimeline: false
};
var PAYLOAD_CAPTIONS = Object.freeze({
  encode: Object.freeze({
    "true": 'URL encoded',
    "false": 'decoded'
  }),
  parse: Object.freeze({
    "true": 'source',
    "false": 'parsed'
  })
});

/* eslint no-underscore-dangle: 0 */

var roundOff = function roundOff(value) {
  var decimal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  var base = Math.pow(10, decimal);
  return Math.round(value * base) / base;
};
var formatSize = function formatSize(bytes) {
  if (bytes < 1024) {
    return "".concat(roundOff(bytes), " B");
  }

  if (bytes < Math.pow(1024, 2)) {
    return "".concat(roundOff(bytes / 1024), " KB");
  }

  return "".concat(roundOff(bytes / Math.pow(1024, 2)), " MB");
};
var formatTime = function formatTime(time) {
  if (time < 1000) {
    return "".concat(Math.round(time), "ms");
  }

  if (time < 60000) {
    return "".concat(Math.ceil(time / 10) / 100, "s");
  }

  return "".concat(Math.ceil(time / 60000) * 100 / 100, "m");
};
var getUrlInfo = function getUrlInfo(url) {
  var urlInfo = new URL(url);
  var pathSplit = urlInfo.pathname.split('/');
  var fileName = (pathSplit[pathSplit.length - 1].trim() ? pathSplit[pathSplit.length - 1] : pathSplit[pathSplit.length - 2]) + urlInfo.search;
  return {
    domain: urlInfo.host,
    filename: fileName || urlInfo.href,
    url: urlInfo.href
  };
};
var parseSize = function parseSize(_ref) {
  var bodySize = _ref.bodySize,
      _transferSize = _ref._transferSize,
      headers = _ref.headers,
      content = _ref.content;

  if (content && content.size) {
    return formatSize(content.size);
  }

  if (_transferSize > -1) {
    return formatSize(_transferSize);
  }

  if (bodySize > -1) {
    return formatSize(bodySize);
  }

  var contentInfo = headers.find(function (_ref2) {
    var name = _ref2.name;
    return ['content-length', 'Content-Length'].includes(name);
  });

  if (!contentInfo) {
    return 0;
  }

  return formatSize(contentInfo.value);
};
var getContentType = function getContentType(entry) {
  if (entry._resourceType) {
    return entry._resourceType.toLowerCase();
  }

  var headers = entry.response.headers;
  var contentInfo = headers.find(function (_ref3) {
    var name = _ref3.name;
    return ['content-type', 'Content-Type'].includes(name);
  });

  if (!contentInfo) {
    return '';
  }

  var type = contentInfo.value.split(';')[0].split('/');
  return type.length > 1 ? type[1] : type[0];
};
var getTimings = function getTimings(_ref4, firstEntryTime) {
  var startedDateTime = _ref4.startedDateTime,
      timings = _ref4.timings;
  return _objectSpread2(_objectSpread2({}, timings), {}, {
    startTime: new Date(startedDateTime).getTime() - new Date(firstEntryTime).getTime()
  });
};
var getContent = function getContent(_ref5) {
  var mimeType = _ref5.mimeType,
      text = _ref5.text;

  if (mimeType === 'application/json') {
    var parsedJson = text;

    try {
      parsedJson = JSON.stringify(JSON.parse(text), null, 2);
    } catch (err) {
      parsedJson = text;
    }

    return parsedJson;
  }

  return text;
};
var getEntryTransferredSize = function getEntryTransferredSize(_ref6) {
  var response = _ref6.response;
  var bodySize = response.bodySize,
      _transferSize = response._transferSize;

  if (_transferSize > -1) {
    return _transferSize;
  }

  if (bodySize > -1) {
    return bodySize;
  }

  return -1;
};
var getEntryUncompressedSize = function getEntryUncompressedSize(_ref7) {
  var response = _ref7.response;
  var bodySize = response.bodySize,
      _transferSize = response._transferSize,
      size = response.content.size;

  if (size > 0) {
    return size;
  }

  if (_transferSize > -1) {
    return _transferSize;
  }

  if (bodySize > -1) {
    return bodySize;
  }

  return -1;
};
var calculateFinishTime = function calculateFinishTime(data) {
  var finishTimes = data.map(function (_ref8) {
    var timings = _ref8.timings;
    return Object.values(timings).reduce(function (acc, durationInMS) {
      return acc + (durationInMS > -1 ? durationInMS : 0);
    }, 0);
  });
  return Math.max.apply(Math, _toConsumableArray(finishTimes));
};
var sortHeaders = function sortHeaders(current, next) {
  if (current.name < next.name) {
    return -1;
  }

  return current.name > next.name ? 1 : 0;
};
var getHeaders = function getHeaders(entry) {
  return {
    request: entry.request.headers.sort(sortHeaders),
    response: entry.response.headers.sort(sortHeaders),
    queryString: entry.request.queryString,
    postData: entry.request.postData
  };
};
var getTotalTimeOfEntry = function getTotalTimeOfEntry(_ref9) {
  var startedDateTime = _ref9.startedDateTime,
      time = _ref9.time,
      timings = _ref9.timings;
  return new Date(startedDateTime).getTime() + time + (timings._blocked_queueing || 0);
};
var getInterceptError = function getInterceptError(_ref10) {
  var response = _ref10.response;
  return response && response._error ? response._error : null;
};
var prepareViewerData = function prepareViewerData(entries) {
  if (!entries.length) {
    return {
      totalNetworkTime: 0,
      data: [],
      totalRequests: 0,
      totalTransferredSize: 0,
      totalUncompressedSize: 0,
      finishTime: 0
    };
  }

  var firstEntryTime = entries[0].startedDateTime;
  var endTime = getTotalTimeOfEntry(entries[entries.length - 1]);
  var totalTransferredSize = 0;
  var totalUncompressedSize = 0;
  var data = entries.filter(function (entry) {
    return entry.response && getUrlInfo(entry.request.url).domain;
  }).map(function (entry, index) {
    totalTransferredSize += getEntryTransferredSize(entry);
    totalUncompressedSize += getEntryUncompressedSize(entry);
    var lastTimeOfEntry = getTotalTimeOfEntry(entry);
    endTime = endTime < lastTimeOfEntry ? lastTimeOfEntry : endTime;
    return _objectSpread2({
      index: index,
      status: entry.response.status,
      method: entry.request.method,
      size: parseSize(entry.response),
      startedDateTime: new Date(entry.startedDateTime).getTime(),
      type: getContentType(entry),
      timings: getTimings(entry, firstEntryTime),
      body: getContent(entry.response.content),
      time: entry.time,
      serverIPAddress: entry.serverIPAddress || ':80',
      headers: getHeaders(entry),
      transferredSize: getEntryTransferredSize(entry),
      uncompressedSize: getEntryUncompressedSize(entry),
      error: getInterceptError(entry)
    }, getUrlInfo(entry.request.url));
  });
  var totalRequests = data.length;
  var totalNetworkTime = endTime - new Date(firstEntryTime).getTime();
  var finishTime = calculateFinishTime(data);
  return {
    totalNetworkTime: totalNetworkTime,
    data: data,
    totalRequests: totalRequests,
    totalTransferredSize: totalTransferredSize,
    totalUncompressedSize: totalUncompressedSize,
    finishTime: finishTime
  };
};
var sortBy = function sortBy(data, key) {
  var isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  return data.sort(function (prev, next) {
    if (prev[key] < next[key]) {
      return isAsc ? -1 : 1;
    }

    if (prev[key] > next[key]) {
      return isAsc ? 1 : 1;
    }

    return 0;
  });
};
var filterCondition = function filterCondition(_ref11) {
  var filter = _ref11.filter,
      info = _ref11.info;

  switch (filter.name) {
    case 'error':
      return info.status >= 400 || info.error;

    case 'type':
    default:
      return filter.value.includes(info[filter.name]);
  }
};
var filterData = function filterData(_ref12) {
  var data = _ref12.data,
      errorFilter = _ref12.errorFilter,
      _ref12$filter = _ref12.filter,
      filter = _ref12$filter === void 0 ? {} : _ref12$filter,
      _ref12$search = _ref12.search,
      search = _ref12$search === void 0 ? {} : _ref12$search;
  var trimmedSearch = search.value && search.value.trim();
  return !trimmedSearch && !filter.name && !errorFilter ? data : data.filter(function (info) {
    var isSearchMatched = trimmedSearch ? info[search.name] && info[search.name].includes(trimmedSearch) : true;
    var isErrorMatched = errorFilter ? filterCondition({
      filter: {
        name: 'error'
      },
      info: info
    }) : true;
    var isFilterMatched = filter.name ? filterCondition({
      filter: filter,
      info: info
    }) : true;
    return isSearchMatched && isErrorMatched && isFilterMatched;
  });
};
var actionsWrapper = function actionsWrapper() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (dispatch, state) {
    return Object.keys(actions).reduce(function (modifiedActions, type) {
      return _objectSpread2(_objectSpread2({}, modifiedActions), {}, _defineProperty({}, type, actions[type](dispatch, state)));
    }, {});
  };
};
var parseTime = function parseTime(time) {
  if (!time) {
    return time;
  }

  if (time > 1000) {
    return "".concat((time / 1000).toFixed(2), " s");
  }

  return "".concat(time.toFixed(2), " ms");
};
var calcTotalTime = function calcTotalTime(data) {
  var total = Object.keys(data).filter(function (key) {
    return !['_blocked_queueing', 'startTime'].includes(key);
  }).reduce(function (acc, key) {
    return acc + data[key];
  }, 0);
  return total;
};
var prepareTooltipData = function prepareTooltipData(data) {
  return _objectSpread2({
    queuedAt: parseTime(data.startTime),
    startedAt: parseTime(data.startTime + data._blocked_queueing),
    totalTime: parseTime(calcTotalTime(data))
  }, Object.keys(data).reduce(function (acc, key) {
    acc[key] = parseTime(data[key]);
    return acc;
  }, {}));
};
var getStatusClass = function getStatusClass(_ref13) {
  var status = _ref13.status,
      error = _ref13.error;

  if (status === 0 && !error) {
    return 'pending';
  }

  if (status >= 400 || error) {
    return 'error';
  }

  return 'info';
};
var formatValue = function formatValue(key, value, unit) {
  var request = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

  switch (key) {
    case 'time':
      return value === 0 && !request.error ? 'Pending' : parseTime(value);

    case 'status':
      if (request.error) {
        return '(failed)';
      }

      return value === 0 ? 'Pending' : value;

    default:
      return !unit ? value : "".concat(value, " ").concat(unit);
  }
};
var calcChartAttributes = function calcChartAttributes(data, maxTime, cx, index) {
  var cy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var startTimePercent = data.startTime / maxTime * 100;
  var previousX = 0;
  var previousWidth = 0;
  var chartAttributes = [];
  Object.keys(TIMINGS).forEach(function (key) {
    var timingInfo = TIMINGS[key];
    var value = data[timingInfo.dataKey];

    if (value <= 0) {
      return;
    }

    previousX += !previousWidth ? startTimePercent : previousWidth;
    previousWidth = value > 0 ? value / maxTime * 100 : 0;
    chartAttributes.push({
      width: "".concat(previousWidth, "%"),
      y: index ? index % 10 * (TIMELINE_DATA_POINT_HEIGHT + 1) + 40 : cy,
      x: "".concat(previousX, "%"),
      fill: timingInfo.fill,
      key: key
    });
  });
  return chartAttributes;
};
var findIndexNearTimestamp = function findIndexNearTimestamp(data, exactTimestamp) {
  return data.reduce(function (_ref14, _ref15) {
    var value = _ref14.value,
        index = _ref14.index;
    var currentValue = _ref15.startedDateTime,
        currentIndex = _ref15.index;
    return Math.abs(currentValue - exactTimestamp) < Math.abs(value - exactTimestamp) ? {
      value: currentValue,
      index: currentIndex
    } : {
      value: value,
      index: index
    };
  }, {
    value: 0,
    index: 0
  }).index;
};
var findIndexBeforeTimestamp = function findIndexBeforeTimestamp(data, exactTimestamp) {
  var resultIndex = data.reverse().findIndex(function (_ref16) {
    var startedDateTime = _ref16.startedDateTime;
    return startedDateTime <= exactTimestamp;
  });
  return resultIndex < 0 ? 0 : data.size - (resultIndex + 1);
};
var findIndexAfterTimestamp = function findIndexAfterTimestamp(data, exactTimestamp) {
  return data.findIndex(function (_ref17) {
    var startedDateTime = _ref17.startedDateTime;
    return startedDateTime >= exactTimestamp;
  });
};
var findRequestIndex = function findRequestIndex(_ref18) {
  var data = _ref18.data,
      timestamp = _ref18.timestamp,
      position = _ref18.position;

  switch (position) {
    case 'before':
      return findIndexBeforeTimestamp(data, timestamp);

    case 'after':
      return findIndexAfterTimestamp(data, timestamp);

    case 'near':
    default:
      return findIndexNearTimestamp(data, timestamp);
  }
};
var calculateTimings = function calculateTimings(pages) {
  return pages.reduce(function (_ref19, _ref20) {
    var DOMContentLoaded = _ref19.DOMContentLoaded,
        onLoad = _ref19.onLoad;
    var pageTimings = _ref20.pageTimings;
    return {
      DOMContentLoaded: DOMContentLoaded + pageTimings.onContentLoad,
      onLoad: onLoad + pageTimings.onLoad
    };
  }, {
    DOMContentLoaded: 0,
    onLoad: 0
  });
};
var getSummary = function getSummary(data) {
  return data.reduce(function (acc, req) {
    acc.totalTransferredSize += req.transferredSize;
    acc.totalUncompressedSize += req.uncompressedSize;
    return acc;
  }, {
    totalTransferredSize: 0,
    totalUncompressedSize: 0,
    totalRequests: data.size
  });
};
var parseRequestPayload = function parseRequestPayload(text) {
  var parsedJson = text;

  try {
    parsedJson = JSON.stringify(JSON.parse(text), null, 2);
  } catch (err) {
    parsedJson = text;
  }

  return parsedJson;
};

var UPDATE_DATA = 'UPDATE_DATA';
var UPDATE_SEARCH = 'UPDATE_SEARCH';
var UPDATE_SORT = 'UPDATE_SORT';
var UPDATE_FILTER = 'UPDATE_FILTER';
var UPDATE_ERROR_FILTER = 'UPDATE_ERROR_FILTER';
var UPDATE_ERROR_MESSAGE = 'UPDATE_ERROR_MESSAGE';
var UPDATE_SCROLL_TO_INDEX = 'UPDATE_SCROLL_TO_INDEX';
var SELECT_REQUEST = 'SELECT_REQUEST';
var FETCH_FILE = {
  REQUEST: 'FETCH_FILE_REQUEST',
  SUCCESS: 'FETCH_FILE_SUCCESS',
  FAILURE: 'FETCH_FILE_FAILURE'
};
var RESET = 'RESET';

var initialState = new immutable.Map({
  data: new immutable.List(),
  actualData: new immutable.List(),
  totalNetworkTime: null,
  dataSummary: new immutable.Map(),
  sort: {
    key: 'startedDateTime',
    isAcs: true
  },
  search: {
    name: 'url',
    value: ''
  },
  filter: {
    name: null,
    value: null
  },
  errorFilter: false,
  error: null,
  loading: false,
  scrollToIndex: null,
  selectedReqIndex: null,
  showReqDetail: false,
  reqDetail: null
});

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case UPDATE_DATA:
      {
        return state.withMutations(function (newState) {
          var sort = state.get('sort');

          var _prepareViewerData = prepareViewerData(payload.entries),
              data = _prepareViewerData.data,
              totalNetworkTime = _prepareViewerData.totalNetworkTime,
              totalRequests = _prepareViewerData.totalRequests,
              totalTransferredSize = _prepareViewerData.totalTransferredSize,
              totalUncompressedSize = _prepareViewerData.totalUncompressedSize,
              finishTime = _prepareViewerData.finishTime;

          var sortedData = new immutable.List(sortBy(data, sort.key, sort.isAcs));
          newState.set('error', null).set('data', sortedData).set('actualData', sortedData).set('totalNetworkTime', totalNetworkTime).set('dataSummary', new immutable.Map({
            totalRequests: totalRequests,
            totalTransferredSize: totalTransferredSize,
            totalUncompressedSize: totalUncompressedSize,
            finishTime: finishTime,
            timings: calculateTimings(payload.pages),
            finish: finishTime
          }));
        });
      }

    case UPDATE_SEARCH:
      {
        return state.withMutations(function (newState) {
          var data = filterData({
            data: state.get('actualData'),
            filter: state.get('filter'),
            search: payload,
            errorFilter: state.get('errorFilter')
          });
          var summary = getSummary(data);
          newState.set('search', payload).set('data', data).setIn(['dataSummary', 'totalRequests'], summary.totalRequests).setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize).setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
        });
      }

    case UPDATE_FILTER:
      {
        return state.withMutations(function (newState) {
          var data = filterData({
            data: state.get('actualData'),
            filter: payload,
            search: state.get('search'),
            errorFilter: state.get('errorFilter')
          });
          var summary = getSummary(data);
          newState.set('filter', payload).set('data', data).setIn(['dataSummary', 'totalRequests'], summary.totalRequests).setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize).setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
        });
      }

    case UPDATE_ERROR_FILTER:
      {
        return state.withMutations(function (newState) {
          var data = filterData({
            data: state.get('actualData'),
            filter: state.get('filter'),
            search: state.get('search'),
            errorFilter: payload
          });
          var summary = getSummary(data);
          newState.set('errorFilter', payload).set('data', data).setIn(['dataSummary', 'totalRequests'], summary.totalRequests).setIn(['dataSummary', 'totalTransferredSize'], summary.totalTransferredSize).setIn(['dataSummary', 'totalUncompressedSize'], summary.totalUncompressedSize);
        });
      }

    case UPDATE_SORT:
      {
        return state.withMutations(function (newState) {
          newState.set('sort', payload).set('data', sortBy(state.get('data'), payload.key, payload.isAcs));
        });
      }

    case FETCH_FILE.REQUEST:
      {
        return state.withMutations(function (newState) {
          newState.set('error', null).set('loading', true);
        });
      }

    case FETCH_FILE.SUCCESS:
      {
        return state.withMutations(function (newState) {
          newState.set('error', null).set('loading', false);
        });
      }

    case FETCH_FILE.FAILURE:
    case UPDATE_ERROR_MESSAGE:
      {
        return state.withMutations(function (newState) {
          newState.set('error', payload).set('loading', false);
        });
      }

    case UPDATE_SCROLL_TO_INDEX:
      {
        return state.withMutations(function (newState) {
          newState.set('selectedReqIndex', payload ? payload.index : null).set('reqDetail', payload);
        });
      }

    case SELECT_REQUEST:
      {
        return state.withMutations(function (newState) {
          newState.set('selectedReqIndex', payload ? payload.index : null).set('reqDetail', payload).set('showReqDetail', !!payload);
        });
      }

    case RESET:
      {
        return initialState;
      }

    default:
      return state;
  }
};

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

var NetworkContext = React__default.createContext();
var useNetwork = function useNetwork() {
  var context = React.useContext(NetworkContext);

  if (!context) {
    throw new Error('useNetwork must be used within a NetworkProvider');
  }

  var _context = _slicedToArray(context, 2),
      state = _context[0],
      dispatch = _context[1];

  var wrappedActions = actionsWrapper({
    updateData: updateData,
    updateSearch: updateSearch,
    updateSort: updateSort,
    updateFilter: updateFilter,
    updateErrorMessage: updateErrorMessage,
    selectRequest: selectRequest,
    updateScrollToIndex: updateScrollToIndex,
    updateErrorFilter: updateErrorFilter,
    resetState: resetState
  })(dispatch, state);
  return {
    state: state,
    dispatch: dispatch,
    actions: wrappedActions
  };
};

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

  var _useReducer = React.useReducer(reducer, initialState),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var value = React.useMemo(function () {
    return [state, dispatch];
  }, [state]);
  var selectedReqIndex = value[0].get('selectedReqIndex');
  var requestData = value[0].get('data');
  var showReqDetail = value[0].get('showReqDetail');
  var actualData = value[0].get('actualData');
  var error = value[0].get('error'); // Update data onChange of network data

  React.useEffect(function () {
    if (data && data.log && data.log.entries) {
      updateData(dispatch)({
        entries: data.log.entries,
        pages: data.log.pages
      });
    }
  }, [data]); // Fetch HAR file onChange of file prop

  React.useEffect(function () {
    if (file) {
      fetchFile(dispatch)(file, fetchOptions);
    }
  }, [file]);
  React.useEffect(function () {
    if (actualData.size && onDataLoaded) {
      onDataLoaded(actualData);
    }
  }, [actualData]);
  React.useEffect(function () {
    if (error && onDataError) {
      onDataError(error);
    }
  }, [error]); // Find nearby request-rowId and update scrollIndex on scrollTimeStamp receive

  React.useEffect(function () {
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

  React.useEffect(function () {
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
  return /*#__PURE__*/React__default.createElement(NetworkContext.Provider, _extends({
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

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".ImportHAR-styles__drag-drop___3I6Pe{display:flex;height:100%;min-height:300px;align-items:center;justify-content:center;border:2px dashed #ccc;border-radius:4px;font-size:18px;margin:1rem;cursor:pointer;color:#7f8892}.ImportHAR-styles__drag-drop___3I6Pe:hover{border-color:#bfbfbf;color:#555}";
var Styles = {"brandBlue":"#1395f0","drag-drop":"ImportHAR-styles__drag-drop___3I6Pe"};
styleInject(css_248z);

var css_248z$1 = ".Button-styles__btn___2qZbU{display:inline-block;font-weight:400;text-align:center;vertical-align:middle;cursor:pointer;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:11px 32px;font-size:1rem;line-height:1.5;text-decoration:none;text-shadow:none;text-transform:none;box-sizing:border-box;margin:0;background-image:none;background-color:#1395f0;color:#fff;border:1px solid transparent;border-radius:4px;transition:background-color .2s}.Button-styles__btn___2qZbU:hover{text-decoration:none}.Button-styles__btn___2qZbU:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.Button-styles__btn___2qZbU[disabled]{cursor:not-allowed;color:#d8dde3;border-color:#d8dde3}.Button-styles__btn___2qZbU[disabled] svg{fill:#d8dde3}.Button-styles__btn___2qZbU[disabled]:hover{border-color:#bac3ce}.Button-styles__btn-sm___1uF90{padding:8px 16px;font-size:.9rem;height:26px}.Button-styles__btn-md-default___3h9sN{display:inline-flex;align-items:center;font-weight:400;height:36px;line-height:1;letter-spacing:0;overflow:hidden;vertical-align:middle;will-change:box-shadow;text-decoration:none;border-radius:2px;transition:box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1),color .2s cubic-bezier(.4,0,.2,1)}.Button-styles__active___l-2CD.Button-styles__btn-md-default___3h9sN,.Button-styles__btn-md-default___3h9sN,.Button-styles__btn-md-default___3h9sN:active,.Button-styles__btn-md-default___3h9sN:disabled,.Button-styles__btn-md-default___3h9sN:focus,.Button-styles__btn-md-default___3h9sN:hover{background-color:transparent;border-color:transparent;outline:none}.Button-styles__btn-md-default___3h9sN:disabled{color:#555}.Button-styles__btn-md-default___3h9sN:hover{background-color:hsla(0,0%,62%,.2)}.Button-styles__btn-md-default___3h9sN:active{background-color:hsla(0,0%,62%,.4)}.Button-styles__btn-md-default___3h9sN:focus:not(:active){background-color:rgba(0,0,0,.12)}.Button-styles__btn-md-default___3h9sN svg{fill:currentColor}.Button-styles__btn-md-raised___3D_5d{box-shadow:0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12)}.Button-styles__btn-md-raised___3D_5d:active{box-shadow:0 4px 5px 0 rgba(0,0,0,.14),0 2px 12px 0 rgba(0,0,0,.12),0 2px 4px -1px rgba(0,0,0,.2)}.Button-styles__btn-md-default___3h9sN{color:#7f8892}.Button-styles__btn-md-default-raised___r1o6a{color:#fff;background:#7f8892}.Button-styles__btn-md-default-raised___r1o6a:active,.Button-styles__btn-md-default-raised___r1o6a:focus:not(:active),.Button-styles__btn-md-default-raised___r1o6a:hover{background:#7f8892}.Button-styles__btn-md-default___3h9sN.Button-styles__btn-sm___1uF90{height:26px}";
var Styles$1 = {"brandBlue":"#1395f0","btn":"Button-styles__btn___2qZbU","btn-sm":"Button-styles__btn-sm___1uF90","btn-md-default":"Button-styles__btn-md-default___3h9sN","active":"Button-styles__active___l-2CD","btn-md-raised":"Button-styles__btn-md-raised___3D_5d","btn-md-default-raised":"Button-styles__btn-md-default-raised___r1o6a"};
styleInject(css_248z$1);

var context = classNames.bind(Styles$1);

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
  return /*#__PURE__*/React__default.createElement(TagName, _extends({
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

  var _useDropzone = reactDropzone.useDropzone(_objectSpread2(_objectSpread2({}, DROP_FILE_CONFIG), {}, {
    onDrop: onDrop
  })),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  return /*#__PURE__*/React__default.createElement("div", getRootProps(), /*#__PURE__*/React__default.createElement("input", getInputProps()), showButton ? /*#__PURE__*/React__default.createElement(Button, {
    category: "default",
    className: className,
    material: true,
    raised: true,
    size: "sm"
  }, "Import HAR") : /*#__PURE__*/React__default.createElement("p", {
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

var css_248z$2 = ".Search-styles__search-container___1GtPv{margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%}.Search-styles__search-container___1GtPv .Search-styles__prepend-dropdown___1EV-n{display:flex;margin-right:-1px}.Search-styles__search-container___1GtPv input{border-radius:.2rem;border-top-left-radius:0;border-bottom-left-radius:0;height:26px;padding:.25rem .5rem;font-size:.875rem;line-height:1.5;position:relative;flex:1 1 auto;width:1%;margin-bottom:0;color:#646464;background-color:#fff;background-clip:padding-box;border:1px solid #ccc}";
var Styles$2 = {"brandBlue":"#1395f0","search-container":"Search-styles__search-container___1GtPv","prepend-dropdown":"Search-styles__prepend-dropdown___1EV-n"};
styleInject(css_248z$2);

var css_248z$3 = ".Dropdown-styles__dropdown-container___14JiD{position:relative}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__dropdown-toggle___N8nwZ{border:1px solid #ccc;text-transform:uppercase}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__dropdown-toggle___N8nwZ.Dropdown-styles__active___3sdPa{border-color:transparent}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__dropdown-toggle___N8nwZ:after{display:inline-block;margin-left:.255em;vertical-align:.255em;content:\"\";border-top:.3em solid;border-right:.3em solid transparent;border-bottom:0;border-left:.3em solid transparent;box-sizing:border-box}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__list___26z00{z-index:1000;float:left;min-width:10rem;margin:.125rem 0 0;font-size:1rem;color:#212529;text-align:left;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border-radius:.25rem;position:absolute;will-change:transform;top:0;left:0;transform:translate3d(-1px,23px,0);list-style:none;padding:0}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__list-item___2IKv5{padding:0;display:block;width:100%;clear:both;font-weight:400;text-align:inherit;white-space:nowrap;background:transparent;border:0}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__list-item___2IKv5.Dropdown-styles__active___3sdPa{background:#7f8892;color:#fff}.Dropdown-styles__dropdown-container___14JiD .Dropdown-styles__item-text___1HTaj{display:block;cursor:pointer;padding:.25rem 1.5rem;text-transform:uppercase}";
var Styles$3 = {"brandBlue":"#1395f0","dropdown-container":"Dropdown-styles__dropdown-container___14JiD","dropdown-toggle":"Dropdown-styles__dropdown-toggle___N8nwZ","active":"Dropdown-styles__active___3sdPa","list":"Dropdown-styles__list___26z00","list-item":"Dropdown-styles__list-item___2IKv5","item-text":"Dropdown-styles__item-text___1HTaj"};
styleInject(css_248z$3);

var context$1 = classNames.bind(Styles$3);

var Dropdown = function Dropdown(_ref) {
  var items = _ref.items,
      selected = _ref.selected,
      onChange = _ref.onChange,
      className = _ref.className;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isExpand = _useState2[0],
      setExpand = _useState2[1];

  var _useState3 = React.useState(selected !== null ? selected : items[0]),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedKey = _useState4[0],
      setSelection = _useState4[1];

  var dropdownItemsRef = React.useRef(null);
  var isExpandRef = React.useRef(isExpand);

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

  React.useEffect(function () {
    window.addEventListener('click', removeFocus);
    return function () {
      window.removeEventListener('click', removeFocus);
    };
  }, []);
  return /*#__PURE__*/React__default.createElement("span", {
    ref: dropdownItemsRef,
    className: context$1('dropdown-container', className, {
      expanded: isExpand
    })
  }, /*#__PURE__*/React__default.createElement(Button, {
    category: "default",
    className: context$1('dropdown-toggle', {
      active: isExpand
    }),
    material: true,
    onClick: function onClick() {
      return updateToggle(!isExpand);
    },
    raised: isExpand,
    size: "sm"
  }, selectedKey), isExpand && /*#__PURE__*/React__default.createElement("ul", {
    className: Styles$3.list
  }, items.map(function (text, index) {
    return /*#__PURE__*/React__default.createElement("li", {
      key: text,
      className: context$1('list-item', {
        active: text === selectedKey
      })
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$3['item-text'],
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

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$2['search-container']
  }, /*#__PURE__*/React__default.createElement(Dropdown, {
    className: Styles$2['prepend-dropdown'],
    items: SEARCH_CATEGORY,
    onChange: handleDropdownChange,
    selected: "url"
  }), /*#__PURE__*/React__default.createElement("input", {
    className: Styles$2.input,
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

var css_248z$4 = ".FilterContainer-styles__filters-container___d2ms5{background:#f7f7f7;padding:8px 16px;border-bottom:1px solid #ccc}.FilterContainer-styles__filters-button-group___3bOC-{display:inline-flex;justify-content:flex-end;vertical-align:middle;width:100%}.FilterContainer-styles__filters-button-group___3bOC- .FilterContainer-styles__addon-action-button___a_eze,.FilterContainer-styles__filters-button-group___3bOC- .FilterContainer-styles__filter-button___1_3tn{flex:1 1 auto;padding:.25rem .5rem;justify-content:center}.FilterContainer-styles__filters-button-group___3bOC- .FilterContainer-styles__filter-button___1_3tn{color:#7f8892}.FilterContainer-styles__filters-button-group___3bOC- .FilterContainer-styles__addon-action-button___a_eze{margin-left:16px}.FilterContainer-styles__filters-button-group___3bOC- .FilterContainer-styles__selected-filter___eCIzJ{background:#ccc!important;box-shadow:none}";
var Styles$4 = {"brandBlue":"#1395f0","filters-container":"FilterContainer-styles__filters-container___d2ms5","filters-button-group":"FilterContainer-styles__filters-button-group___3bOC-","filter-button":"FilterContainer-styles__filter-button___1_3tn","addon-action-button":"FilterContainer-styles__addon-action-button___a_eze","selected-filter":"FilterContainer-styles__selected-filter___eCIzJ"};
styleInject(css_248z$4);

var ThemeContext = React__default.createContext(NETWORK_VIEWER_DEFAULT_OPTIONS);
var useTheme = function useTheme() {
  var context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeContext');
  }

  return context;
};
var ThemeProvider = function ThemeProvider(props) {
  var options = props.options;

  var finalOptions = _objectSpread2(_objectSpread2({}, NETWORK_VIEWER_DEFAULT_OPTIONS), options);

  return /*#__PURE__*/React__default.createElement(ThemeContext.Provider, _extends({
    value: finalOptions
  }, props));
};
ThemeProvider.propTypes = {
  options: PropTypes.object
};
ThemeProvider.defaultProps = {
  options: NETWORK_VIEWER_DEFAULT_OPTIONS
};

var css_248z$5 = ".Checkbox-styles__checkbox-container___14zzo{padding:2px 0 0 24px;text-align:right;min-width:110px}.Checkbox-styles__checkbox-container___14zzo .Checkbox-styles__checkbox-label___1XXJb{font-style:normal;font-weight:400;color:#7f8892;cursor:pointer;text-transform:none;margin:0}.Checkbox-styles__checkbox-container___14zzo .Checkbox-styles__checkbox___2VBTh{margin-right:4px;cursor:pointer}";
var Styles$5 = {"brandBlue":"#1395f0","checkbox-container":"Checkbox-styles__checkbox-container___14zzo","checkbox-label":"Checkbox-styles__checkbox-label___1XXJb","checkbox":"Checkbox-styles__checkbox___2VBTh"};
styleInject(css_248z$5);

var context$2 = classNames.bind(Styles$5);

var Checkbox = function Checkbox(_ref) {
  var containerClassName = _ref.containerClassName,
      isChecked = _ref.isChecked,
      onChange = _ref.onChange,
      children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/React__default.createElement("div", {
    className: context$2('checkbox-container', containerClassName)
  }, /*#__PURE__*/React__default.createElement("label", {
    className: Styles$5['checkbox-label'],
    title: title
  }, /*#__PURE__*/React__default.createElement("input", {
    checked: isChecked,
    className: Styles$5.checkbox,
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

var ErrorFilter = function ErrorFilter(_ref) {
  var isError = _ref.isError,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    onChange(!isError);
  };

  return /*#__PURE__*/React__default.createElement(Checkbox, {
    isChecked: isError,
    onChange: handleChange,
    title: "error"
  }, "Errors Only");
};

ErrorFilter.propTypes = {
  isError: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

var Reset = function Reset(_ref) {
  var className = _ref.className,
      onReset = _ref.onReset;

  var handleURLReset = function handleURLReset() {
    window.history.pushState({}, document.title, '/');
  };

  var handleReset = function handleReset() {
    handleURLReset();
    onReset();
  };

  return /*#__PURE__*/React__default.createElement(Button, {
    category: "default",
    className: className,
    material: true,
    onClick: handleReset,
    raised: true,
    size: "sm"
  }, "Reset");
};

Reset.propTypes = {
  className: PropTypes.string,
  onReset: PropTypes.func.isRequired
};
Reset.defaultProps = {
  className: ''
};

var context$3 = classNames.bind(Styles$4);

var FilterContainer = function FilterContainer() {
  var _useNetwork = useNetwork(),
      state = _useNetwork.state,
      actions = _useNetwork.actions;

  var _useTheme = useTheme(),
      showImportHAR = _useTheme.showImportHAR;

  var filter = state.get('filter');
  var filterByError = state.get('errorFilter');
  return /*#__PURE__*/React__default.createElement("section", {
    className: Styles$4['filters-container']
  }, /*#__PURE__*/React__default.createElement(reactFlexboxGrid.Row, null, /*#__PURE__*/React__default.createElement(reactFlexboxGrid.Col, {
    md: 5,
    sm: 4,
    xs: 12
  }, /*#__PURE__*/React__default.createElement(Search, _extends({}, state.get('search'), {
    onChange: actions.updateSearch
  }))), /*#__PURE__*/React__default.createElement(reactFlexboxGrid.Col, {
    md: 7,
    sm: 8,
    xs: 12
  }, /*#__PURE__*/React__default.createElement("div", {
    className: Styles$4['filters-button-group']
  }, FILTERS.map(function (_ref) {
    var name = _ref.name,
        filterBy = _ref.filterBy;
    var selectedFilter = filterBy.value === filter.value;
    var buttonStyle = context$3('filter-button', {
      'selected-filter': selectedFilter
    });
    return /*#__PURE__*/React__default.createElement(Button, {
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
  }), /*#__PURE__*/React__default.createElement(ErrorFilter, {
    isError: filterByError,
    onChange: actions.updateErrorFilter
  }), showImportHAR && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ImportHar, {
    className: Styles$4['addon-action-button']
  }), /*#__PURE__*/React__default.createElement(Reset, {
    className: Styles$4['addon-action-button'],
    onReset: actions.resetState
  }))))));
};

var css_248z$6 = ".NetworkTableHeader-styles__value-cell___3cYwS .NetworkTableHeader-styles__value-text___2j6c-{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;word-break:break-all}.NetworkTableHeader-styles__thead___3yU_z tr th{text-align:left;height:32px}.NetworkTableHeader-styles__value-cell___3cYwS{width:7%;box-sizing:border-box;height:32px}.NetworkTableHeader-styles__value-cell___3cYwS.NetworkTableHeader-styles__filename___2g5vE{width:30%}.NetworkTableHeader-styles__value-cell___3cYwS.NetworkTableHeader-styles__domain___2x8Yp{max-width:10%}.NetworkTableHeader-styles__value-cell___3cYwS .NetworkTableHeader-styles__value-text___2j6c-{display:inline-block;width:100%}.NetworkTableHeader-styles__timeline-header___2tIGm{width:25%}tbody .NetworkTableHeader-styles__network-table-row___1WaPe{cursor:pointer}tbody .NetworkTableHeader-styles__network-table-row___1WaPe:nth-of-type(odd){background-color:#f7f7f7}tbody .NetworkTableHeader-styles__network-table-row___1WaPe.NetworkTableHeader-styles__pending___3QqQp{color:#aaa}tbody .NetworkTableHeader-styles__network-table-row___1WaPe.NetworkTableHeader-styles__error___3zf2U{color:#eb3f47}tbody .NetworkTableHeader-styles__network-table-row___1WaPe:hover{background:#e6e6e6}tbody .NetworkTableHeader-styles__network-table-row___1WaPe.NetworkTableHeader-styles__highlight___1E9Nq{background:#5c7288;color:#fff}.NetworkTableHeader-styles__tooltip___1d3Jl,.NetworkTableHeader-styles__url-tooltip___QHFP_{display:block;width:auto;max-width:300px;height:auto;background:#fff;border:1px solid #e6e6e6;border-radius:3px;color:#333;font-size:12px;padding:8px;opacity:1;word-break:break-all}.NetworkTableHeader-styles__url-tooltip___QHFP_{background:#000;color:#fff}";
var Styles$6 = {"brandBlue":"#1395f0","value-cell":"NetworkTableHeader-styles__value-cell___3cYwS","value-text":"NetworkTableHeader-styles__value-text___2j6c-","thead":"NetworkTableHeader-styles__thead___3yU_z","filename":"NetworkTableHeader-styles__filename___2g5vE","domain":"NetworkTableHeader-styles__domain___2x8Yp","timeline-header":"NetworkTableHeader-styles__timeline-header___2tIGm","network-table-row":"NetworkTableHeader-styles__network-table-row___1WaPe","pending":"NetworkTableHeader-styles__pending___3QqQp","error":"NetworkTableHeader-styles__error___3zf2U","highlight":"NetworkTableHeader-styles__highlight___1E9Nq","tooltip":"NetworkTableHeader-styles__tooltip___1d3Jl","url-tooltip":"NetworkTableHeader-styles__url-tooltip___QHFP_"};
styleInject(css_248z$6);

var context$4 = classNames.bind(Styles$6);

var NetworkTableHeader = function NetworkTableHeader() {
  return /*#__PURE__*/React__default.createElement("thead", {
    className: Styles$6.thead
  }, /*#__PURE__*/React__default.createElement("tr", null, Object.entries(VIEWER_FIELDS).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        datakey = _ref2[0],
        _ref2$ = _ref2[1],
        key = _ref2$.key,
        name = _ref2$.name;

    return /*#__PURE__*/React__default.createElement("th", {
      key: datakey,
      className: context$4('value-cell', key)
    }, name);
  }), /*#__PURE__*/React__default.createElement("th", {
    className: Styles$6['timeline-header']
  }, "Waterfall")));
};

var css_248z$7 = ".TimeChartTooltip-styles__tooltip___3wPai{display:block;width:300px;height:auto;background:#fff;border:1px solid #ccc;border-radius:3px;color:#555;font-size:12px;padding:8px;opacity:1}.Popover-tip{display:none}.TimeChartTooltip-styles__tooltip-info___G5Dxy{margin-bottom:16px}.TimeChartTooltip-styles__tooltip-info___G5Dxy .TimeChartTooltip-styles__time-info___hi2h6{margin:0}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY{border:0;width:100%}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-th___3f0tI,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-value___2UdbA,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-th___3f0tI,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-value___2UdbA{padding:0;border:0;background:transparent;font-weight:400;text-align:left}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-value___2UdbA,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-value___2UdbA{text-align:right}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-tr___3J2Oz:nth-of-type(odd),.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-tr___3J2Oz:nth-of-type(odd){background-color:#fff}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs{font-weight:700;padding:0 16px;position:relative}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs:before{content:\"\";position:absolute;left:0;top:4px;width:8px;height:8px}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__blocked___6wb18,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__blocked___6wb18{color:#a1000c}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__blocked___6wb18:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__blocked___6wb18:before{background:#a1000c}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__dns___1FT8l,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__dns___1FT8l{color:#dcc9e5}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__dns___1FT8l:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__dns___1FT8l:before{background:#dcc9e5}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__ssl___1uR9J,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__ssl___1uR9J{color:#e78057}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__ssl___1uR9J:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__ssl___1uR9J:before{background:#e78057}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__connect___1v_2x,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__connect___1v_2x{color:#db8553}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__connect___1v_2x:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__connect___1v_2x:before{background:#db8553}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__send___LV5fC,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__send___LV5fC{color:#3c96c4}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__send___LV5fC:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__send___LV5fC:before{background:#3c96c4}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__wait___1v8j_,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__wait___1v8j_{color:#7ca0bf}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__wait___1v8j_:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__wait___1v8j_:before{background:#7ca0bf}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__receive___2LaWR,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__receive___2LaWR{color:#65b955}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__receive___2LaWR:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__receive___2LaWR:before{background:#65b955}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__queueing___36Nu9,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__queueing___36Nu9{color:#ccc}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__queueing___36Nu9:before,.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs.TimeChartTooltip-styles__queueing___36Nu9:before{background:#ccc}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-th___3f0tI{padding-bottom:8px;color:grey}.TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY .TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9 .TimeChartTooltip-styles__waterfall-tooltip-th___3f0tI:nth-child(2){text-align:right}";
var Styles$7 = {"brandBlue":"#1395f0","tooltip":"TimeChartTooltip-styles__tooltip___3wPai","tooltip-info":"TimeChartTooltip-styles__tooltip-info___G5Dxy","time-info":"TimeChartTooltip-styles__time-info___hi2h6","waterfall-tooltip-table":"TimeChartTooltip-styles__waterfall-tooltip-table___1NGXY","waterfall-tooltip-tbody":"TimeChartTooltip-styles__waterfall-tooltip-tbody___11K0k","waterfall-tooltip-value":"TimeChartTooltip-styles__waterfall-tooltip-value___2UdbA","waterfall-tooltip-key":"TimeChartTooltip-styles__waterfall-tooltip-key___2SOfs","waterfall-tooltip-th":"TimeChartTooltip-styles__waterfall-tooltip-th___3f0tI","waterfall-tooltip-thead":"TimeChartTooltip-styles__waterfall-tooltip-thead___A3lO9","waterfall-tooltip-tr":"TimeChartTooltip-styles__waterfall-tooltip-tr___3J2Oz","blocked":"TimeChartTooltip-styles__blocked___6wb18","dns":"TimeChartTooltip-styles__dns___1FT8l","ssl":"TimeChartTooltip-styles__ssl___1uR9J","connect":"TimeChartTooltip-styles__connect___1v_2x","send":"TimeChartTooltip-styles__send___LV5fC","wait":"TimeChartTooltip-styles__wait___1v8j_","receive":"TimeChartTooltip-styles__receive___2LaWR","queueing":"TimeChartTooltip-styles__queueing___36Nu9"};
styleInject(css_248z$7);

var context$5 = classNames.bind(Styles$7);
var DETAIL = [{
  title: 'Resource Scheduling',
  category: ['queueing']
}, {
  title: 'Connection Start',
  category: ['blocked', 'dns', 'ssl', 'connect']
}, {
  title: 'Request/Response',
  category: ['send', 'wait', 'receive']
}];

var TimeChartTooltip = function TimeChartTooltip(_ref) {
  var data = _ref.data;
  var tooltipData = React.useMemo(function () {
    return !data ? null : prepareTooltipData(data);
  }, [data]);

  if (!tooltipData) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$7.tooltip
  }, /*#__PURE__*/React__default.createElement("section", {
    className: Styles$7['tooltip-info']
  }, /*#__PURE__*/React__default.createElement("p", {
    className: Styles$7['time-info']
  }, "Queued at ".concat(tooltipData.queuedAt)), /*#__PURE__*/React__default.createElement("p", {
    className: Styles$7['time-info']
  }, "Started at ".concat(tooltipData.startedAt))), DETAIL.map(function (_ref2) {
    var title = _ref2.title,
        category = _ref2.category;
    return /*#__PURE__*/React__default.createElement("section", {
      key: title,
      className: Styles$7['tooltip-info']
    }, /*#__PURE__*/React__default.createElement("table", {
      className: Styles$7['waterfall-tooltip-table']
    }, /*#__PURE__*/React__default.createElement("thead", {
      className: Styles$7['waterfall-tooltip-thead']
    }, /*#__PURE__*/React__default.createElement("tr", {
      className: Styles$7['waterfall-tooltip-tr']
    }, /*#__PURE__*/React__default.createElement("th", {
      className: Styles$7['waterfall-tooltip-th']
    }, title), /*#__PURE__*/React__default.createElement("th", {
      className: Styles$7['waterfall-tooltip-th']
    }, "DURATION"))), /*#__PURE__*/React__default.createElement("tbody", {
      className: Styles$7['waterfall-tooltip-tbody']
    }, category.map(function (key) {
      return /*#__PURE__*/React__default.createElement("tr", {
        key: key,
        className: Styles$7['waterfall-tooltip-tr']
      }, /*#__PURE__*/React__default.createElement("td", {
        className: context$5('waterfall-tooltip-key', key)
      }, TIMINGS[key].name), /*#__PURE__*/React__default.createElement("td", {
        className: Styles$7['waterfall-tooltip-value']
      }, tooltipData[TIMINGS[key].dataKey]));
    }))));
  }), /*#__PURE__*/React__default.createElement("section", {
    className: Styles$7['tooltip-info']
  }, /*#__PURE__*/React__default.createElement("p", {
    className: Styles$7['time-info']
  }, "Total time ".concat(tooltipData.totalTime))));
};

TimeChartTooltip.propTypes = {
  data: PropTypes.object.isRequired
};

var TimeChart = function TimeChart(_ref) {
  var timings = _ref.timings,
      maxTime = _ref.maxTime;
  var chartAttributes = React.useMemo(function () {
    return calcChartAttributes(timings, maxTime);
  }, [timings, maxTime]);

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      updateOpen = _useState2[1];

  var displayPopover = function displayPopover() {
    return updateOpen(true);
  };

  var hidePopover = function hidePopover() {
    return updateOpen(false);
  };

  return /*#__PURE__*/React__default.createElement(Popover, {
    body: /*#__PURE__*/React__default.createElement(TimeChartTooltip, {
      data: timings
    }),
    isOpen: isOpen,
    preferPlace: "below"
  }, /*#__PURE__*/React__default.createElement("div", {
    onMouseOut: hidePopover,
    onMouseOver: displayPopover
  }, /*#__PURE__*/React__default.createElement("svg", TIME_CHART_SVG_PROPS, /*#__PURE__*/React__default.createElement("g", null, chartAttributes.map(function (chartProps) {
    return /*#__PURE__*/React__default.createElement("rect", _extends({
      key: chartProps.key
    }, chartProps, TIME_CHART_DEFAULT_PROPS));
  })))));
};

TimeChart.propTypes = {
  maxTime: PropTypes.number.isRequired,
  timings: PropTypes.object.isRequired
};

var context$6 = classNames.bind(Styles$6);

var NetworkCellValue = function NetworkCellValue(_ref) {
  var datakey = _ref.datakey,
      unit = _ref.unit,
      payload = _ref.payload;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      updateOpen = _useState2[1];

  var displayPopover = function displayPopover() {
    return updateOpen(true);
  };

  var hidePopover = function hidePopover() {
    return updateOpen(false);
  };

  var formattedValue = formatValue(datakey, payload[datakey], unit, payload);
  var shouldDisplayTooltip = datakey === VIEWER_FIELDS.file.key || payload.error;

  var getTitle = function getTitle() {
    if (datakey === VIEWER_FIELDS.file.key) {
      return payload.url;
    }

    if (payload.error) {
      return payload.error;
    }

    return formattedValue;
  };

  if (!shouldDisplayTooltip) {
    return /*#__PURE__*/React__default.createElement("td", {
      className: context$6('value-cell', datakey)
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$6['value-text']
    }, formattedValue));
  }

  return /*#__PURE__*/React__default.createElement("td", {
    className: context$6('value-cell', datakey)
  }, /*#__PURE__*/React__default.createElement(Popover, {
    body: /*#__PURE__*/React__default.createElement("span", {
      className: Styles$6['url-tooltip']
    }, getTitle()),
    isOpen: isOpen,
    preferPlace: "below"
  }, /*#__PURE__*/React__default.createElement("span", {
    className: Styles$6['value-text'],
    onMouseOut: hidePopover,
    onMouseOver: displayPopover
  }, formattedValue)));
};

NetworkCellValue.propTypes = {
  datakey: PropTypes.string.isRequired,
  payload: PropTypes.object,
  unit: PropTypes.string
};
NetworkCellValue.defaultProps = {
  payload: {},
  unit: null
};

var context$7 = classNames.bind(Styles$6);

var NetworkTableRow = function NetworkTableRow(_ref) {
  var payload = _ref.payload,
      maxTime = _ref.maxTime,
      scrollHighlight = _ref.scrollHighlight,
      onSelect = _ref.onSelect;

  var handleSelectRequest = function handleSelectRequest() {
    onSelect(payload);
  };

  var rowProps = {
    className: context$7('network-table-row', getStatusClass(payload), {
      highlight: scrollHighlight
    }),
    id: ROW_ID_PREFIX + payload.index,
    onClick: handleSelectRequest
  };
  return /*#__PURE__*/React__default.createElement("tr", rowProps, Object.entries(VIEWER_FIELDS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        datakey = _ref3[0],
        _ref3$ = _ref3[1],
        key = _ref3$.key,
        unit = _ref3$.unit;

    return /*#__PURE__*/React__default.createElement(NetworkCellValue, {
      key: datakey,
      datakey: key,
      payload: payload,
      unit: unit
    });
  }), /*#__PURE__*/React__default.createElement("td", {
    className: Styles$6['timeline-header']
  }, payload.time ? /*#__PURE__*/React__default.createElement(TimeChart, {
    maxTime: maxTime,
    timings: payload.timings
  }) : ''));
};

NetworkTableRow.propTypes = {
  maxTime: PropTypes.number.isRequired,
  onSelect: PropTypes.func.isRequired,
  payload: PropTypes.object.isRequired,
  scrollHighlight: PropTypes.bool.isRequired
};

var css_248z$8 = ".NetworkTableContainer-styles__table-container___1wuhD{flex:1 1 auto;height:100%;overflow:auto}.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL{max-width:300px}.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL .NetworkTableContainer-styles__table___ucpm3 td,.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL .NetworkTableContainer-styles__table___ucpm3 th{border-right:0}.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL .NetworkTableContainer-styles__table___ucpm3 td:first-child,.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL .NetworkTableContainer-styles__table___ucpm3 thead tr th:first-child{width:100%}.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL .NetworkTableContainer-styles__table___ucpm3 td:first-child~td,.NetworkTableContainer-styles__table-container___1wuhD.NetworkTableContainer-styles__limited-cols___2gXPL .NetworkTableContainer-styles__table___ucpm3 th:first-child~th{display:none}.NetworkTableContainer-styles__table-container___1wuhD .NetworkTableContainer-styles__table___ucpm3{width:100%;border-right:0;border-collapse:collapse;table-layout:fixed}.NetworkTableContainer-styles__table-container___1wuhD .NetworkTableContainer-styles__table___ucpm3 td,.NetworkTableContainer-styles__table-container___1wuhD .NetworkTableContainer-styles__table___ucpm3 th{padding:.3rem}.NetworkTableContainer-styles__table-container___1wuhD .NetworkTableContainer-styles__table___ucpm3 thead th{vertical-align:bottom;color:#aaa}";
var Styles$8 = {"brandBlue":"#1395f0","table-container":"NetworkTableContainer-styles__table-container___1wuhD","limited-cols":"NetworkTableContainer-styles__limited-cols___2gXPL","table":"NetworkTableContainer-styles__table___ucpm3"};
styleInject(css_248z$8);

var css_248z$9 = ".ErrorMessage-styles__error-container___2f0is{display:flex;align-items:center;justify-content:center;flex-direction:column;padding:1rem;width:100%}.ErrorMessage-styles__error-container___2f0is .ErrorMessage-styles__title___1Sa7F{color:red;font-weight:300}";
var Styles$9 = {"error-container":"ErrorMessage-styles__error-container___2f0is","title":"ErrorMessage-styles__title___1Sa7F"};
styleInject(css_248z$9);

var ErrorMessage = function ErrorMessage(_ref) {
  var title = _ref.title,
      description = _ref.description;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$9['error-container']
  }, title && /*#__PURE__*/React__default.createElement("h4", {
    className: Styles$9.title
  }, title), description && /*#__PURE__*/React__default.createElement("p", null, description));
};

ErrorMessage.propTypes = {
  description: PropTypes.any,
  title: PropTypes.any
};
ErrorMessage.defaultProps = {
  description: null,
  title: null
};

var css_248z$a = ".InputHAR-styles__input-har-container___2zXPh{margin:1rem;color:#7f8892;display:flex;flex-direction:column;align-items:center}.InputHAR-styles__input-har-container___2zXPh .InputHAR-styles__input-har-text___QPljy{font-size:18px;font-weight:400}.InputHAR-styles__input-har-container___2zXPh .InputHAR-styles__example-url___cUs_t{padding-left:4px;text-decoration:none}";
var Styles$a = {"brandBlue":"#1395f0","input-har-container":"InputHAR-styles__input-har-container___2zXPh","input-har-text":"InputHAR-styles__input-har-text___QPljy","example-url":"InputHAR-styles__example-url___cUs_t"};
styleInject(css_248z$a);

var css_248z$b = ".URLInput-styles__url-input-container___2MlSR{margin:0;position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:100%;max-width:992px}.URLInput-styles__url-input-container___2MlSR .URLInput-styles__postpend-button___YSAFG{display:flex;margin-left:-1px;height:auto}.URLInput-styles__url-input-container___2MlSR .URLInput-styles__input___2PhRW{border-radius:.2rem;border-top-right-radius:0;border-bottom-right-radius:0;height:26px;padding:.25rem .5rem;font-size:.875rem;line-height:1.5;position:relative;flex:1 1 auto;width:1%;margin-bottom:0;color:#646464;background-color:#fff;background-clip:padding-box;border:1px solid #ccc}";
var Styles$b = {"brandBlue":"#1395f0","url-input-container":"URLInput-styles__url-input-container___2MlSR","postpend-button":"URLInput-styles__postpend-button___YSAFG","input":"URLInput-styles__input___2PhRW"};
styleInject(css_248z$b);

var css_248z$c = ".CORSCheckbox-styles__cors-container___3WSOL{display:flex;min-width:50px;width:auto;padding:0 1rem 0 0;align-items:center}";
var Styles$c = {"cors-container":"CORSCheckbox-styles__cors-container___3WSOL"};
styleInject(css_248z$c);

var CORSCheckbox = function CORSCheckbox(_ref) {
  var isEnabled = _ref.isEnabled,
      onChange = _ref.onChange;

  var handleChange = function handleChange() {
    onChange(!isEnabled);
  };

  return /*#__PURE__*/React__default.createElement(Checkbox, {
    containerClassName: Styles$c['cors-container'],
    isChecked: isEnabled,
    onChange: handleChange,
    title: "CORS Enable"
  }, "CORS");
};

CORSCheckbox.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};

var URLInput = function URLInput(_ref) {
  var onSubmit = _ref.onSubmit;

  var _useState = React.useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setURL = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isCORSEnabled = _useState4[0],
      setCORS = _useState4[1];

  var handleInputChange = function handleInputChange(_ref2) {
    var target = _ref2.target;
    setURL(target.value);
  };

  var handleSubmit = function handleSubmit() {
    onSubmit({
      file: url,
      isCORSEnabled: isCORSEnabled
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$b['url-input-container']
  }, /*#__PURE__*/React__default.createElement(CORSCheckbox, {
    isEnabled: isCORSEnabled,
    onChange: setCORS
  }), /*#__PURE__*/React__default.createElement("input", {
    className: Styles$b.input,
    onChange: handleInputChange,
    placeholder: "HAR file URL",
    type: "text",
    value: url
  }), /*#__PURE__*/React__default.createElement(Button, {
    category: "default",
    className: Styles$b['postpend-button'],
    material: true,
    onClick: handleSubmit,
    raised: true,
    size: "sm"
  }, "GO"));
};

URLInput.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

var SAMPLE_HAR_URL = 'https://raw.githubusercontent.com/saucelabs/network-viewer/main/examples/src/data/network.har';

var InputHAR = function InputHAR() {
  var handleURLSubmit = function handleURLSubmit(fetchInfo) {
    var _document$location = document.location,
        origin = _document$location.origin,
        pathname = _document$location.pathname;
    var newURL = "".concat(origin).concat(pathname, "?").concat(qs.stringify(fetchInfo));
    document.location.href = newURL;
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$a['input-har-container']
  }, /*#__PURE__*/React__default.createElement("h4", {
    className: Styles$a['input-har-text']
  }, "OR add HAR file URL in the below input box"), /*#__PURE__*/React__default.createElement(URLInput, {
    onSubmit: handleURLSubmit
  }), /*#__PURE__*/React__default.createElement("p", null, /*#__PURE__*/React__default.createElement("span", null, "For Example use this har file"), /*#__PURE__*/React__default.createElement("a", {
    className: Styles$a['example-url'],
    href: SAMPLE_HAR_URL,
    rel: "noopener noreferrer",
    target: "_blank"
  }, SAMPLE_HAR_URL)));
};

var context$8 = classNames.bind(Styles$8);

var NetworkTableContainer = function NetworkTableContainer(_ref) {
  var onRequestSelect = _ref.onRequestSelect;

  var _useNetwork = useNetwork(),
      state = _useNetwork.state,
      actions = _useNetwork.actions;

  var _useTheme = useTheme(),
      showImportHAR = _useTheme.showImportHAR;

  var actualData = state.get('actualData');
  var data = state.get('data');
  var totalNetworkTime = state.get('totalNetworkTime');
  var error = state.get('error');
  var selectedReqIndex = state.get('selectedReqIndex');
  var showReqDetail = state.get('showReqDetail');
  var containerClassName = context$8('table-container', {
    'limited-cols': showReqDetail
  });

  var handleReqSelect = function handleReqSelect(payload) {
    actions.updateScrollToIndex(payload.index);
    actions.selectRequest(payload);
    onRequestSelect(payload);
  };

  if (error) {
    return /*#__PURE__*/React__default.createElement(ErrorMessage, error);
  }

  if (!actualData.size) {
    return /*#__PURE__*/React__default.createElement("section", {
      className: Styles$8['table-container']
    }, showImportHAR && /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(ImportHar, {
      showButton: false
    }), /*#__PURE__*/React__default.createElement(InputHAR, null)));
  }

  return /*#__PURE__*/React__default.createElement("section", {
    className: containerClassName
  }, /*#__PURE__*/React__default.createElement("table", {
    className: Styles$8.table
  }, /*#__PURE__*/React__default.createElement(NetworkTableHeader, null), /*#__PURE__*/React__default.createElement("tbody", {
    className: Styles$8['table-content']
  }, Array.from(data).map(function (rowInfo) {
    return /*#__PURE__*/React__default.createElement(NetworkTableRow, {
      key: rowInfo.index,
      maxTime: totalNetworkTime,
      onSelect: handleReqSelect,
      payload: rowInfo,
      scrollHighlight: selectedReqIndex === rowInfo.index
    });
  }))));
};

NetworkTableContainer.propTypes = {
  onRequestSelect: PropTypes.func
};
NetworkTableContainer.defaultProps = {
  onRequestSelect: function onRequestSelect() {}
};

var css_248z$d = ".LoaderContainer-styles__loader-container___2eluA{display:flex;align-items:center;justify-content:center;min-height:200px}.LoaderContainer-styles__spin___3BhKg{width:3rem;height:3rem;transform:translateZ(0);line-height:0}.LoaderContainer-styles__spin___3BhKg svg{-webkit-animation:LoaderContainer-styles__load___3IUlP 1.4s linear infinite;animation:LoaderContainer-styles__load___3IUlP 1.4s linear infinite}.LoaderContainer-styles__text___1LDLu{padding-left:15px}@-webkit-keyframes LoaderContainer-styles__load___3IUlP{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes LoaderContainer-styles__load___3IUlP{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}";
var Styles$d = {"loader-container":"LoaderContainer-styles__loader-container___2eluA","spin":"LoaderContainer-styles__spin___3BhKg","load":"LoaderContainer-styles__load___3IUlP","text":"LoaderContainer-styles__text___1LDLu"};
styleInject(css_248z$d);

var LoaderContainer = function LoaderContainer(_ref) {
  var children = _ref.children,
      show = _ref.show,
      text = _ref.text;
  var spinnerColor = Styles$d.brandBlue;
  var uniqueId = "Gradient-".concat(Math.round(Math.random() * 10000000));
  return !show ? children : /*#__PURE__*/React__default.createElement("section", {
    className: Styles$d['loader-container']
  }, /*#__PURE__*/React__default.createElement("div", {
    className: Styles$d.spin
  }, /*#__PURE__*/React__default.createElement("svg", {
    viewBox: "0 0 100 100",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("defs", null, /*#__PURE__*/React__default.createElement("linearGradient", {
    id: uniqueId
  }, /*#__PURE__*/React__default.createElement("stop", {
    offset: "0%",
    stopColor: spinnerColor
  }), /*#__PURE__*/React__default.createElement("stop", {
    offset: "75%",
    stopColor: spinnerColor,
    stopOpacity: "0"
  }), /*#__PURE__*/React__default.createElement("stop", {
    offset: "100%",
    stopColor: spinnerColor,
    stopOpacity: "0"
  }))), /*#__PURE__*/React__default.createElement("circle", {
    cx: "50",
    cy: "50",
    fill: "transparent",
    r: "43",
    stroke: "url(#".concat(uniqueId, ")"),
    strokeWidth: "14"
  }))), text && /*#__PURE__*/React__default.createElement("p", {
    className: Styles$d.text
  }, text));
};

LoaderContainer.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};
LoaderContainer.defaultProps = {
  children: null,
  show: true,
  text: null
};

var css_248z$e = ".ReqDetailContainer-styles__req-detail-container___2hR_V{flex:1 1 auto;height:100%;overflow:auto;background:#fff;position:absolute;right:0;width:calc(100% - 300px);border-left:1px solid #ccc}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__nav-tabs___2Kgb_{padding-left:35px;border:0}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__tab-link___1V-Fu{color:#555;border:0;border-bottom:2px solid transparent}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__tab-link___1V-Fu:hover{text-decoration:none}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__tab-link___1V-Fu.ReqDetailContainer-styles__active___2Y1lp{border:0;color:#333;border-bottom:2px solid #333}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__close-button___1B4_y{position:absolute;left:8px;top:8px;cursor:pointer;background:transparent;border:0}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__close-button___1B4_y .ReqDetailContainer-styles__close-icon___2YKhN{height:8px;width:8px}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__close-button___1B4_y .ReqDetailContainer-styles__close-icon___2YKhN g{stroke:#555}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__close-button___1B4_y:hover .ReqDetailContainer-styles__close-icon___2YKhN g{stroke:#000}.ReqDetailContainer-styles__req-detail-container___2hR_V .ReqDetailContainer-styles__tabs-container___1Ue2M{display:flex;width:100%;padding:16px;height:calc(100% - 35px);overflow:auto}";
var Styles$e = {"brandBlue":"#1395f0","req-detail-container":"ReqDetailContainer-styles__req-detail-container___2hR_V","nav-tabs":"ReqDetailContainer-styles__nav-tabs___2Kgb_","tab-link":"ReqDetailContainer-styles__tab-link___1V-Fu","active":"ReqDetailContainer-styles__active___2Y1lp","close-button":"ReqDetailContainer-styles__close-button___1B4_y","close-icon":"ReqDetailContainer-styles__close-icon___2YKhN","tabs-container":"ReqDetailContainer-styles__tabs-container___1Ue2M"};
styleInject(css_248z$e);

var css_248z$f = ".Tabs-styles__nav-tabs___36Cdr{border-bottom:1px solid #e6e6e6;display:flex;flex-wrap:wrap;padding-left:0;margin-bottom:0;list-style:none}.Tabs-styles__tab-item___3_I_3{border:1px solid transparent;border-top-left-radius:.25rem;border-top-right-radius:.25rem;margin-bottom:-1px;display:block;padding:.5rem 1rem;color:#007bff;text-decoration:none;background-color:transparent;cursor:pointer}.Tabs-styles__tab-item___3_I_3:active,.Tabs-styles__tab-item___3_I_3:focus{outline:none}.Tabs-styles__tab-item___3_I_3.Tabs-styles__active___22W8M{color:#646464;background-color:#fff;border-color:#e6e6e6 #e6e6e6 #fff}";
var Styles$f = {"brandBlue":"#1395f0","nav-tabs":"Tabs-styles__nav-tabs___36Cdr","tab-item":"Tabs-styles__tab-item___3_I_3","active":"Tabs-styles__active___22W8M"};
styleInject(css_248z$f);

var context$9 = classNames.bind(Styles$f);

var Tabs = function Tabs(_ref) {
  var onUpdate = _ref.onUpdate,
      selectedKey = _ref.selectedKey,
      defaultSelectedKey = _ref.defaultSelectedKey,
      children = _ref.children,
      navTabsClassName = _ref.navTabsClassName,
      tabsContainerClassName = _ref.tabsContainerClassName,
      navLinkClassName = _ref.navLinkClassName,
      activeClassName = _ref.activeClassName;

  var _useState = React.useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      items = _useState2[0],
      updateItems = _useState2[1];

  React.useEffect(function () {
    var itemsCollection = [];
    React__default.Children.forEach(children, function (element) {
      if ( /*#__PURE__*/React__default.isValidElement(element)) {
        var _element$props = element.props,
            name = _element$props.name,
            key = _element$props.eventKey,
            component = _element$props.children;
        itemsCollection.push({
          name: name,
          key: key,
          component: component
        });
      }
    });
    updateItems(itemsCollection);
  }, [children]);

  var _useState3 = React.useState(defaultSelectedKey || (items && items.length ? items[0].key : null)),
      _useState4 = _slicedToArray(_useState3, 2),
      activeTab = _useState4[0],
      updateTab = _useState4[1];

  var handleUpdate = function handleUpdate(key) {
    updateTab(key);

    if (onUpdate) {
      onUpdate(key);
    }
  };

  var renderItem = function renderItem() {
    var selectedTab = items.find(function (_ref2) {
      var key = _ref2.key;
      return key === (selectedKey || activeTab);
    });
    return selectedTab ? selectedTab.component : null;
  };

  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("nav", {
    className: context$9('nav-tabs', navTabsClassName)
  }, items.map(function (_ref3, index) {
    var item = _ref3.key,
        name = _ref3.name;
    return /*#__PURE__*/React__default.createElement("a", {
      key: item,
      className: context$9('tab-item', navLinkClassName, _defineProperty({}, activeClassName || Styles$f.active, activeTab === item)),
      onClick: function onClick() {
        return handleUpdate(item);
      },
      role: "tab",
      tabIndex: index
    }, name);
  })), /*#__PURE__*/React__default.createElement("section", {
    className: context$9(tabsContainerClassName)
  }, renderItem()));
};

Tabs.propTypes = {
  activeClassName: PropTypes.string,
  children: PropTypes.node.isRequired,
  defaultSelectedKey: PropTypes.string,
  navLinkClassName: PropTypes.string,
  navTabsClassName: PropTypes.string,
  onUpdate: PropTypes.func,
  selectedKey: PropTypes.string,
  tabsContainerClassName: PropTypes.string
};
Tabs.defaultProps = {
  activeClassName: null,
  defaultSelectedKey: null,
  navLinkClassName: null,
  navTabsClassName: null,
  onUpdate: null,
  selectedKey: null,
  tabsContainerClassName: null
};

var Tab = function Tab(_ref) {
  var children = _ref.children;
  return children;
};

Tab.propTypes = {
  children: PropTypes.node.isRequired
};

var css_248z$g = ".Headers-styles__headers-container___Pii4i{width:100%}.Headers-styles__headers-container___Pii4i .Headers-styles__header-info___1-twg{border-bottom:1px solid #e6e6e6;margin-bottom:16px;padding-bottom:16px}.Headers-styles__headers-container___Pii4i .Headers-styles__header-info___1-twg:last-child{margin-bottom:0}.Headers-styles__headers-container___Pii4i .Headers-styles__header-info___1-twg.Headers-styles__active___69MTu .Headers-styles__caret-icon___3wwr3{transform:translateY(-1px) translateX(-5px) rotate(180deg)}.Headers-styles__header-title___1uyNJ{margin:0;cursor:pointer;display:inline-block}.Headers-styles__header-title___1uyNJ .Headers-styles__caret-icon___3wwr3{display:inline-block;height:8px;transform:translateY(-1px) translateX(-5px) rotate(90deg);width:8px}.Headers-styles__header-title___1uyNJ .Headers-styles__encode-url___1JVy5{margin-left:8px;font-size:12px}.Headers-styles__header-title___1uyNJ:focus,.Headers-styles__header-title___1uyNJ span:focus{outline:none}.Headers-styles__header-detail___2YJju{padding:16px 0 0 16px}.Headers-styles__header-detail___2YJju .Headers-styles__info-row___seABz{margin:0;font-size:12px;padding-bottom:8px}.Headers-styles__header-detail___2YJju .Headers-styles__info-row___seABz:last-child{padding-bottom:0}.Headers-styles__header-detail___2YJju .Headers-styles__info-caption___2tB9Y{font-weight:700;padding-right:8px}.Headers-styles__header-detail___2YJju .Headers-styles__info-value___2PlYe{word-break:break-all}";
var Styles$g = {"brandBlue":"#1395f0","headers-container":"Headers-styles__headers-container___Pii4i","header-info":"Headers-styles__header-info___1-twg","active":"Headers-styles__active___69MTu","caret-icon":"Headers-styles__caret-icon___3wwr3","header-title":"Headers-styles__header-title___1uyNJ","encode-url":"Headers-styles__encode-url___1JVy5","header-detail":"Headers-styles__header-detail___2YJju","info-row":"Headers-styles__info-row___seABz","info-caption":"Headers-styles__info-caption___2tB9Y","info-value":"Headers-styles__info-value___2PlYe"};
styleInject(css_248z$g);

var General = function General(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-detail']
  }, Object.entries(GENERAL_HEADERS).map(function (_ref2) {
    var _ref3 = _slicedToArray(_ref2, 2),
        dataKey = _ref3[0],
        _ref3$ = _ref3[1],
        key = _ref3$.key,
        name = _ref3$.name;

    return /*#__PURE__*/React__default.createElement("p", {
      key: dataKey,
      className: Styles$g['info-row']
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-value']
    }, key === 'status' && data.error ? data.error : data[key]));
  }));
};

General.propTypes = {
  data: PropTypes.object
};
General.defaultProps = {
  data: null
};

var Response = function Response(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-detail']
  }, data.headers.response.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default.createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$g['info-row']
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-value']
    }, value));
  }));
};

Response.propTypes = {
  data: PropTypes.object
};
Response.defaultProps = {
  data: null
};

var Request = function Request(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-detail']
  }, data.headers.request.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default.createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$g['info-row']
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-value']
    }, value));
  }));
};

Request.propTypes = {
  data: PropTypes.object
};
Request.defaultProps = {
  data: null
};

var QueryString = function QueryString(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-detail']
  }, data.headers.queryString.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default.createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$g['info-row']
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-value']
    }, isPayloadTransformed ? decodeURIComponent(value) : value));
  }));
};

QueryString.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired
};
QueryString.defaultProps = {
  data: null
};

var FormData = function FormData(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-detail']
  }, data.headers.postData.params.map(function (_ref2, index) {
    var name = _ref2.name,
        value = _ref2.value;
    return /*#__PURE__*/React__default.createElement("p", {
      key: "".concat(name, "-").concat(index),
      className: Styles$g['info-row']
    }, /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-caption']
    }, "".concat(name, ":")), /*#__PURE__*/React__default.createElement("span", {
      className: Styles$g['info-value']
    }, isPayloadTransformed ? decodeURIComponent(value) : value));
  }));
};

FormData.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired
};
FormData.defaultProps = {
  data: null
};

var IconCaretUp = function IconCaretUp(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default.createElement("svg", {
    className: className,
    height: "8",
    preserveAspectRatio: "xMidYMid",
    viewBox: "0 0 13 8",
    width: "13",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default.createElement("g", null, /*#__PURE__*/React__default.createElement("path", {
    d: "M11.547,8.008 C11.547,8.008 6.500,2.919 6.500,2.919 C6.500,2.919 1.453,8.008 1.453,8.008 C1.453,8.008 0.011,6.554 0.011,6.554 C0.011,6.554 6.500,0.011 6.500,0.011 C6.500,0.011 12.989,6.554 12.989,6.554 C12.989,6.554 11.547,8.008 11.547,8.008 Z",
    fillRule: "evenodd"
  })));
};

IconCaretUp.propTypes = {
  className: PropTypes.string
};
IconCaretUp.defaultProps = {
  className: ''
};

var HeaderTitle = function HeaderTitle(_ref) {
  var _onClick = _ref.onClick,
      eventKey = _ref.eventKey,
      isEncodeEnabled = _ref.isEncodeEnabled,
      onPayloadTransform = _ref.onPayloadTransform,
      isPayloadTransformed = _ref.isPayloadTransformed,
      isParseEnabled = _ref.isParseEnabled;
  var payloadStatus = PAYLOAD_CAPTIONS[isParseEnabled ? 'parse' : 'encode'][isPayloadTransformed];
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-title']
  }, /*#__PURE__*/React__default.createElement("span", {
    onClick: function onClick() {
      return _onClick(HEADERS_TITLES[eventKey].key);
    },
    role: "button",
    tabIndex: 0
  }, /*#__PURE__*/React__default.createElement(IconCaretUp, {
    className: Styles$g['caret-icon']
  }), HEADERS_TITLES[eventKey].name), (isEncodeEnabled || isParseEnabled) && /*#__PURE__*/React__default.createElement("span", {
    className: Styles$g['encode-url'],
    onClick: onPayloadTransform,
    role: "button",
    tabIndex: 0
  }, "view ".concat(payloadStatus)));
};

HeaderTitle.propTypes = {
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isParseEnabled: PropTypes.bool,
  isPayloadTransformed: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  onPayloadTransform: PropTypes.func.isRequired
};
HeaderTitle.defaultProps = {
  isEncodeEnabled: false,
  isParseEnabled: false,
  isPayloadTransformed: true
};

var context$a = classNames.bind(Styles$g);

var HeaderInfo = function HeaderInfo(_ref) {
  var eventKey = _ref.eventKey,
      data = _ref.data,
      component = _ref.component,
      isEncodeEnabled = _ref.isEncodeEnabled,
      isParseEnabled = _ref.isParseEnabled;

  var _useState = React.useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isVisible = _useState2[0],
      updateVisibleStates = _useState2[1];

  var _useState3 = React.useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      isPayloadTransformed = _useState4[0],
      updateTransform = _useState4[1];

  var handlePayloadTransform = function handlePayloadTransform() {
    return updateTransform(!isPayloadTransformed);
  };

  var ChildComponent = function ChildComponent() {
    return component({
      data: data,
      isPayloadTransformed: isPayloadTransformed,
      onChangeEncode: handlePayloadTransform
    });
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: context$a('header-info', {
      active: isVisible
    })
  }, /*#__PURE__*/React__default.createElement(HeaderTitle, {
    eventKey: eventKey,
    isEncodeEnabled: isEncodeEnabled,
    isParseEnabled: isParseEnabled,
    isPayloadTransformed: isPayloadTransformed,
    onClick: function onClick() {
      return updateVisibleStates(!isVisible);
    },
    onPayloadTransform: handlePayloadTransform
  }), isVisible && /*#__PURE__*/React__default.createElement(ChildComponent, null));
};

HeaderInfo.propTypes = {
  component: PropTypes.func.isRequired,
  data: PropTypes.object,
  eventKey: PropTypes.string.isRequired,
  isEncodeEnabled: PropTypes.bool,
  isParseEnabled: PropTypes.bool
};
HeaderInfo.defaultProps = {
  data: null,
  isEncodeEnabled: false,
  isParseEnabled: false
};

var RequestPayload = function RequestPayload(_ref) {
  var data = _ref.data,
      isPayloadTransformed = _ref.isPayloadTransformed;
  var payloadData = data.headers.postData.text;
  var parsedData = React.useMemo(function () {
    return parseRequestPayload(payloadData);
  }, [payloadData]);
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['header-detail']
  }, isPayloadTransformed ? /*#__PURE__*/React__default.createElement("div", {
    className: Styles$g['response-content']
  }, /*#__PURE__*/React__default.createElement("pre", {
    className: Styles$g['log-body-colorless']
  }, parsedData)) : payloadData);
};

RequestPayload.propTypes = {
  data: PropTypes.object,
  isPayloadTransformed: PropTypes.bool.isRequired
};
RequestPayload.defaultProps = {
  data: null
};

var Headers = function Headers(_ref) {
  var data = _ref.data;
  return !data ? null : /*#__PURE__*/React__default.createElement("section", {
    className: Styles$g['headers-container']
  }, /*#__PURE__*/React__default.createElement(HeaderInfo, {
    component: General,
    data: data,
    eventKey: "general"
  }), /*#__PURE__*/React__default.createElement(HeaderInfo, {
    component: Response,
    data: data,
    eventKey: "response"
  }), /*#__PURE__*/React__default.createElement(HeaderInfo, {
    component: Request,
    data: data,
    eventKey: "request"
  }), data.headers.queryString && data.headers.queryString.length ? /*#__PURE__*/React__default.createElement(HeaderInfo, {
    component: QueryString,
    data: data,
    eventKey: "queryString",
    isEncodeEnabled: true
  }) : null, data.headers.postData && data.headers.postData.params && /*#__PURE__*/React__default.createElement(HeaderInfo, {
    component: FormData,
    data: data,
    eventKey: "formData",
    isEncodeEnabled: true
  }), data.headers.postData && data.headers.postData.text && /*#__PURE__*/React__default.createElement(HeaderInfo, {
    component: RequestPayload,
    data: data,
    eventKey: "requestPayload",
    isParseEnabled: true
  }));
};

Headers.propTypes = {
  data: PropTypes.object
};
Headers.defaultProps = {
  data: null
};

var IconCloseSign = function IconCloseSign(_ref) {
  var className = _ref.className;
  return /*#__PURE__*/React__default.createElement("svg", {
    className: className,
    height: "16",
    viewBox: "0 0 17 16",
    width: "17"
  }, /*#__PURE__*/React__default.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "#ACB2B8",
    strokeLinecap: "round",
    transform: "translate(1)"
  }, /*#__PURE__*/React__default.createElement("path", {
    d: "M0 0L15.2460858 15.2460858M15.2460858 0L0 15.2460858"
  })));
};

IconCloseSign.propTypes = {
  className: PropTypes.string
};
IconCloseSign.defaultProps = {
  className: ''
};

var css_248z$h = ".Response-styles__no-response___2CGBc{display:flex;align-items:center;justify-content:center;font-size:18px;width:100%;color:#7f8892}.Response-styles__response-content___1SG-3{font-size:12px;width:100%}";
var Styles$h = {"brandBlue":"#1395f0","no-response":"Response-styles__no-response___2CGBc","response-content":"Response-styles__response-content___1SG-3"};
styleInject(css_248z$h);

var NoResponseText = function NoResponseText() {
  return /*#__PURE__*/React__default.createElement("h4", {
    className: Styles$h['no-response']
  }, "This request has no response data available.");
};

var Response$1 = function Response(_ref) {
  var data = _ref.data;
  var content = data && data.body ? data.body : null;

  if (!content) {
    return /*#__PURE__*/React__default.createElement(NoResponseText, null);
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$h['response-content']
  }, /*#__PURE__*/React__default.createElement("pre", {
    className: Styles$h['log-body-colorless']
  }, content));
};

Response$1.propTypes = {
  data: PropTypes.object
};
Response$1.defaultProps = {
  data: null
};

var ReqDetailContainer = function ReqDetailContainer() {
  var _useNetwork = useNetwork(),
      actions = _useNetwork.actions,
      state = _useNetwork.state;

  var reqDetail = state.get('reqDetail');

  var handleCloseClick = function handleCloseClick() {
    actions.selectRequest(null);
  };

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$e['req-detail-container']
  }, /*#__PURE__*/React__default.createElement("button", {
    className: Styles$e['close-button'],
    onClick: handleCloseClick,
    type: "button"
  }, /*#__PURE__*/React__default.createElement(IconCloseSign, {
    className: Styles$e['close-icon']
  })), /*#__PURE__*/React__default.createElement(Tabs, {
    activeClassName: Styles$e.active,
    defaultSelectedKey: "headers",
    navLinkClassName: Styles$e['tab-link'],
    navTabsClassName: Styles$e['nav-tabs'],
    tabsContainerClassName: Styles$e['tabs-container']
  }, /*#__PURE__*/React__default.createElement(Tab, {
    eventKey: "headers",
    name: "Headers"
  }, /*#__PURE__*/React__default.createElement(Headers, {
    data: reqDetail
  })), /*#__PURE__*/React__default.createElement(Tab, {
    eventKey: "response",
    name: "Response"
  }, /*#__PURE__*/React__default.createElement(Response$1, {
    data: reqDetail
  }))));
};

var css_248z$i = ".MainContainer-styles__main-container___1OaeJ{display:flex;flex-wrap:wrap;flex-direction:row;height:calc(100% - 76px);position:relative}";
var Styles$i = {"brandBlue":"#1395f0","main-container":"MainContainer-styles__main-container___1OaeJ"};
styleInject(css_248z$i);

var css_248z$j = ".TimelineContainer-styles__timeline-container___2Wcfe{width:100%;border-bottom:1px solid #d8dde3}";
var Styles$j = {"brandBlue":"#1395f0","timeline-container":"TimelineContainer-styles__timeline-container___2Wcfe"};
styleInject(css_248z$j);

var css_248z$k = ".TimelineChart-styles__chart-container___1GiMD{margin:0 8px}.TimelineChart-styles__scatter-chart___1XfAv tspan{font-size:10px;fill:grey}";
var Styles$k = {"brandBlue":"#1395f0","chart-container":"TimelineChart-styles__chart-container___1GiMD","scatter-chart":"TimelineChart-styles__scatter-chart___1XfAv"};
styleInject(css_248z$k);

var TimelineDatapoint = function TimelineDatapoint(_ref) {
  var payload = _ref.payload,
      maxTime = _ref.maxTime,
      cx = _ref.cx,
      cy = _ref.cy,
      index = _ref.index;
  var timings = payload.timings;
  var chartAttributes = React.useMemo(function () {
    return calcChartAttributes(timings, maxTime, cx, index, cy);
  }, [timings, maxTime]);

  if (!payload) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("g", null, chartAttributes.map(function (chartProps) {
    return /*#__PURE__*/React__default.createElement("rect", _extends({
      key: chartProps.key
    }, chartProps, {
      height: TIMELINE_DATA_POINT_HEIGHT
    }));
  }));
};

TimelineDatapoint.propTypes = {
  cx: PropTypes.number,
  cy: PropTypes.number,
  index: PropTypes.number,
  maxTime: PropTypes.number.isRequired,
  payload: PropTypes.object
};
TimelineDatapoint.defaultProps = {
  cx: 0,
  cy: 0,
  index: 0,
  payload: null
};

var css_248z$l = ".TimelineTooltip-styles__tooltip___1dJW9{display:block;width:300px;height:auto;background:#fff;border:1px solid #e6e6e6;border-radius:3px;color:#555;font-size:12px;padding:8px;opacity:1}.TimelineTooltip-styles__content___3PpYM{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}";
var Styles$l = {"brandBlue":"#1395f0","tooltip":"TimelineTooltip-styles__tooltip___1dJW9","content":"TimelineTooltip-styles__content___3PpYM"};
styleInject(css_248z$l);

var TimelineTooltip = function TimelineTooltip(_ref) {
  var payload = _ref.payload;

  if (!payload || !payload.length) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$l.tooltip
  }, /*#__PURE__*/React__default.createElement("div", {
    className: Styles$l.content
  }, payload[0].payload.filename), /*#__PURE__*/React__default.createElement("div", null, "Started at: ".concat(formatTime(payload[0].payload.timings.startTime))));
};

TimelineTooltip.propTypes = {
  payload: PropTypes.array
};
TimelineTooltip.defaultProps = {
  payload: null
};

var TimelineChart = function TimelineChart(_ref) {
  var chartData = _ref.chartData,
      totalNetworkTime = _ref.totalNetworkTime;
  return /*#__PURE__*/React__default.createElement("div", {
    className: Styles$k['chart-container']
  }, /*#__PURE__*/React__default.createElement(recharts.ResponsiveContainer, {
    height: 100,
    width: "100%"
  }, /*#__PURE__*/React__default.createElement(recharts.ScatterChart, {
    className: Styles$k['scatter-chart']
  }, /*#__PURE__*/React__default.createElement(recharts.XAxis, {
    axisLine: false,
    dataKey: "timings.startTime",
    domain: [0, totalNetworkTime],
    interval: "preserveStartEnd",
    orientation: "top",
    tickCount: 10,
    tickFormatter: formatTime,
    tickLine: false,
    type: "number"
  }), /*#__PURE__*/React__default.createElement(recharts.YAxis, {
    dataKey: "index",
    domain: ['min', 'max'],
    hide: true,
    reversed: true
  }), /*#__PURE__*/React__default.createElement(recharts.Tooltip, {
    content: /*#__PURE__*/React__default.createElement(TimelineTooltip, null)
  }), /*#__PURE__*/React__default.createElement(recharts.Scatter, {
    data: chartData,
    shape: /*#__PURE__*/React__default.createElement(TimelineDatapoint, {
      maxTime: totalNetworkTime
    })
  }))));
};

TimelineChart.propTypes = {
  chartData: PropTypes.array.isRequired,
  totalNetworkTime: PropTypes.number.isRequired
};

var TimelineContainer = function TimelineContainer() {
  var _useNetwork = useNetwork(),
      state = _useNetwork.state;

  var data = state.get('data');
  var actualData = state.get('actualData');
  var error = state.get('error');
  var totalNetworkTime = state.get('totalNetworkTime');

  if (error || !actualData.size) {
    return null;
  }

  return /*#__PURE__*/React__default.createElement("section", {
    className: Styles$j['timeline-container']
  }, /*#__PURE__*/React__default.createElement(TimelineChart, {
    chartData: data.toArray(),
    totalNetworkTime: totalNetworkTime
  }));
};

var css_248z$m = ".NetworkTableFooter-styles__footer___3FJ4U{border-top:1px solid #ccc;position:absolute;bottom:0;width:100%;background:#f7f7f7;padding:8px;display:inline-flex;vertical-align:middle}.NetworkTableFooter-styles__footer___3FJ4U span{flex:1 1 auto;justify-content:center;display:inline-flex;align-items:center;border-right:1px solid #ccc}.NetworkTableFooter-styles__footer___3FJ4U span:last-child{border-right:none}";
var Styles$m = {"brandBlue":"#1395f0","footer":"NetworkTableFooter-styles__footer___3FJ4U"};
styleInject(css_248z$m);

var context$b = classNames.bind(Styles$m);

var NetworkTableFooter = function NetworkTableFooter(_ref) {
  var dataSummary = _ref.dataSummary,
      showAllInfo = _ref.showAllInfo;
  return /*#__PURE__*/React__default.createElement("div", {
    className: context$b('footer')
  }, showAllInfo ? /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement("span", null, "".concat(dataSummary.get('totalRequests'), " requests")), /*#__PURE__*/React__default.createElement("span", null, "".concat(formatSize(dataSummary.get('totalTransferredSize')), " transferred")), /*#__PURE__*/React__default.createElement("span", null, "".concat(formatSize(dataSummary.get('totalUncompressedSize')), " resources")), /*#__PURE__*/React__default.createElement("span", null, "Finished: ".concat(formatTime(dataSummary.get('finish')))), /*#__PURE__*/React__default.createElement("span", null, "DOMContentLoaded: ".concat(formatTime(dataSummary.get('timings').DOMContentLoaded))), /*#__PURE__*/React__default.createElement("span", null, "Load: ".concat(formatTime(dataSummary.get('timings').onLoad)))) : /*#__PURE__*/React__default.createElement("span", null, "".concat(dataSummary.get('totalRequests'), " requests")));
};

NetworkTableFooter.propTypes = {
  dataSummary: PropTypes.object.isRequired,
  showAllInfo: PropTypes.bool
};
NetworkTableFooter.defaultProps = {
  showAllInfo: true
};

var MainContainer = function MainContainer(_ref) {
  var onRequestSelect = _ref.onRequestSelect;

  var _useNetwork = useNetwork(),
      state = _useNetwork.state;

  var _useTheme = useTheme(),
      showTimeline = _useTheme.showTimeline;

  var loading = state.get('loading');
  var showReqDetail = state.get('showReqDetail');
  var dataSummary = state.get('dataSummary');
  var actualData = state.get('actualData');
  return /*#__PURE__*/React__default.createElement(React__default.Fragment, null, /*#__PURE__*/React__default.createElement(LoaderContainer, {
    show: loading,
    text: FETCH_FILE_LOAD_TEXT
  }, showTimeline && /*#__PURE__*/React__default.createElement(TimelineContainer, null), /*#__PURE__*/React__default.createElement(FilterContainer, null), /*#__PURE__*/React__default.createElement("section", {
    className: Styles$i['main-container']
  }, /*#__PURE__*/React__default.createElement(NetworkTableContainer, {
    onRequestSelect: onRequestSelect
  }), showReqDetail && /*#__PURE__*/React__default.createElement(ReqDetailContainer, null)), actualData.size ? /*#__PURE__*/React__default.createElement(NetworkTableFooter, {
    dataSummary: dataSummary
  }) : null));
};

MainContainer.propTypes = {
  onRequestSelect: PropTypes.func
};
MainContainer.defaultProps = {
  onRequestSelect: function onRequestSelect() {}
};

var css_248z$n = ".NetworkViewer-styles__network-viewer___2ML38{height:100%}.NetworkViewer-styles__network-viewer___2ML38 *{box-sizing:border-box}";
var Styles$n = {"network-viewer":"NetworkViewer-styles__network-viewer___2ML38"};
styleInject(css_248z$n);

var contextClassNames = classNames.bind(Styles$n);

var NetworkViewer = function NetworkViewer(_ref) {
  var file = _ref.file,
      data = _ref.data,
      fetchOptions = _ref.fetchOptions,
      scrollTimeStamp = _ref.scrollTimeStamp,
      options = _ref.options,
      onRequestSelect = _ref.onRequestSelect,
      scrollRequestPosition = _ref.scrollRequestPosition,
      autoHighlightChange = _ref.autoHighlightChange,
      onDataLoaded = _ref.onDataLoaded,
      onDataError = _ref.onDataError,
      containerClassName = _ref.containerClassName;
  return /*#__PURE__*/React__default.createElement("section", {
    className: contextClassNames('network-viewer', containerClassName)
  }, /*#__PURE__*/React__default.createElement(ThemeProvider, {
    options: options
  }, /*#__PURE__*/React__default.createElement(NetworkProvider, {
    autoHighlightChange: autoHighlightChange,
    data: data,
    fetchOptions: fetchOptions,
    file: file,
    onDataError: onDataError,
    onDataLoaded: onDataLoaded,
    scrollRequestPosition: scrollRequestPosition,
    scrollTimeStamp: scrollTimeStamp
  }, /*#__PURE__*/React__default.createElement(MainContainer, {
    onRequestSelect: onRequestSelect
  }))));
};

NetworkViewer.propTypes = {
  autoHighlightChange: PropTypes.bool,
  containerClassName: PropTypes.string,
  data: PropTypes.object,
  fetchOptions: PropTypes.object,
  file: PropTypes.string,
  onDataError: PropTypes.func,
  onDataLoaded: PropTypes.func,
  onRequestSelect: PropTypes.func,
  options: PropTypes.object,
  scrollRequestPosition: PropTypes.oneOf(['before', 'after', 'near']),
  scrollTimeStamp: PropTypes.number
};
NetworkViewer.defaultProps = {
  autoHighlightChange: false,
  containerClassName: null,
  data: null,
  fetchOptions: {
    withCredentials: true
  },
  file: null,
  onDataError: null,
  onDataLoaded: null,
  onRequestSelect: function onRequestSelect() {},
  options: null,
  scrollRequestPosition: 'near',
  scrollTimeStamp: null
};

exports.NetworkViewer = NetworkViewer;
//# sourceMappingURL=index.js.map
