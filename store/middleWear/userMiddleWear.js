/* eslint-disable */

import userAction from '../actions/userAction';
// All API REQ WILL BE HERE
const passGenerator = require('generate-password');

let password = passGenerator.generate({
  length: 10,
  numbers: true,
});
import {useSelector} from 'react-redux';
export const addUser = user => {
  return dispatch => {
    dispatch(userAction.saveUserRequest);
    dispatch(userAction.saveUserSuccess(user));
  };
};

export const updateUser = user => {
  return dispatch => {
    dispatch(userAction.updateUserRequest);
    dispatch(userAction.updateUserSuccess(user));
  };
};

export const deleteUser = id => {
  return dispatch => {
    dispatch(userAction.deleteUserRequest);
    dispatch(userAction.deleteUserSuccess(id));
  };
};

export const loginUser = user => {
  return dispatch => {
    dispatch(userAction.loginUserRequest);
    const savedUser = useSelector(state => state.user.user);
    if (user.email == savedUser.email && user.password == savedUser.password) {
      dispatch(userAction.loginUserSuccess);
    } else {
      dispatch(userAction.loginUserError('Unable to find your account'));
    }
  };
};

export const resetPassword = email => {
  return dispatch => {
    dispatch(userAction.resetPassUserRequest);
    console.log(
      'Email Send Successfully ' + email + 'This is new Password' + password,
    );
    if (password) {
      dispatch(userAction.resetPassUserSuccess(password));
    } else {
      dispatch(
        userAction.resetPassUserError(
          'Something went wrong in updating password',
        ),
      );
    }
  };
};
