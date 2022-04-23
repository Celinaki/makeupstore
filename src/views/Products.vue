<template>
    <div class="content-wrap">
        <Product v-for="(object, index) in productList"
        :name=object.name
        :price=parseFloat(object.price)
        :imgSrc=object.image_link
        :id=object.id
        :key="index"
        
         
        />

    </div>
</template>

<script>
import productsData from '@/data.json'

import Product from '@/components/Product.vue'
export default {
    components:{
        Product
    },
    data(){
        return{
                productList: productsData

        }
    },
    takeMeUp(){
        
    },
}
</script>

<style lang="scss" scoped>
.content-wrap{
    padding: 1rem 2rem; 
    display: grid;
    gap: 1rem;
}
@media (min-width:1000px){
    .content-wrap{
        padding: 3rem 15rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 1rem;
    }

}
</style>