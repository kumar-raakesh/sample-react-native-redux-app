import * as types from '../constants/actionsTypes';
import axios from 'axios';

export function login() {
  return (dispatch) => {
    dispatch({
      type: types.LOGIN,
    });
  };
}

export function example() {
  return (dispatch) => {
    axios
      .get('https://api.npms.io/v2/search?q=react')
      .then((response) => {
        if (response.status == 200) {
          dispatch({
            type: types.EXAMPLE,
            data: response && response.data && response.data.total,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
