import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';

const devtools = process.env.NODE_ENV !== 'production' ? window.devToolsExtension || (() => noop => noop) : () => noop => noop;
export default function configureStore(initialState = {}) {
  return createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk), devtools())
  );
}
