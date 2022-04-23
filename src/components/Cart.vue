<template>
  <div>
    <span
      class="material-symbols-outlined exit cursor"
      @click="$store.commit('toggleCart')"
    >
      cancel
    </span>
    <h1>Your cart {{ totalSum == 0 ? "is empty" : "" }}</h1>
    <ul>
      <li v-for="(object, index) in cart">
        <section class="flexed">
          <img :src="object.imgSrc" alt="" />
          <p>{{ object.name }}</p>
        </section>

        <section class="amount">
          <span @click="sub(object.id)" class="cursor">-</span>
          <p>{{ object.amount }}</p>
          <span @click="addToCart(object, id)" class="cursor">+</span>
        </section>
      </li>
    </ul>
    <h1>Total: {{ totalSum }} $</h1>

    <button class="cursor">Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    sub(id) {
      this.$store.commit("removeFromCart", id);
    },
    addToCart(object, id) {
      this.$store.commit("addToCart", object, id);
    },
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalSum() {
      return this.$store.getters.totalSum;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  background-color: rgb(201, 192, 192);
  overflow: scroll;
  scrollbar-width: none;
  display: flex;
  align-content: center;
  flex-direction: column;
  color: rgba(3, 22, 1, 0.87);
  //   padding-top:5rem ;
  &::-webkit-scrollbar {
    display: none;
  }
  ul {
    padding: 0;
  }
  li {
    margin-bottom: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 4px 4px;
    list-style-type: none;
    background-color: rgb(224, 217, 217);
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin-left: 5%;
  }
  .flexed {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 5rem;
    p {
      word-wrap: break-word;
      max-width: 200px;
      padding-left: 0.5rem;
    }
    img {
      max-width: 40%;
      height: 100%;
    }
  }
  .amount {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20%;
    margin: 0 !important;
    padding-right: 0.5rem;
  }

  .exit {
    align-self: flex-end;
    padding: 3rem 3rem 0rem 0rem;
  }
  button,
  h1 {
    align-self: center;
  }

  button {
    border: 0px;
    border-radius: 2.5px;
    margin-bottom: 10rem;
    padding: 0.8rem 2rem;
    background-color: rgb(0, 102, 143);
    color: white;
    font-size: 16px;
  }
}
span {
  font-size: 30px;
}
.cursor {
  cursor: pointer;
}
@media (min-width: 1000px) {
  button {
    margin-bottom: 10% !important;
  }
}
</style>