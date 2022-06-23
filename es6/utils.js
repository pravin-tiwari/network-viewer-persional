import { objectSpread2 as _objectSpread2, defineProperty as _defineProperty, toConsumableArray as _toConsumableArray } from './_virtual/_rollupPluginBabelHelpers.js';
import { TIMINGS, TIMELINE_DATA_POINT_HEIGHT } from './constants.js';

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

export { actionsWrapper, calcChartAttributes, calcTotalTime, calculateFinishTime, calculateTimings, filterCondition, filterData, findIndexAfterTimestamp, findIndexBeforeTimestamp, findIndexNearTimestamp, findRequestIndex, formatSize, formatTime, formatValue, getContent, getContentType, getEntryTransferredSize, getEntryUncompressedSize, getHeaders, getInterceptError, getStatusClass, getSummary, getTimings, getTotalTimeOfEntry, getUrlInfo, parseRequestPayload, parseSize, parseTime, prepareTooltipData, prepareViewerData, roundOff, sortBy, sortHeaders };
//# sourceMappingURL=utils.js.map
