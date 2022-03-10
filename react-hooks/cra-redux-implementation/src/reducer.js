import { combineReducers } from "redux";

const initialState = {
  timeofday: null,
};

//Actions
export const setTimeOfDay = (date) => {
  return {
    type: "TIME_OF_DAY",
    payload:
      (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) *
        1000 +
      date.getMilliseconds(),
  };
};


//Reducer
const decimalClock = (state = initialState, action) => {
  switch (action.type) {
    case "TIME_OF_DAY":
      return {
        ...state,
        timeofday: action.payload,
      };
    default: {
      return { ...state };
    }
  }
};

export default combineReducers({
  decimal: decimalClock,
});
