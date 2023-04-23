import { compose, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import { rootReducer } from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './root-saga';

// const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
//   Boolean
// );

const sagaMiddleware = createSagaMiddleware();
let middleWares = [sagaMiddleware]


const composedEnhancers = compose(applyMiddleware(...middleWares));

const store = createStore(rootReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;