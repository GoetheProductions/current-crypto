import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR, FETCH_END } from '../constants';

export const fetchStart = () => ({
  type: FETCH_START,
  isFetching: true,
});

export const fetchSuccess = (key, data) => ({
  type: FETCH_SUCCESS,
  key,
  data,
});

export const fetchError = error => ({
  type: FETCH_ERROR,
  error,
});

export const fetchEnd = () => ({
  type: FETCH_END,
  isFetching: false,
});
