import { combineReducers } from "redux";

const makeArray = (length) => [...Array(length)];

const arrOfTen = makeArray(10);
const arrOfHundred = makeArray(100);
const initialState = {
    arrOfTen,
    arrOfHundred
};

const decimalClock = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state };
    }
  }
};

export default combineReducers({
    decimal: decimalClock
})