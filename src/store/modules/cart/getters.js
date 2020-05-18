export default {
  getCartList: state => {
    state.cart = JSON.parse(localStorage.getItem("cart")) || [];

    return state.cart;
  },
  getCartTotal: state => {
    state.total = 0;
    for(let item in state.cart){
      state.total += state.cart[item].price * state.cart[item].quantity;
    }

    return state.total;
  }
}