import * as types from '../constants/actionsTypes';
import assign from 'lodash/assign';

const initialState = {
  loginData: '',
  userData: '',
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case types.EXAMPLE: {
      return assign({}, state, {
        userData: action.data,
      });
    }

    default:
      return state;
  }
}
