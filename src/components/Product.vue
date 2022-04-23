<template>
  <div class="product-wrap">
    <img :src="imgSrc" alt="" />
    <p>{{ name }}</p>
    <section class="button-price">
      <button @click="addToCart(imgSrc, name, price, id)">Buy</button>
      <p>{{ price }} $</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    imgSrc: String,
    price: Number,
    id: Number,
  },

  methods: {
    addToCart(imgSrc, name, price, id) {
      let item = {
        imgSrc: imgSrc,
        name: name,
        price: price,
        id: id,
        amount: 1,
      };
      this.$store.commit("addToCart", item);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-wrap {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  justify-content: space-between;
  background-color: white;
  padding: 0.5rem 2rem 2rem 2rem;
  border-radius: 2.5px;
  border: 0.1px solid rgb(126, 122, 122, 0.3);
  & > * {
    padding: 0.5rem;
  }
  .button-price {
    display: flex;
    justify-content: space-between;
    button {
      all: unset;
      padding: 0 1.5rem;
      background-color: rgb(0, 102, 143);
      border-radius: 2.5px;
      color: white;
      cursor: pointer;
      transition: 300ms;
      &:hover {
        background-color: rgb(5, 95, 131);
      }
    }
  }
  img {
    width: 40%;
    height: 100%;
  }
  p {
    font-weight: 900;
  }
}
</style>