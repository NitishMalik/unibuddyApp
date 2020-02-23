import { createSelector } from "reselect";

const selectSearch = state => state.search;
const selectSearchQuery = createSelector(
  [selectSearch],
  search => search.query
);
const selectSearchNoOfOptions = createSelector(
  [selectSearch],
  search => search.NoOfOptions
);
export const selectSearchOptions = createSelector(
  [selectSearch],
  search => search.options
);
