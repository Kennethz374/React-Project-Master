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
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        console.log(price, amount);
        const itemTotal = price * amount;
        cartTotal.amount += amount;
        cartTotal.total += itemTotal;
        return cartTotal;
      },
      //acurr, curr
      {
        total: 0,
        amount: 0
        //initial value
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }
  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }

  if ((action.type = "DISPLAY_ITEMS")) {
    return { ...state, cart: action.payload, loading: false };
  }

  return state;
};

export default reducer;
