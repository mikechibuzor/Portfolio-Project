<template>
  <p>Home</p>
  <div class="first-content">
    <carousel></carousel>
    
    <!-- Who we are starts -->
    <div class="who-we-are flex flex-col items-center justify-center  w-screen px-6 bg-pure-blue  xl:px-32">
        <h2 class="text-3xl mt-4 mb-2 text-white">Who We Are</h2>
        <p class="text-center text-white font-thin">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At inventore eveniet voluptas quas soluta <br />
            adipisci est ipsa adipisci est ipsa adipisci est ipsa reiciendis eaque fugit? <br />
            adipisci est ipsaadipisci est ipsaadipisci est ipsa
        </p>
        <p class="abtBtn text-center px-10 cursor-pointer hover:bg-black hover:text-white py-1  mt-6 bg-white text-red-900  mb-8 xl:mb-0">About Us</p>
    </div>
    <!-- Who we are ends -->
  </div>
  
    <!-- Category Starts -->
  <div class="category w-screen bg-red-100 xl:px-12">
      <div class="head flex justify-between items-center xl:items-stretch px-6 xl:px-16 py-8">
          <h2 class="text-xl  xl:text-2xl">Shop by category</h2>
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
            <h2 class="text-center text-white text-2xl">Latest Arrivals</h2>
        </div>
        <div class="latest-products grid grid-cols-1 xl:grid-cols-4 px-6 xl:px-16 gap-3">
            <latest-product v-for="latestProduct in getLatestProducts" :latestProduct='latestProduct' :key="latestProduct.name"></latest-product>
        </div>
        <div class="bottom p-8 flex items-center justify-center">
            <button class=" shopBtn text-white transition-all duration-300 ease-in-out px-4 py-1 text-sm">Shop All Products</button>
        </div>
    </div>
    <!-- Latest Arrivals Ends -->
</template>

<script>
import Carousel from '../Utilities/Carousel.vue';
import SingleProduct from '../layout/SingleProduct.vue';
import LatestProduct from '../layout/LatestProduct.vue';


export default {
  components:{
    Carousel,
    SingleProduct,
    LatestProduct
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

  .who-we-are {
  height: 35vh;
}

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