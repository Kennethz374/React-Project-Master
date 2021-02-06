import CartItem from "./CartItem";

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

  if (action.type === "INCREASE") {
    let tempCart = state.cart.map(item => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    return { ...state, cart: tempCart };
  }

  if (action.type === "DECREASE") {
    let tempCart = state.cart
      .map(item => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter(cartItem => cartItem.amount !== 0);

    return { ...state, cart: tempCart };
  }

  if (action.type === "GET_TOTAL") {
    const { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        console.log(price, amount);
        cartTotal.amount += amount;
        cartTotal.total += price;
        return cartTotal;
      },
      {
        total: 0,
        amount: 0
      }
    );

    return { ...state, total, amount };
  }

  return state;
};

export default reducer;
