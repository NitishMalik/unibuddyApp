import BookActionTypes from "./bookActionTypes";

export const getBooks = (searchQuery, noOfResults) => ({
  type: BookActionTypes.GET_BOOKS,
  payload: { searchQuery, noOfResults }
});

export const addBook = id => ({
  type: BookActionTypes.ADD_BOOK,
  payload: id
});
