import { combineReducers } from "redux";

import cartReducer from './reduxCart/cartReducer'

const reducer = combineReducers({
    cart: cartReducer
});

export default reducer;