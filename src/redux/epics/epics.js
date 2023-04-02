import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, tap, retry, filter, debounceTime, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import {GET_HITS_REQUEST} from '../actions/actionTypes';
import {getHitsFailure, getHitssSuccess} from '../actions/actionCreators'

const getHitsEpic = action$ => action$.pipe(  //http://localhost:7070/api/top-sales
    ofType(GET_HITS_REQUEST),
    switchMap(o => ajax.getJSON('http://localhost:7070/api/top-sales').pipe(
        retry(4),
        map(o => getHitssSuccess(o)),
        catchError(e => of(getHitsFailure(e))),
    )),
);


export {getHitsEpic}