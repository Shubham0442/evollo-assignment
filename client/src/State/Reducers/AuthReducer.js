import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT
} from "../ActionTypes/AuthActionType";

const initState = {
  isAuth: false,
  isLoading: false,
  isError: false,
  token: null,
  userData: {}
};

export const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuth: true,
        token: payload.token,
        userData: payload.userData
      };
    case USER_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        token: null,
        isAuth: false,
        userData: {}
      };
    case USER_LOGOUT:
      return {
        isLoading: false,
        isError: false,
        token: null,
        isAuth: false,
        userData: {}
      };
    default:
      return state;
  }
};
