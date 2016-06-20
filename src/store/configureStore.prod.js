import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { reduxReactRouter } from 'redux-router';
import { createHistory } from 'history';

const enhancer = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory }),
);

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, enhancer);
}
