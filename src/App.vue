<template>
<Navigator/>
<Products/>

</template>

<script>
import Navigator from './components/Navigator.vue'
import Products from './views/Products.vue'

export default {
  name: 'App',
  components: {
    Navigator,
    Products
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
}
html,body{
  margin: 0;
  padding: 0;
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ;
    background-color: rgb(248, 248, 248);
  position: relative;
}

</style>
