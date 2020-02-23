import { combineReducers } from "redux";
import searchReducer from "./search/searchReducer";
import bookReducer from "./book/bookReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  book: bookReducer
});

export default rootReducer;
