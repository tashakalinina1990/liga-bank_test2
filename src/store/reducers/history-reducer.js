import {
  RECORD,
  HISTORY_UPDATE,
  HISTORY_CLEAR,
  IS_LOADING,
} from "../actions/action-types";

const initialState = {
  history: [],
  update: 0,
  isLoading: true,
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECORD:
      return {
        ...state,
        history: action.history,
      };
    case HISTORY_UPDATE:
      return {
        ...state,
        update: state.update + action.update,
      };
    case HISTORY_CLEAR:
      return {
        ...state,
        history: [],
      };
    case IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    default:
      return state;
  }
};

export default historyReducer;
