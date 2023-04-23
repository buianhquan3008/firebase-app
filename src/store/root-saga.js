import { all, call } from 'redux-saga/effects';
import { usersSaga } from './user/user.saga';

export function* rootSaga() {
  yield all([call(usersSaga)]);
}