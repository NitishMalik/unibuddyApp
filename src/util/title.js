import { SearchSummary } from "./search";
import { data as globalData } from "./data";

export const getTitleById = id => {
  if (globalData.titles.length > id) {
    return globalData.titles[id];
  } else {
    // no title exist for corresponding id
    return "";
  }
};

const getTitle = arr => {
  const results = [];
  arr.forEach(function({ id }) {
    results.push({ id, title: getTitleById(id) });
  });
  return results;
};

export const getTitleBySearchString = (searchQuery, noOfOptions) => {
  const searchResults = SearchSummary(searchQuery, noOfOptions);
  return getTitle(searchResults);
};

export { getTitleBySearchString as GetTitleBySearchString };
