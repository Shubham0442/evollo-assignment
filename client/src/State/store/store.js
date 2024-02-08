import { thunk } from "redux-thunk";
import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";

import { authReducer } from "../Reducers/AuthReducer";
import { contentReducer } from "../Reducers/ContentReducer";

const rootReducer = combineReducers({ authReducer, contentReducer });
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
