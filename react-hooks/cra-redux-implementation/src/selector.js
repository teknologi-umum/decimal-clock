import { createSelector } from "reselect";

const selectDecimalArrOfTen = state => state.decimal.arrOfTen
const selectDecimalArrOfHundred = state => state.decimal.arrOfHundred

export const selectArrOfTenAndHundred = createSelector(
    [selectDecimalArrOfTen,selectDecimalArrOfHundred],
    (ten, hundred) => [ten, hundred]
)