import { DATE } from "../actions/action-types";
import { DEFAULT_DATE } from "../../const";

const initialState = {
  date: DEFAULT_DATE,
};

const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case DATE:
      return {
        ...state,
        date: action.date,
      };

    default:
      return state;
  }
};

export default dateReducer;
