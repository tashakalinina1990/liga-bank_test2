import {
  CURRENCY_VALUE,
  CURRENCY_NAME,
  NEW_CURRENCY_VALUE,
  NEW_CURRENCY_NAME,
  SHOW_CURRENCY_LIST,
  SHOW_NEW_CURRENCY_LIST,
  RATIO,
} from "../actions/action-types";
import { DEFAULT_CURRENCY_VALUE, CURRENCY_LIST } from "../../const";

const initialState = {
  value: DEFAULT_CURRENCY_VALUE,
  name: CURRENCY_LIST[0],
  newValue: 0,
  newName: CURRENCY_LIST[1],
  isShowSelect: false,
  isShowNewSelect: false,
  ratio: 0,
};

const currencyReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENCY_VALUE:
      return {
        ...state,
        value: action.value,
      };

    case CURRENCY_NAME:
      return {
        ...state,
        name: action.name,
      };

    case NEW_CURRENCY_VALUE:
      return {
        ...state,
        newValue: action.newValue,
      };

    case NEW_CURRENCY_NAME:
      return {
        ...state,
        newName: action.newName,
      };

    case SHOW_CURRENCY_LIST:
      return {
        ...state,
        isShowSelect: action.isShowSelect,
      };

    case SHOW_NEW_CURRENCY_LIST:
      return {
        ...state,
        isShowNewSelect: action.isShowNewSelect,
      };

    case RATIO:
      return {
        ...state,
        ratio: action.ratio,
      };

    default:
      return state;
  }
};

export default currencyReducer;
