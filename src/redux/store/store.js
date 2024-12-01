// redux/store/store.js

import { createStore } from "redux";
import rootReducer from "../reducers";

// ساخت استور
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // دیباگ با Redux DevTools
);

export default store;
