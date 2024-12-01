// redux/reducers/index.js

import { combineReducers } from "redux";
import modalReducer from "./modalReducer";

// ترکیب ریدوسرها
const rootReducer = combineReducers({
  modal: modalReducer, // افزودن ریدوسر مودال
});

export default rootReducer;
