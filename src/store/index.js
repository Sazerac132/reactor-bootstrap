import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import initialState from './initialState';
import reducers from '../reducers';

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(logger)
);

export default store;
