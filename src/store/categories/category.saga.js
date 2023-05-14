import { takeLatest, all, call, put } from 'redux-saga/effects';
import { CATEGORIES_ACTION_TYPES } from './category.type';
import { getCategoriesAndDocuments } from '../../utils/firebase.util';
import { fetchCategoriesFailed, fetchCategoriesSuccess } from './category.action';

export function* onFetchCategoriesAsync() {
  try {
    const categoriesMap = yield call(getCategoriesAndDocuments, 'categories');
    yield put(fetchCategoriesSuccess(categoriesMap));
  } catch (e) {
    yield put(fetchCategoriesFailed(e));
  }
}

export function* onFetchCategories() {
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, onFetchCategoriesAsync);
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}