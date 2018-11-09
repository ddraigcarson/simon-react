import { createSelector } from "reselect";

const countSelector = state => state.simon;
console.log(countSelector)

export const makeCount = createSelector(countSelector, count => {
  console.log(count)
  return count.count
});
