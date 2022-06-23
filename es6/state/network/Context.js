import { slicedToArray as _slicedToArray } from '../../_virtual/_rollupPluginBabelHelpers.js';
import React, { useContext } from 'react';
import { actionsWrapper } from '../../utils.js';
import { updateData, updateSearch, updateSort, updateFilter, updateErrorMessage, selectRequest, updateScrollToIndex, updateErrorFilter, resetState } from './actions.js';

var NetworkContext = /*#__PURE__*/React.createContext();
var useNetwork = function useNetwork() {
  var context = useContext(NetworkContext);

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

export { NetworkContext, useNetwork };
//# sourceMappingURL=Context.js.map
