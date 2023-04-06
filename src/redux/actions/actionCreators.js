import {
  GET_HITS_FAILURE,
  GET_HITS_REQUEST,
  GET_HITS_SUCCESS,
  GET_CATEGORIES_REQUEST,
  GET_CATEGORIES_FAILURE,
  GET_CATEGORIES_SUCCESS,
  GET_CATALOG_REQUEST,
  GET_CATALOG_FAILURE,
  GET_CATALOG_SUCCESS,
  CHANGE_SEARCH_FIELD,
  CHANGE_SEARCH_SUCCESS,
  GET_GOOD_REQUEST,
  GET_GOOD_FAILURE,
  GET_GOOD_SUCCESS,
} from "./actionTypes";

const getHitsRequest = (hits) => ({
  type: GET_HITS_REQUEST,
  payload: { hits },
});

const getHitsFailure = (error) => ({
  type: GET_HITS_FAILURE,
  payload: { error },
});

const getHitssSuccess = (items) => ({
  type: GET_HITS_SUCCESS,
  payload: { items },
});
//--------------------------------------------//
const getCategoriesRequest = (categories) => ({
  type: GET_CATEGORIES_REQUEST,
  payload: { categories },
});

const getCategoriesFailure = (error) => ({
  type: GET_CATEGORIES_FAILURE,
  payload: { error },
});

const getCategoriesSuccess = (items) => ({
  type: GET_CATEGORIES_SUCCESS,
  payload: { items },
});
//-------------------------------------------//
const getCatalogRequest = (catalog) => ({
  type: GET_CATALOG_REQUEST,
  payload: { catalog },
});

const getCatalogFailure = (error) => ({
  type: GET_CATALOG_FAILURE,
  payload: { error },
});

const getCatalogSuccess = (items) => ({
  type: GET_CATALOG_SUCCESS,
  payload: { items },
});
//-------------------------------------------//
const changeSearchField = (searchInput) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: { searchInput },
});

const changeSearchSuccess = (searchValue) => ({
  type: CHANGE_SEARCH_SUCCESS,
  payload: { searchValue },
});
//-------------------------------------------//
const getGoodRequest = (id) => ({
  type: GET_GOOD_REQUEST,
  payload: { id },
});

const getGoodFailure = (error) => ({
  type: GET_GOOD_FAILURE,
  payload: { error },
});

const getGoodSuccess = (items) => ({
  type: GET_GOOD_SUCCESS,
  payload: { items },
});

export {
  getHitsRequest,
  getHitsFailure,
  getHitssSuccess,
  getCategoriesRequest,
  getCategoriesFailure,
  getCategoriesSuccess,
  getCatalogRequest,
  getCatalogFailure,
  getCatalogSuccess,
  changeSearchField,
  changeSearchSuccess,
  getGoodRequest,
  getGoodFailure,
  getGoodSuccess,
};
