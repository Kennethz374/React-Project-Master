const reducer = (state, action) => {
  if (action.type === "CLEAR_CART") {
    return { ...state, cart: [] };
  }
  if (action.type === "REMOVE") {
    const { cart } = state;
    const newCart = cart.filter(item => item.id !== action.payload);
    return {
      ...state,
      cart: newCart
    };
  }
  return state;
};

export default reducer;
