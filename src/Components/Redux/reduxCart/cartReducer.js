import * as actionTypes from './cartTypes';

const INTIAL_STATE = {
  products: [], //id, title, description, img
  cart: [], //id, title, description, img, qty
  favorite: [],
  param: "",
  user: [],
  forget: [],
  forgetUserId: [],
  // product: null,
  // qty: 1,
  // currentItem: null
};

const cartReducer = (state = INTIAL_STATE, action) => { 
    switch (action.type) {
      case actionTypes.SET_PRODUCTS:
        return { ...state, products: action.payload };

      case actionTypes.GET_PARAM:
        return {
          ...state,
          param: action.payload,
        };

      case actionTypes.ADD_TO_CART:
        const item = state.products.find(
          (prod) => prod._id === action.payload._id
        );
        const inCart = state.cart.find((item) =>
          item._id === action.payload._id ? true : false
        );
        return {
          ...state,
          cart: inCart
            ? state.cart.map((item) =>
                item._id === action.payload._id
                  ? { ...item, qty: item.qty + 1 }
                  : item
              )
            : [...state.cart, { ...item, qty: 1 }],
        };

      case actionTypes.ADD_TO_FAVORITE:
        const inFavorite = state.favorite.find((item) =>
          item._id === action.payload._id ? true : false
        );
        if (inFavorite) {
          return {
            ...state,
            favorite: state.favorite.filter(
              (item) => item._id !== action.payload._id
            ),
          };
        } else {
          return {
            ...state,
            favorite: [...state.favorite, action.payload],
          };
        }

      case actionTypes.REMOVE_FROM_CART:
        const cartItem = state.cart.find((prod) => prod._id === action.payload);
        if (cartItem.qty === 1) {
          return {
            ...state,
            cart: state.cart.filter((item) => item._id !== action.payload),
          };
        } else {
          return {
            ...state,
            cart: state.cart.map((item) =>
              item._id === action.payload
                ? { ...item, qty: item.qty - 1 }
                : item
            ),
          };
        }

      case actionTypes.GET_USER:
        return {
          ...state,
          user: action.payload,
        };

      case actionTypes.GET_FORGET_USER:
        return {
          ...state,
          forget: action.payload,
        };

      case actionTypes.GET_FORGET_USER_ID:
        return {
          ...state,
          forgetUserId: action.payload,
        };

      case actionTypes.REMOVE_USER:
        return {
          ...state,
          user: [],
        };

      default:
        return state;
    }
}

export default cartReducer;
