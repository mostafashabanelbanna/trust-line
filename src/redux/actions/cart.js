// import * as types from "../constants/actionTypes";
// let foundProduct;
// let index;

// export const incQty = () => (dispatch, getState) => {
//   dispatch({ type: types.INCREASE_QTY, payload: getState().cart.qty + 1 });
// };

// export const decQty = () => (dispatch, getState) => {
//   if (getState().cart.qty - 1 < 1) {
//     dispatch({ type: types.DECREASE_QTY, payload: 1 });
//   } else {
//     dispatch({ type: types.DECREASE_QTY, payload: getState().cart.qty - 1 });
//   }
// };

// export const onAddToCart =
//   (product, quantity = 1) =>
//   (dispatch, getState) => {
//     // const cartItems = ;
//     const CheckProductInCart = getState().cart.cartItems.find(
//       (item) => item.id === product.id
//     );

//     // Test Local Storage
//     localStorage.setItem(
//       "totalPrice",
//       getState().cart.totalPrice + product.productPrices[0].price * quantity
//     );
//     localStorage.setItem(
//       "totalQuantities",
//       getState().cart.totalQuantities + quantity
//     );

//     dispatch({
//       type: types.ADD_TOTAL_PRICE,
//       payload:
//         getState().cart.totalPrice + product.productPrices[0].price * quantity,
//     });
//     dispatch({
//       type: types.ADD_TOTAL_QUANTITIES,
//       payload: getState().cart.totalQuantities + quantity,
//     });

//     // if the item already exist in the cart
//     // we simply update the cart items
//     if (CheckProductInCart) {
//       const updatedCartItems = getState().cart.cartItems.map((cartProduct) => {
//         if (cartProduct.id === product.id) {
//           return {
//             ...cartProduct,
//             quantity: cartProduct.quantity + quantity,
//           };
//         } else {
//           return {
//             ...cartProduct,
//           };
//         }
//       });
//       localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

//       dispatch({
//         type: types.ADD_CARD_ITEMS,
//         payload: updatedCartItems,
//       });
//     } else {
//       product.quantity = quantity;
//       localStorage.setItem(
//         "cardItems",
//         JSON.stringify([...getState().cart.cartItems, { ...product }])
//       );

//       dispatch({
//         type: types.ADD_CARD_ITEMS,
//         payload: localStorage.setItem(
//           "cardItems",
//           JSON.stringify([...getState().cart.cartItems, { ...product }])
//         ),
//       });
//     }

//     // toast
//   };

// export const showCart = () => (dispatch) => {
//   dispatch({ type: types.SHOW_CART, payload: true });
// };

// export const hideCart = () => (dispatch) => {
//   dispatch({ type: types.HIDE_CART, payload: false });
// };

// export const onRemoveFromCart = (product) => (dispatch, getState) => {
//   foundProduct = getState().cart.cartItems.find(
//     (item) => item.id === product.id
//   );
//   const newCartItems = getState().cart.cartItems.filter(
//     (item) => item.id !== product.id
//   );
//   dispatch({
//     type: types.ADD_CARD_ITEMS,
//     payload: [...newCartItems],
//   });
//   dispatch({
//     type: types.ADD_TOTAL_PRICE,
//     payload:
//       getState().cart.totalPrice -
//       foundProduct.productPrices[0].price * foundProduct.quantity,
//   });
//   dispatch({
//     type: types.ADD_TOTAL_QUANTITIES,
//     payload: getState().cart.totalQuantities - foundProduct.quantity,
//   });
// };

// export const toggleCartItemQuanitity = (id, value) => (dispatch, getState) => {
//   foundProduct = getState().cart.cartItems.find((item) => item.id === id);
//   index = getState().cart.cartItems.findIndex((product) => product.id === id);
//   const newCartItems = getState().cart.cartItems.filter(
//     (item) => item.id !== id
//   );
//   if (value === "inc") {
//     dispatch({
//       type: types.ADD_CARD_ITEMS,
//       payload: [
//         ...newCartItems,
//         { ...foundProduct, quantity: foundProduct.quantity + 1 },
//       ],
//     });
//     dispatch({
//       type: types.ADD_TOTAL_PRICE,
//       payload: getState().cart.totalPrice + foundProduct.productPrices[0].price,
//     });
//     dispatch({
//       type: types.ADD_TOTAL_QUANTITIES,
//       payload: getState().cart.totalQuantities + 1,
//     });
//   } else if (value === "dec") {
//     if (foundProduct.quantity > 1) {
//       dispatch({
//         type: types.ADD_CARD_ITEMS,
//         payload: [
//           ...newCartItems,
//           { ...foundProduct, quantity: foundProduct.quantity - 1 },
//         ],
//       });
//       dispatch({
//         type: types.ADD_TOTAL_PRICE,
//         payload:
//           getState().cart.totalPrice - foundProduct.productPrices[0].price,
//       });
//       dispatch({
//         type: types.ADD_TOTAL_QUANTITIES,
//         payload: getState().cart.totalQuantities - 1,
//       });
//     }
//   }
// };
