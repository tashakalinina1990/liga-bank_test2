import {
  RECORD,
  HISTORY_UPDATE,
  HISTORY_CLEAR,
  IS_LOADING,
} from "./action-types";

export const setRecord = (history) => ({
  type: RECORD,
  history: history,
});

export const updateHistory = (update = 1) => ({
  type: HISTORY_UPDATE,
  update,
});

export const clearHistory = () => ({
  type: HISTORY_CLEAR,
});

export const setButtonStatus = (isLoading) => ({
  type: IS_LOADING,
  isLoading: isLoading,
});
