import BookActionTypes from "./bookActionTypes";
import { GetBookData } from "../../util/book";
const INITIAL_STATE = {
  books: []
};

const bookReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BookActionTypes.ADD_BOOK:
      const id = action.payload;
      const book = GetBookData(id);
      console.log(book);
      return { ...state, books: [...state.books, book] };
    default:
      return state;
  }
};

export default bookReducer;
