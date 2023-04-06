import {
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function CategoriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORIES_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATEGORIES_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_CATEGORIES_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export { CategoriesReducer };