import { data as globalData } from "./data";
let localCache = {};
let splitStreamArray = [];

function splitDataIntoStreamsOfSize(globalDataArray, streamSize) {
  let globalDataArrayCopy = [...globalDataArray];
  let splitStreamArray = [];
  while (globalDataArrayCopy.length > 0) {
    splitStreamArray.push(globalDataArrayCopy.splice(0, streamSize));
  }
  return splitStreamArray;
}

function searchStringInArray(arr, searchStringList) {
  const result = [];
  // tokenise the search string by words
  const searchString = searchStringList.split(" ");
  // another approach could be to index all data and use hash tables to store data for optimizing search within array
  for (let i = 0; i < arr.length; i++) {
    let relevance = 0;
    // look for the entry with a matching `code` value
    for (let j = 0; j < searchString.length; j++) {
      let summary = arr[i].summary;
      let summary_id = arr[i].id;

      const indexes = [
        ...summary.matchAll(new RegExp(searchString[j], "gi"))
      ].map(a => a.index);
      if (indexes.length > 0) {
        relevance += indexes.length;
        result.push({ ...arr[i], relevance: relevance });
      }
    }
  }
  return result;
}

function searchStringInStreams(splitStreamArray, searchString) {
  let count = 0;
  let results = [];
  while (count < splitStreamArray.length) {
    let result = searchStringInArray(splitStreamArray[count++], searchString);
    results.push(...result);
  }
  return results;
}

function sortDataByRelevance(data) {
  let localData = [...data];
  localData.sort(function(a, b) {
    return b.relevance - a.relevance;
  });
  return localData;
}

const searchSummary = (searchString, resultCount) => {
  // a  better approach would be to use paginated data / get stream of data from backend
  if (!searchString || !resultCount) {
    return [];
  }
  if (localCache[searchString]) {
    return localCache[searchString].slice(0, resultCount);
  }
  if (splitStreamArray.length === 0) {
    splitStreamArray = splitDataIntoStreamsOfSize(globalData.summaries, 10);
  }
  let searchResults = searchStringInStreams(
    splitStreamArray,
    searchString.toLowerCase()
  );
  searchResults = sortDataByRelevance(searchResults);
  localCache[searchString] = searchResults;
  return searchResults.slice(0, resultCount);
};

export { searchSummary as SearchSummary };
