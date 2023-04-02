import { createStore, combineReducers, applyMiddleware, compose, } from 'redux';
import { combineEpics, createEpicMiddleware } from 'redux-observable';
import hitsReducer from '../reducers/hitsReducer';
import { getHitsEpic } from '../epics/epics';

const reducer = combineReducers({
    hits: hitsReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
    getHitsEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(epicMiddleware)
  ));
  
  epicMiddleware.run(epic);
  
  export {store};