import * as types from "../constants/actionTypes";

const intialState = {
  showCart: false,
  cartItems: [],
  totalPrice: 0,
  totalQuantities: 0,
  qty: 1,
};

export default (state = intialState, action) => {
  switch (action.type) {
    case types.SHOW_CART:
      return { ...state, showCart: action.payload };
    case types.HIDE_CART:
      return { ...state, showCart: action.payload };
    case types.INCREASE_QTY:
      return { ...state, qty: action.payload };
    case types.DECREASE_QTY:
      return { ...state, qty: action.payload };
    case types.ADD_TOTAL_PRICE:
      return { ...state, totalPrice: action.payload };
    case types.ADD_TOTAL_QUANTITIES:
      return { ...state, totalQuantities: action.payload };
    // case types.UPDATE_CARD_ITEMS:
    //   return { ...state, cartItems: action.payload };
    case types.ADD_CARD_ITEMS:
      return { ...state, cartItems: action.payload };
    default:
      return state;
  }
};
