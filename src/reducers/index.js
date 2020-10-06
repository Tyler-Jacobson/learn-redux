import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    counterFromAll : counterReducer,
    loggedFromAll : loggedReducer,
})

export default allReducers