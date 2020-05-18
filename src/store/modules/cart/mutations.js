export default {
  ADD_TO_CART: (state, value) => {
    value.quantity = 1; //usado para aumentar a quantidade no carrinho, se o usuário quiser
    state.cart.push(value);
    localStorage.setItem("cart", JSON.stringify(state.cart));
  },

  REMOVE_FROM_CART: (state, value) => {
    for(let item in state.cart){
      if(state.cart[item].id === value){
        state.cart.splice(item, 1);
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
    }
  },

  CLEAR_CART: (state, value) => {
    state.cart = [];
    localStorage.removeItem("cart");
  }
}