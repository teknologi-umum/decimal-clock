import { combineReducers } from "redux";

const initialState = {
  timeofday: null,
  fractionofday: null,
  timestring: null,
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

export const setFractionOfDay = (timeOfDay) => {
  return {
    type: "FRACTION_OF_DAY",
    payload: timeOfDay / 86400_000,
  };
};

export const setTimeString = (fractionOfDay) => {
  return {
    type: "TIME_STRING",
    payload: `${Math.floor(fractionOfDay * 10)}:${Math.floor(
      (fractionOfDay * 1_000) % 100
    )
      .toString()
      .padStart(2, "0")}:${Math.floor((fractionOfDay * 100_000) % 100)
      .toString()
      .padStart(2, "0")}`,
  };
};

export const setRequestAnimationFrame = (payload) => {
  return {
    type: "SET_REQUEST_ANIMATION_FRAME",
    payload: requestAnimationFrame(payload)
  }
}

//Reducer
const decimalClock = (state = initialState, action) => {
  switch (action.type) {
    case "TIME_OF_DAY":
      return {
        ...state,
        timeofday: action.payload,
      };
    case "FRACTION_OF_DAY":
      return {
        ...state,
        fractionofday: action.payload,
      };
    case "TIME_STRING":
      return {
        ...state,
        timestring: action.payload,
      };
    case "SET_REQUEST_ANIMATION_FRAME":
      return {
        ...state,
      };
    default: {
      return { ...state };
    }
  }
};

export default combineReducers({
  decimal: decimalClock,
});
