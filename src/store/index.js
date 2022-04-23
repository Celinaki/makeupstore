import { createStore } from 'vuex'
import productData from '@/data.json'

export default createStore({
  state: {
    productList: productData,
    cart: [],
    cartOpen: false,
  },
  getters: {

    totalSum(state) {
      let cart = state.cart
      let total = 0;
      for (let object of cart) {
        total += object.amount * object.price
      }
      return total.toFixed(2)
    },
  },
  mutations: {
    toggleCart(state) {
      state.cartOpen = !state.cartOpen
    },


    addToCart(state, item) {
      let cart = state.cart
      if (!(cart.some(product => product.id == item.id))) {
        cart.push(item)

      }
      else {
        for (let product of cart) {
          if (product.id == item.id) {
            product.amount++
          }
        }
      }

    },

    removeFromCart(state, id) {

      let object = state.cart.find((product => product.id == id))
      object.amount--

      if (object.amount == 0) {
        state.cart = state.cart.filter((product => product.id != id))
      }

    },


  },
  actions: {

  },
  modules: {
  }
})
