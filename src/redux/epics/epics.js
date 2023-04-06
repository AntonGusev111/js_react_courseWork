import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  map,
  tap,
  retry,
  filter,
  debounceTime,
  switchMap,
  catchError,
} from "rxjs/operators";
import { of } from "rxjs";
import {
  GET_HITS_REQUEST,
  GET_CATEGORIES_REQUEST,
  GET_CATALOG_REQUEST,
  CHANGE_SEARCH_FIELD,
  GET_GOOD_REQUEST,
  GET_GOOD_FAILURE,
  GET_GOOD_SUCCESS,
} from "../actions/actionTypes";
import {
  getHitsFailure,
  getHitssSuccess,
  getCategoriesSuccess,
  getCategoriesFailure,
  getCatalogSuccess,
  getCatalogFailure,
  changeSearchSuccess,
  getGoodFailure,
  getGoodSuccess,
} from "../actions/actionCreators";

const getHitsEpic = (action$) =>
  action$.pipe(
    ofType(GET_HITS_REQUEST),
    switchMap((o) =>
      ajax.getJSON("http://localhost:7070/api/top-sales").pipe(
        retry(4),
        map((o) => getHitssSuccess(o)),
        catchError((e) => of(getHitsFailure(e)))
      )
    )
  );

const getCategoriesEpic = (action$) =>
  action$.pipe(
    ofType(GET_CATEGORIES_REQUEST),
    switchMap((o) =>
      ajax.getJSON("http://localhost:7070/api/categories").pipe(
        retry(4),
        map((o) => getCategoriesSuccess(o)),
        catchError((e) => of(getCategoriesFailure(e)))
      )
    )
  );

const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map((o) => o.payload.searchInput.trim("")),
    filter((o) => o !== ""),
    debounceTime(2000),
    map((o) => changeSearchSuccess(o))
  );

const getCatalogEpic = (action$) =>
  action$.pipe(
    ofType(GET_CATALOG_REQUEST),
    map((o) => o.payload.catalog),
    //tap((o) => console.log(o)),
    map(
      (o) =>
        new URLSearchParams({
          categoryId: o.category,
          offset: o.offset,
          q: o.q,
        })
    ),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7070/api/items?${o}`).pipe(
        retry(3),
        map((o) => getCatalogSuccess(o)),
        catchError((e) => of(getCatalogFailure(e)))
      )
    )
  );

const getGoodEpic = (action$) =>
  action$.pipe(
    ofType(GET_GOOD_REQUEST),
    map((o) => o.payload.id),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7070/api/items/${o}`).pipe(
        retry(3),
        map((o) => getGoodSuccess(o)),
        catchError((e) => of(getGoodFailure(e)))
      )
    )
  );

export {
  getHitsEpic,
  getCategoriesEpic,
  getCatalogEpic,
  changeSearchEpic,
  getGoodEpic,
};
