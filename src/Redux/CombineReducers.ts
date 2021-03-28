import {combineReducers} from "redux";
import CartReducer from "./CartReducer";

const reducers = combineReducers({
    CartReducer:CartReducer
})

export default reducers

export type RootState = ReturnType<typeof reducers>