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

    <!-- Bottom Starts -->
    <div class="bottom px-4 xl:px-16 py-8 w-full h-full ">
      <h1 class="text-3xl mb-6">Follow us on Instagram</h1>
      <a href="#" class="flex items-center" >
        <div class="insta-icon bg-black h-12 w-12 flex items-center justify-center mr-3" >
          
          <svg class="h-2/4 w-2/4 "  x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                V363.272z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
                c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
            </g>
          </g>
          <g>
            <g>
              <circle cx="396" cy="116" r="20"/>
            </g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          </svg>

        </div>
        smooches_lingerie
      </a>
      <div class="insta-pics mt-8 grid grid-cols-1 xl:grid-cols-5 gap-4 xl:gap-2 w-full h-full px-6 ">
        <a href="#" v-for="n in 5" :key="n" class="bg-gray-200 h-height30 xl:h-64">
          {{ n }}
        </a>
      </div>
      <div class="buttons mt-12 flex items-center justify-center">
        <a href="#" class="transition duration-300 hover:bg-red-500 hover:text-white bg-gray-700 mr-4 rounded text-white flex items-center justify-center px-4 py-1">Load more...</a>
        <a href="#" class="transition duration-300 hover:bg-black hover:text-white bg-red-500 mr-4 rounded text-white flex items-center justify-center px-4 py-1">
          <div class=" h-4 w-4 flex items-center justify-center mr-2" >
          
          <svg class="h-full w-full "  x="0px" y="0px"
            viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
          <g>
            <g>
              <path d="M363.273,0H148.728C66.719,0,0,66.719,0,148.728v214.544C0,445.281,66.719,512,148.728,512h214.544
                C445.281,512,512,445.281,512,363.273V148.728C512,66.719,445.281,0,363.273,0z M472,363.272C472,423.225,423.225,472,363.273,472
                H148.728C88.775,472,40,423.225,40,363.273V148.728C40,88.775,88.775,40,148.728,40h214.544C423.225,40,472,88.775,472,148.728
                V363.272z"/>
            </g>
          </g>
          <g>
            <g>
              <path d="M256,118c-76.094,0-138,61.906-138,138s61.906,138,138,138s138-61.906,138-138S332.094,118,256,118z M256,354
                c-54.037,0-98-43.963-98-98s43.963-98,98-98s98,43.963,98,98S310.037,354,256,354z"/>
            </g>
          </g>
          <g>
            <g>
              <circle cx="396" cy="116" r="20"/>
            </g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          <g>
          </g>
          </svg>

          </div>Follow on instagram</a>
      </div>
    </div>
    <!-- Bottom Ends  -->
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
          src: 'assets/images/seventhImage.jpg',
          id: 1,
          alt: null
        },
        {
          src: 'assets/images/fourteenthImage.jpg',
          id: 2,
          alt: null
        },
        {
          src: 'assets/images/5f71e348e62ec 1 (1).jpg',
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

.bottom .insta-icon{
  border-radius: 50%;
}
.bottom svg{
  stroke: white;
  fill: white;
}


</style>