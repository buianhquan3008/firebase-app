import { all, call } from 'redux-saga/effects';
import { usersSaga } from './user/user.saga';
import { categoriesSaga } from './categories/category.saga';


// lesson 38
export function* rootSaga() {
  yield all([
    call(usersSaga),
    call(categoriesSaga),
  ]);
}