import axios from "axios";
import {
  USER_LOGIN_FAILURE,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS
} from "../ActionTypes/AuthActionType";

export const signup = (crid) => (dispatch) => {
  dispatch({ type: USER_SIGNUP_REQUEST });

  return axios
    .post("https://evallo-server.onrender.com/signup", crid)
    .then((res) => {
      return dispatch({ type: USER_SIGNUP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_SIGNUP_FAILURE });
    });
};

export const login = (crid) => (dispatch) => {
  dispatch({ type: USER_LOGIN_REQUEST });

  return axios
    .post("https://evallo-server.onrender.com/login", crid)
    .then((res) => {
      return dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: USER_LOGIN_FAILURE });
    });
};

export const logout = () => (dispatch) => {
 return dispatch({ type: USER_LOGOUT });
};
