/* eslint-disable */
import userTypes from '../types/userTypes';

export default {
  // Add User Actions
  saveUserRequest: () => {
    return {
      type: userTypes.SAVE_USER_REQUEST,
    };
  },

  saveUserSuccess: user => {
    return {
      type: userTypes.SAVE_USER_SUCCESS,
      payload: user,
    };
  },
  saveUserError: error => {
    return {
      type: userTypes.SAVE_USER_FAILURE,
      payload: error,
    };
  },
  // Update User Loader
  updateUserRequest: () => {
    return {
      type: userTypes.UPDATE_USER_REQUEST,
    };
  },

  updateUserSuccess: user => {
    return {
      type: userTypes.UPDATE_USER_SUCCESS,
      payload: user,
    };
  },

  updateUserError: error => {
    return {
      type: userTypes.UPDATE_USER_FAILURE,
      payload: error,
    };
  },
  // Delete User Actions
  deleteUserRequest: () => {
    return {
      type: userTypes.DELETE_USER_REQUEST,
    };
  },

  deleteUserSuccess: id => {
    return {
      type: userTypes.DELETE_USER_SUCCESS,
      payload: id,
    };
  },

  deleteUserError: error => {
    return {
      type: userTypes.DELETE_USER_FAILUR,
      payload: error,
    };
  },

  // Login User Actions

  loginUserRequest: () => {
    return {
      type: userTypes.LOGIN_USER_REQUEST,
    };
  },

  loginUserSuccess: user => {
    return {
      type: userTypes.LOGIN_USER_SUCCESS,
      payload: user,
    };
  },

  loginUserError: error => {
    return {
      type: userTypes.LOGIN_USER_FAILURE,
      payload: error,
    };
  },

  // Reset Password
  resetPassUserRequest: () => {
    return {
      type: userTypes.RESET_USER_PASSWORD_REQUEST,
    };
  },

  resetPassUserSuccess: password => {
    return {
      type: userTypes.RESET_USER_PASSWORD_SUCCESS,
      payload: password,
    };
  },

  resetPassUserError: error => {
    return {
      type: userTypes.RESET_USER_PASSWORD_FAILURE,
      payload: error,
    };
  },
};
