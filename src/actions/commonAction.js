import * as types from '../constants/actionsTypes';

export function login() {
  console.log('actions called');
  return (dispatch) => {
    dispatch({
      type: types.LOGIN,
    });
  };
}
