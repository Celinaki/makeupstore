<template>
  <div class="nav-wrap">
    <h1>My webshop.com</h1>
    <section class="cart-button" @click="$store.commit('toggleCart')">
      <span class="material-icons-outlined">shopping_cart</span>
      <p>Cart</p>
      <span class="material-icons-outlined"> arrow_drop_down </span>
    </section>
    <transition name="slide">
      <Cart v-if="$store.state.cartOpen" class="cart" />
    </transition>
  </div>
</template>

<script>
import Cart from "@/components/Cart.vue";
export default {
  components: {
    Cart,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.nav-wrap {
  background-color: #212529;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.7rem 0rem;
  color: #fff;

  h1 {
    margin: 0;
    font-size: 22px;
  }
  .cart-button {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.9rem;
    border-radius: 2.5px;
    background-color: #6c757d;
    transition: 300ms;
    cursor: pointer;
    p {
      margin: 0;
    }
  }
  .cart {
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
  }
}

.slide-enter-active {
  animation: slide-in 0.6s forwards ease-out;
}
.slide-leave-active {
  animation: slide-out 0.6s forwards ease-out;
}
@keyframes slide-out {
  0% {
    transform: translateX(0px);
  }
  50% {
    transform: translateX(20%);
  }
  100% {
    transform: translateX(100%);
  }
}
@keyframes slide-in {
  0% {
    transform: translateX(100%);
  }
  60% {
    transform: translateX(80%);
  }
  100% {
    transform: translateX(0);
  }
}

@media (min-width: 1000px) {
  .cart-button:hover {
    background-color: #383c41;
  }

  .cart {
    width: 30vw !important;
    right: 0;
  }
}
</style>
