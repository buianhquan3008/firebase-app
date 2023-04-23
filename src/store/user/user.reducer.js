import { USER_ACTION_TYPES } from './user.type';

export const USER_INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;
  console.log({ type, payload })
  switch (type) {
    // case USER_ACTION_TYPES.SET_CURRENT_USER:
      // return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return { ...state, currentUser: payload };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_OUT_FAIL:
    case USER_ACTION_TYPES.SIGN_IN_FAIL:
    case USER_ACTION_TYPES.SIGN_UP_FAIL:
      return { ...state, error: payload };
    default:
      return state;
  }
};
