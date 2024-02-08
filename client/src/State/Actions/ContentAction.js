import axios from "axios";
import {
  ADD_USER_CONTENT_FAILURE,
  ADD_USER_CONTENT_REQUEST,
  ADD_USER_CONTENT_SUCCESS,
  GET_USER_CONTENT_FAILURE,
  GET_USER_CONTENT_REQUEST,
  GET_USER_CONTENT_SUCCESS
} from "../ActionTypes/ContentActionTypes";

export const getContent = (userId, token) => (dispatch) => {
  dispatch({ type: GET_USER_CONTENT_REQUEST });

  return axios({
    method: "GET",
    url: `https://evallo-server.onrender.com/content?id=${userId}`,
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      console.log("res", res.data);
      dispatch({ type: GET_USER_CONTENT_SUCCESS, payload: res.data.content });
    })
    .catch((err) => {
      dispatch({ type: GET_USER_CONTENT_FAILURE });
    });
};

export const addContent = (formData, token) => (dispatch) => {
  dispatch({ type: ADD_USER_CONTENT_REQUEST });

  return axios({
    method: "post",
    url: "https://evallo-server.onrender.com/content/upload",
    data: formData,
    headers: {
      "authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  })
    .then((res) => {
      return dispatch({ type: ADD_USER_CONTENT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: ADD_USER_CONTENT_FAILURE });
    });
};
