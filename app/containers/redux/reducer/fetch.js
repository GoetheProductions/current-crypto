import {
  FETCH_START,
  FETCH_END,
  FETCH_ERROR,
} from '../constants';

const defaultState = {
  isFetching: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    // case FETCH_START:
    //   return {
    //     ...state,
    //     isFetching: true,
    //   };

    // case FETCH_ERROR:
    //   return {
    //     ...state,
    //     error: action.error,
    //   };

    // case FETCH_END:
    //   return {
    //     ...state,
    //     isFetching: false,
    //   };

    default:
      return state;
  }
};
