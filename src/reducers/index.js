import todoReducers from "./todo-reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todoReducers
})

export default rootReducer;