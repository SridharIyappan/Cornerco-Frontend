import * as actionTypes from './cartTypes';

const INTIAL_STATE =  {
    products: [], //id, title, description, img
    cart: [], //id, title, description, img, qty
    currentItem: null
}

const cartReducer = (state = INTIAL_STATE, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}
        case actionTypes.ADJUST_QTY:
            return {}
        case actionTypes.LOAD_CURRENT_ITEM:
            return {}
        default:
            return state;
    }
}

export default cartReducer;