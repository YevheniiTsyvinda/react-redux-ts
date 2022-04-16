import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { todoResucer } from "./todoReducer";

export const rootReducer= combineReducers({
    user: userReducer,
    todo: todoResucer
})

export type RootState = ReturnType<typeof rootReducer>