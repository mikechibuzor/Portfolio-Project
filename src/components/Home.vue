<template>
  <p>Home</p>
  <div class="first-content">
    <carousel></carousel>
    
    <!-- Who we are starts -->
    <div class="who-we-are flex flex-col items-center justify-center  w-screen px-6  xl:px-32">
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
    <div class="category w-screen bg-white">
        <div class="head flex justify-between items-center xl:items-stretch px-6 xl:px-16 py-8">
            <h2 class="text-xl  xl:text-2xl">Shop by category</h2>
            <h4 class="text-sm xl:text-base ">SHOP ALL PRODUCTS</h4>
        </div>
        <div class="products border-1 px-8 pb-10 grid grid-cols-1  xl:grid-cols-3 gap-y-10 gap-x-20  ">
            <single-product v-for="category in categories" :imgsource="category" :key="category"></single-product>
        </div>   
    </div>
    <!-- Category ends -->
</template>

<script>
import Carousel from './Utilities/Carousel.vue';
import SingleProduct from './layout/SingleProduct.vue';

export default {
  components:{
    Carousel,
    SingleProduct
  },
  data(){
      return {
          // categories: [
          //     "../assets/Img/firstImage.jpg",
          //      "../assets/Img/secondImage.png",
          //      "../assets/Img/thirdImage.png",
          //      "../assets/Img/fourthImage.png",  
          //      "../assets/Img/fifthImage.png", 
          //      "../assets/Img/sixthImage.png",           
          // ]
          categories: [
            "../assets/logo.jpg",
            "../assets/logo.jpg",
            "../assets/logo.jpg",
            "../assets/logo.jpg",
            "../assets/logo.jpg",
            "../assets/logo.jpg",
          ]
      }
  }
}
</script>

<style scoped>
  .who-we-are{
        background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
  }

  .who-we-are {
  height: 35vh;
}

h1,
h2 {
  font-family: Georgia, "Times New Roman", Times, serif;
}

.shopBtn,
.add-2-cart,
.who-we-are {
  background: linear-gradient(90deg, #f04c39 50.19%, #f6a73e 100%);
}



.latest-arrivals {
  background-color: rgba(107, 52, 63, 0.651);
}

.laProduct {
  height: 55vh;
  cursor: pointer;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15),
    -2px -2px 2px rgba(225, 225, 225, 1);
  transition: all 0.3s ease-in-out;
}

.laProduct:hover {
  box-shadow: 12px 12px 24px rgba(107, 52, 63, 0.651), -12px -12px 12px #eee;
}

.footImg {
  height: 35vh;
}

.laProduct .prodImg {
  height: 60%;
}
.laProduct .catText {
  height: 40%;
}


</style>