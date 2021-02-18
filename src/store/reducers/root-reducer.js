import { combineReducers } from "redux";
import dateReducer from "./date-reducer";
import currencyReducer from "./currency-reducer";
import historyReducer from "./history-reducer";

export default combineReducers({
  DATE: dateReducer,
  CURRENCY: currencyReducer,
  HISTORY: historyReducer,
});
