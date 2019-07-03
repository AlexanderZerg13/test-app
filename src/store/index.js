import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as reducers from './reducers';

const composeEnhancers = composeWithDevTools({
  serialize: true,
});

export default createStore(
  combineReducers(reducers),
  composeEnhancers(applyMiddleware(thunkMiddleware)),
);
