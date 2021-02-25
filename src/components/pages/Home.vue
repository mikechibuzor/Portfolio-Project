<template>

  <div class="first-content">
    <custom-carousel :imagesObject='imagesObject'></custom-carousel>
    
    <!-- Who we are starts -->
    <div class="who-we-are h-auto xl:h-height40 flex flex-col items-center justify-center  w-screen px-6  xl:px-32">
        <h2 class=" text-3xl xl:text-4xl mt-6 mb-2  text-white">About Us</h2>
        <p class="text-center leading-8 mt-4 text-white text-lg  xl:px-20 ">
          Smooches is an online store that stocks on a variety of female lingerie, men underwear, sleepwear,
          loungewear, swimwear , sex toys and scents at best prices.<br /> The goal at SMOOCHES is to style 
          everyone with the underwear that best flatters them.
        </p>
        <p class="abtBtn text-center px-10 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white font-bold py-1  mt-6 bg-white text-red-600  mb-8 xl:mb-0">Read More</p>
    </div>
    <!-- Who we are ends -->
  </div>
  
    <!-- Category Starts -->
  <div class="category w-screen bg-white xl:px-12">
      <div class="head flex justify-between items-center xl:items-stretch px-6 xl:px-16 py-8">
          <h2 class="text-xl  xl:text-4xl">Shop by category</h2>
          <h4 class="text-sm xl:text-base ">SHOP ALL PRODUCTS</h4>
      </div>
      <div class="products border-1 px-8 pb-10 grid grid-cols-1  xl:grid-cols-3 gap-y-10 gap-x-20  ">
          <single-product v-for="category in getCategories" :category="category" :key="category"></single-product>
      </div>   
  </div>
    <!-- Category ends -->

    <!-- Latest Arrivals Starts -->
    <div class="latest-arrivals  w-screen">
        <div class="head grid items-center justify-items-center  p-5 w-screen ">
            <h2 class="text-center text-white text-2xl xl:text-4xl">Latest Arrivals</h2>
        </div>
        <div class="latest-products grid grid-cols-1 xl:grid-cols-4 px-6 xl:px-16 gap-3">
            <Product v-for="product in getLatestProducts" :product='product' :key="product.id" />
        </div>
        <div class="bottom p-8 flex items-center justify-center">
            <button class=" shopBtn text-white transition-all duration-300 ease-in-out px-4 py-1 text-sm">Shop All Products</button>
        </div>
    </div>
    <!-- Latest Arrivals Ends -->
</template>

<script>
import CustomCarousel from '../Utilities/CustomCarousel.vue';
import SingleProduct from '../layout/SingleProduct.vue';
import Product from '../layout/product.vue';


export default {
  components:{
    CustomCarousel,
    SingleProduct,
    Product
  },
  data(){
    return{
      imagesObject: [
        {
          src: 'cool',
          id: 1,
          alt: null
        },
        {
          src: 'great',
          id: 2,
          alt: null
        },
        {
          src: 'damn',
          id: 3,
          alt: null
        },
      ]
    }
  },
  computed:{
    getCategories(){
      return this.$store.getters['categories/getCategories'];
    },
    getLatestProducts(){
      return this.$store.getters['latestProducts/getLatestProducts']
    },
  },
}
</script>

<style scoped>

h1,
h2 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.shopBtn,
.who-we-are {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}


.shopBtn:hover{
  background: white;
  color: rgb(15, 2, 2);
}

.latest-arrivals {
  background-color: rgba(131, 30, 50, 0.719);
}





</style>