import {
    GET_HITS_FAILURE,
    GET_HITS_REQUEST,
    GET_HITS_SUCCESS
} from './actionTypes';

const getHitsRequest = hits => ({
    type: GET_HITS_REQUEST,
    payload: {hits},
  });

const getHitsFailure = error  => ({
    type: GET_HITS_FAILURE,
    payload: {error },
  });

const getHitssSuccess = items   => ({
    type: GET_HITS_SUCCESS,
    payload: {items  },
  });

export {getHitsRequest, getHitsFailure, getHitssSuccess}