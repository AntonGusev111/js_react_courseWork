import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { hitsReducer } from "../reducers/hitsReducer";
import { CategoriesReducer } from "../reducers/CategoriesReduser";
import { CatalogReducer } from "../reducers/CatalogReducer";
import { SearchReducer } from "../reducers/SearchReducer";
import { SingleGoodReducer } from "../reducers/SingleGoodReducer";
import {
  getHitsEpic,
  getCategoriesEpic,
  getCatalogEpic,
  changeSearchEpic,
  getGoodEpic,
} from "../epics/epics";

const reducer = combineReducers({
  hits: hitsReducer,
  categories: CategoriesReducer,
  catalog: CatalogReducer,
  search: SearchReducer,
  singleGood: SingleGoodReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  getHitsEpic,
  getCategoriesEpic,
  getCatalogEpic,
  changeSearchEpic,
  getGoodEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export { store };
