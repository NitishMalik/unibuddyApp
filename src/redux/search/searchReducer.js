import SearchActionTypes from "./searchActionTypes";
import { GetTitleBySearchString } from "../../util/title";
const INITIAL_STATE = {
  query: "",
  numberOfOptions: -1,
  options: []
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SearchActionTypes.GET_OPTIONS:
      const { searchQuery, noOfResults } = action.payload;
      const options = GetTitleBySearchString(searchQuery, noOfResults);
      console.log(options);
      return { ...state, options };
    case SearchActionTypes.SAVE_QUERY:
      return { ...state, query: action.payload };
    case SearchActionTypes.SAVE_NUMBER_OF_OPTIONS:
      return { ...state, numberOfOptions: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
