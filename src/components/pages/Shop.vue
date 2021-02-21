<template>
  <p>Shop now</p>

   <div class="first-view  h-height60  w-screen">
        <Banner nameofpage="Shop" />
    </div>
    <!-- First View Ends -->

  <!-- Main Starts -->
  <main>
    <div class="head  flex w-screen px-4 xl:px-16 py-12 justify-between">
      <div class="first flex flex-col items-start ">
        <p class="text-sm text-gray-800 mb-2">
          <span class="cursor-pointer">Home</span>|
          <span class="2cu my-2rsor-pointer">Products</span>
        </p>
        <h2 class="text-5xl"  >Shop</h2>
        <p class="mt-4" >Showing all 12 results</p>
      </div>
    <div class="second">
      <select name="sort" class="cursor-pointer pl-2 pr-8 bg-gray-100 hover:bg-black hover:text-white transition duration-300 py-1  rounded-sm" id="sort">
          <option value="Default">Default</option>
          <option value="Default">Price</option>
          <option value="Default">Quantity</option>    
      </select>
    </div>
    </div>
    
    <div class="content  grid grid-cols-3 gap-5 px-16 py-6 w-screen">
      
      <aside class="col-span-1 hidden xl:block  ">
        
        <div class="search flex flex-col items-start mb-20">
          <h2 class="text-3xl">Search</h2>
          <div class="search-container mt-4 flex">
            <input  type="search" placeholder="Search for Product..." class="border border-gray-200 px-2 py-1 outline-none text-sm" name="" id="">
            <input type="button" class="text-white px-2 py-1" value="Search">
          </div>
        </div>

        <div class="product-category  ">
          <h2 class="text-3xl  text-left">Product Category</h2>
          <ul>
              <li class="flex items-center justify-between pr-8 mt-4 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 1</a>
                <span></span>7
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 2</a>
                <span></span>5
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 3</a>
                <span></span>6
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 4</a>
                <span></span>0
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 5</a>
                <span></span>10
              </li>
              <li class="flex items-center justify-between pr-8 mb-4">
                <a class="hover:text-red-400 transition duration-500 text-gray-500" href="#">Category 6</a>
                <span></span>15
              </li>
          </ul>
        </div>
        
        <div class="filter flex flex-col items-start mt-20 ">
          <h2 class="text-3xl">Filter by Price</h2>
          <div class="slidecontainer w-full flex flex-col items-start my-4">
            <input type="range" min="1" max="100" value="0" class="slider" id="myRange">
          </div>
          <p class="text-sm ">From N100 - 10,000</p>
        </div>
        
      </aside>

        <article class="col-span-3 xl:col-span-2 grid grid-cols-1 xl:grid-cols-3 gap-5 py-12">
          <Product v-for="product in getProducts " :product='product' :key="product.id" />
        </article>
      </div>
  </main>
  <!-- Main Ends -->

</template>

<script>
import Product from '../layout/product.vue';
import Banner from '../layout/Banner.vue';

export default {
  components:{
    Product,
    Banner
  },
  computed:{
    getProducts(){
      return this.$store.getters['products/getProducts'];
    },
  }
}
</script>

<style scoped>

input[type="button"] {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}


/* The slider itself */
.slider {
  -webkit-appearance: none; /* Override default CSS styles */
  appearance: none;
  width: 45%; /* Full-width */
  height: 0.3rem; /* Specified height */
  background: #d3d3d3; /* Grey background */
  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: 0.2s; /* 0.2 seconds transition on hover */
  transition: opacity 0.2s;
}

/* Mouse-over effects */
.slider:hover {
  opacity: 1; /* Fully shown on mouse-over */
}


</style>