export default {
  addToCart: (context, value) => {
    context.commit("ADD_TO_CART", value);
  },
  removeFromCart: (context, value) => {
    context.commit("REMOVE_FROM_CART", value);
  },
  clearCart: (context, value) => {
    context.commit("CLEAR_CART", value);
  }
}