import { combineReducers } from "redux";
import generalReducer from "./general/general.reducer";
import userReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  general: generalReducer,
  user: userReducer,
});

export default rootReducer;
