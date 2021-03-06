import { createStore, applyMiddleware } from "redux";

import rootReducer from "./root-reducer";

import logger from "redux-logger";

const middleWares = [];

export const store = createStore(rootReducer, applyMiddleware(...middleWares));
