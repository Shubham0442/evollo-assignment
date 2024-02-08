import {
  GET_USER_CONTENT_FAILURE,
  GET_USER_CONTENT_REQUEST,
  GET_USER_CONTENT_SUCCESS
} from "../ActionTypes/ContentActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  userContent: []
};

export const contentReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_USER_CONTENT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_USER_CONTENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        userContent: payload
      };
    case GET_USER_CONTENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        userContent: []
      };
    default:
      return state;
  }
};
