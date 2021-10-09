import * as actionTypes from './cartTypes';

const INTIAL_STATE =  {
    products: [], //id, title, description, img
    cart: [], //id, title, description, img, qty
    param: '',
    // product: null,
    // qty: 1,
    // currentItem: null
}

const cartReducer = (state = INTIAL_STATE, action) => { 
    switch(action.type) {

        case actionTypes.SET_PRODUCTS:
            return {...state, products: action.payload};

        case actionTypes.GET_PARAM:
            return {
                ...state,
                param: action.payload,
            }

        case actionTypes.ADD_TO_CART:
            const item = state.products.find((prod) => 
                            prod._id === action.payload._id);
            const inCart = state.cart.find((item) => 
                            item._id === action.payload._id ? true : false);
            return {
                ...state,
                cart: inCart ? state.cart.map((item) => 
                        item._id === action.payload._id ? 
                        {...item, qty: item.qty + 1} : item) : 
                        [...state.cart, {...item, qty: 1}],
            };
            

        case actionTypes.REMOVE_FROM_CART:
            const cartItem = state.cart.find((prod) => 
                            prod._id === action.payload);
            if (cartItem.qty === 1) {
               return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload),
               }
            }
            else {
                return {
                    ...state,
                    cart:  state.cart.map((item) => 
                            item._id === action.payload ? 
                            {...item, qty: item.qty - 1} : item),
                };
            }
            

        // case actionTypes.REMOVE_FROM_CART:
        //     return {
        //         ...state,
        //         cart: state.cart.filter((item) => item._id !== action.payload),
        //     }

        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) => 
                    item.id === action.payload.id ?
                    {...item, qty: action.payload.qty} :
                    item
                    ),
            }

        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
            
        default: 
            return state;
    }
}

export default cartReducer;


// case actionTypes.ADD_TO_CART:
            //     const item = payload;
            //     const existingItem = state.cart.find((existing) => existing._id === item._id ? true : false)
            //     if (existingItem) {
            //         return {
            //             ...state,
            //             // qty: state.qty+1,
            //             // cart: state.cart.map((i) => 
            //             //     i._id === existingItem ? state.cart: 1
            //             // )
            //         }
            //     }
            //     else {
            //         return {
            //             ...state, 
            //             cart: [...state.cart, item]
            //         };
            //     }