/* eslint-disable */
import userTypes from '../types/userTypes';

const initialUserState = {
  saveUserLoading: false,
  updateUserLoading: false,
  deleteUserLoading: false,
  resetPasswordReq: false,
  loginLoading: false,
  passwordUpdated: false,
  deleted: false,
  user: {},
  error: '',
  auth: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case userTypes.SAVE_USER_REQUEST:
      return {
        ...state,
        saveUserLoading: true,
      };
    case userTypes.SAVE_USER_SUCCESS:
      return {
        ...state,
        saveUserLoading: false,
        user: action.payload,
      };
    case userTypes.SAVE_USER_FAILURE:
      return {
        ...state,
        saveUserLoading: false,
        error: action.payload,
        user: {},
      };
    case userTypes.UPDATE_USER_REQUEST:
      return {
        ...state,
        updateUserLoading: true,
      };
    case userTypes.UPDATE_USER_SUCCESS:
      return {
        ...state,
        updateUserLoading: false,
        user: action.payload,
      };
    case userTypes.UPDATE_USER_FAILURE:
      return {
        ...state,
        updateUserLoading: false,
        error: action.payload,
      };
    case userTypes.DELETE_USER_REQUEST:
      return {
        ...state,
        deleteUserLoading: true,
      };
    case userTypes.DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteUserLoading: false,
        user: {},
        deleted: true,
        auth: false,
      };
    case userTypes.DELETE_USER_FAILUR:
      return {
        ...state,
        deleteUserLoading: false,
        error: action.payload,
      };
    case userTypes.LOGIN_USER_REQUEST:
      return {
        ...state,
        loginLoading: true,
      };
    case userTypes.LOGIN_USER_SUCCESS:
      const user = action.payload;
      return {
        ...state,
        loginLoading: false,
        auth: user.id,
      };
    case userTypes.LOGIN_USER_FAILURE:
      return {
        ...state,
        loginLoading: false,
        error: action.payload,
      };
    case userTypes.RESET_USER_PASSWORD_REQUEST:
      return {
        ...state,
        resetPasswordReq: true,
      };
    case userTypes.RESET_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPasswordReq: false,
        user: {...state.user, password: action.payload},
        passwordUpdated: true,
      };
    case userTypes.RESET_USER_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
        resetPasswordReq: false,
      };
    default:
      return {...state};
  }
};

export default userReducer;
