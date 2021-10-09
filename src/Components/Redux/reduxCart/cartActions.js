import * as actionTypes from './cartTypes';

export const setProducts = (products) => {
    return {
        type: actionTypes.SET_PRODUCTS,
        payload: products,
        quantity: Number
    };
};

export const getParam = (id) => {
    return {
        type: actionTypes.GET_PARAM,
        payload: id
    };
};

export const addToCart = (item) => {
    return {
        type: actionTypes.ADD_TO_CART,
        payload: item
    };
};

export const removeFromCart = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,

    };
};

// export const removeFromCart = (id, value) => {
//     return {
//         type: actionTypes.REMOVE_FROM_CART,
//         payload: {
//             item: id,
//             qty: value
//         }
//     };
// };

export const adjustQty = (itemID, value) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: {
            id: itemID,
            qty: value
        },
    };
};

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.ADJUST_QTY,
        payload: item
    };
};