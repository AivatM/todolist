import { createStore, combineReducers } from "redux";
import alertReducer from "./alert/alertReducer";
import { reducer as formReducer } from "redux-form";

let reducers = combineReducers({
  alert: alertReducer,
  form: formReducer,
});

let store = createStore(reducers);
window.store = store;
export default store;
