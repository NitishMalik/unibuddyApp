import SearchActionTypes from "./searchActionTypes";

export const getOptions = (searchQuery, noOfResults) => ({
  type: SearchActionTypes.GET_OPTIONS,
  payload: { searchQuery, noOfResults }
});

export const getBookDetails = title => ({
  type: SearchActionTypes.GET_BOOK_DETAILS,
  payload: title
});

export const setQuery = searchQuery => ({
  type: SearchActionTypes.SAVE_QUERY,
  payload: searchQuery
});

export const setNumberOfResults = noOfResults => ({
  type: SearchActionTypes.SAVE_NUMBER_OF_OPTIONS,
  payload: noOfResults
});
