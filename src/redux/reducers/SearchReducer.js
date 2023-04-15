import {
  CHANGE_SEARCH_FIELD,
  CHANGE_SEARCH_SUCCESS,
} from "../Actions/actionTypes";

const initialState = {
  searchInput: "",
  searchValue: "",
};

function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      const { searchInput } = action.payload;
      return {
        ...state,
        searchInput,
      };
    case CHANGE_SEARCH_SUCCESS:
      const { searchValue } = action.payload;
      return {
        ...state,
        searchValue,
      };
    default:
      return state;
  }
}

export { SearchReducer };
