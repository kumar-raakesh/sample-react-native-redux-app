import * as types from '../constants/actionsTypes';

const initialState = {
  loginData: '',
};

export default function commonReducer(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      return Object.assign({}, state);
      loginData: action.data;
    }

    default:
      return state;
  }
}
