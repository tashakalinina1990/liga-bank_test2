import {
  CURRENCY_VALUE,
  CURRENCY_NAME,
  NEW_CURRENCY_VALUE,
  NEW_CURRENCY_NAME,
  SHOW_CURRENCY_LIST,
  SHOW_NEW_CURRENCY_LIST,
  RATIO,
} from "./action-types";
import { setButtonStatus } from "../actions/history-actions";
import { BASE } from "../../api/const";

export const setValue = (value) => ({
  type: CURRENCY_VALUE,
  value: value,
});

export const setName = (name) => ({
  type: CURRENCY_NAME,
  name: name,
});

export const setNewValue = (newValue) => ({
  type: NEW_CURRENCY_VALUE,
  newValue: newValue,
});

export const setNewName = (newName) => ({
  type: NEW_CURRENCY_NAME,
  newName: newName,
});

export const showSelect = (isShowSelect) => ({
  type: SHOW_CURRENCY_LIST,
  isShowSelect: isShowSelect,
});

export const showNewSelect = (isShowNewSelect) => ({
  type: SHOW_NEW_CURRENCY_LIST,
  isShowNewSelect: isShowNewSelect,
});

export const fetchCurrencyAction = (currencies, date) => (
  dispatch,
  _getState,
  api
) => {
  if (currencies[0] === currencies[1]) {
    dispatch(setRatio(1));
    dispatch(setButtonStatus(false));
    return;
  }

  switch (true) {
    case currencies[0] === BASE:
      api.get(`${date}?symbols=${currencies[1]}`).then(({ data }) => {
        dispatch(setRatio(data.rates[currencies[1]]));
        dispatch(setButtonStatus(false));
      });
      break;

    case currencies[1] === BASE:
      api.get(`${date}?symbols=${currencies[0]}`).then(({ data }) => {
        dispatch(setRatio(1 / data.rates[currencies[0]]));
        dispatch(setButtonStatus(false));
      });
      break;

    default:
      api
        .get(`${date}?symbols=${currencies[0]},${currencies[1]}`)
        .then(({ data }) => {
          dispatch(
            setRatio(data.rates[currencies[1]] / data.rates[currencies[0]])
          );
          dispatch(setButtonStatus(false));
        });
  }
};

export const setRatio = (ratio) => ({
  type: RATIO,
  ratio: ratio,
});
