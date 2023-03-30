import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

let middleWares = []


const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancers);

export default store;