import { USER_ACTION_TYPES } from './user.type';
import { createAction } from '../../utils/reducer.util';

export const setCurrentUser = (user) => 
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);

export const signInSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const signInFail = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, error);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {email, password});

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFail = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAIL);

export const signUpStart = (email, password) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_START, {email, password});

export const signUpSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS);

export const signUpFail = () =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAIL);

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);