import { Map, List } from 'immutable';
import { sortBy, filterData, getSummary, prepareViewerData, calculateTimings } from '../../utils.js';
import { RESET, SELECT_REQUEST, UPDATE_SCROLL_TO_INDEX, UPDATE_ERROR_MESSAGE, FETCH_FILE, UPDATE_SORT, UPDATE_ERROR_FILTER, UPDATE_FILTER, UPDATE_SEARCH, UPDATE_DATA } from './types.js';

var initialState = new Map({
  data: new List(),
  actualData: new List(),
  totalNetworkTime: null,
  dataSummary: new Map(),
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

          var sortedData = new List(sortBy(data, sort.key, sort.isAcs));
          newState.set('error', null).set('data', sortedData).set('actualData', sortedData).set('totalNetworkTime', totalNetworkTime).set('dataSummary', new Map({
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

export default reducer;
export { initialState, reducer };
//# sourceMappingURL=reducer.js.map
