import { takeLatest, put, all, call } from 'redux-saga/effects'
import { 
  createUserDocumentFromAuth, 
  signInWithGooglePopup, 
  signInAuthUserWithEmailAndPassword, 
  signOutUser, 
  createAuthUserWithEmailAndPassword, 
  getCurrentUser
} from '../../utils/firebase.util'
import { signInFail, signInSuccess, signOutFail, signOutSuccess, signUpFail } from './user.action';
import { USER_ACTION_TYPES } from './user.type';


export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
  try {
    const userSnapshot = yield call(
      createUserDocumentFromAuth,
      userAuth, 
      additionalDetails,
    )
    console.log(userSnapshot)
    yield put(signInSuccess({ id: userSnapshot.id }));
  } catch (error) {
    yield put(signInFail({ error }));
  }
} 


export function* signInWithGoogle() {
  try{
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFail({ error }));
  }
}

export function* signInWithEmailAndPassword({ payload: { email, password } }) {
  try {
    const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFail({ error }));
  }
}

export function* signOut() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFail({ error }));
  }
}

export function* signUp({payload: {email, password}}) {
  try {
    yield call(createAuthUserWithEmailAndPassword, email, password)
  } catch (e) {
    yield put(signUpFail({ e }));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (e) {
    yield put(signUpFail({ e }));
  }
}


export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmailAndPassword);
}

export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onCheckUserSession() {
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* usersSaga() {
  yield all([
    call(onGoogleSignInStart), 
    call(onEmailSignInStart),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onCheckUserSession),
  ])
}